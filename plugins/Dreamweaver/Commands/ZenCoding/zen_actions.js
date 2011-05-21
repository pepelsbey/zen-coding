/**
 * Middleware layer that communicates between editor and Zen Coding.
 * This layer describes all available Zen Coding actions, like
 * "Expand Abbreviation".
 * @author Sergey Chikuyonok (serge.che@gmail.com)
 * @link http://chikuyonok.ru
 */
!function(){

var re_non_space = /[^\s\n\r]/,
    re_line_padding = /^\s+/,
    re_empty_line = /^\s+$/,
    re_specials = /[.*+?|()\[\]{}\\]/g,
    re_digit = /[0-9]/,
    re_curly_braces = /[{}]/g;

/**
 * Search for abbreviation in editor from current caret position
 * @param {zen_editor} editor Editor instance
 * @return {String|null}
 */
function findAbbreviation(editor, syntax) {
	var range = editor.getSelectionRange(),
	    content = editor.getContent();
	if (range.start != range.end) {
		// abbreviation is selected by user
		return content.substring(range.start, range.end);
	}

	// search for new abbreviation from current caret position
	var cur_line = editor.getCurrentLineRange();
	// find abbreviation if we are not inside a tag
	if (syntax != 'html' || !zen_coding.isInsideTag(content, range.end))
		return zen_coding.extractAbbreviation(content.substring(cur_line.start, range.start), syntax);

	return null;
}

/**
 * Find from current caret position and expand abbreviation in editor
 * @param {zen_editor} editor Editor instance
 * @param {String} [syntax] Syntax type (html, css, etc.)
 * @param {String} [profile_name] Output profile name (html, xml, xhtml)
 * @return {Boolean} Returns <code>true</code> if abbreviation was expanded
 * successfully
 */
function expandAbbreviation(editor, syntax, profile_name) {
	syntax = syntax || editor.getSyntax(true);
	profile_name = profile_name || editor.getProfileName();

	var caret_pos = editor.getCaretPos(),
	    abbr,
	    content = '';

	if ( (abbr = findAbbreviation(editor, syntax)) ) {
		if (syntax == 'css') abbr = abbr.toLowerCase();
		content = zen_coding.expandAbbreviation(abbr, syntax, profile_name);
		if (content) {
			editor.replaceContent(content, caret_pos - abbr.length, caret_pos);
			return true;
		}
	}

	return false;
}

/**
 * A special version of <code>expandAbbreviation</code> function: if it can't
 * find abbreviation, it will place Tab character at caret position
 * @param {zen_editor} editor Editor instance
 * @param {String} syntax Syntax type (html, css, etc.)
 * @param {String} profile_name Output profile name (html, xml, xhtml)
 */
function expandAbbreviationWithTab(editor, syntax, profile_name) {
	syntax = syntax || editor.getSyntax(true);
	profile_name = profile_name || editor.getProfileName();
	var selection = editor.getSelectionRange(),
	    indent = zen_coding.getVariable('indentation')
	    nl = zen_coding.getNewline(),
	    content = editor.getContent();
	if (~content.substring(selection.start,selection.end).indexOf(nl)) {
		// Pad multiline selection
		var start = content.substring(0,selection.start).lastIndexOf(nl),
			end = content.substring(selection.end).indexOf(nl);
		if (~start)
			start += nl.length;
		else
			start = 0;
		if (~end)
			end += selection.end;
		else
			end = content.length;
		var pad_content = indent  + zen_coding.padString(content.substring(start,end), indent);
		editor.replaceContent(pad_content, start, end, true);
		editor.createSelection(start, start + pad_content.length);
	} else if (syntax == 'text' ||
	           selection.start != selection.end ||
	           !expandAbbreviation(editor, syntax, profile_name)) {
		editor.replaceContent(indent, selection.start, selection.end);
	}
}

/**
 * Find and select HTML tag pair
 * @param {zen_editor} editor Editor instance
 * @param {String} [direction] Direction of pair matching: 'in' or 'out'.
 * Default is 'out'
 */
function matchPair(editor, direction, syntax) {
	direction = (direction || 'out').toLowerCase();
	syntax = syntax || editor.getProfileName();

	var range = editor.getSelectionRange(),
	    cursor = range.end,
	    range_start = range.start,
	    range_end = range.end,
	    content = editor.getContent(),
	    range = null,
	    _r,
	    old_open_tag = zen_coding.html_matcher.last_match['opening_tag'],
	    old_close_tag = zen_coding.html_matcher.last_match['closing_tag'];

	if (direction == 'in' && old_open_tag && range_start != range_end) {
//		user has previously selected tag and wants to move inward
		if (!old_close_tag) {
//			unary tag was selected, can't move inward
			return false;
		} else if (old_open_tag.start == range_start) {
			if (content.charAt(old_open_tag.end) == '<') {
//				test if the first inward tag matches the entire parent tag's content
				_r = zen_coding.html_matcher.find(content, old_open_tag.end + 1, syntax);
				if (_r[0] == old_open_tag.end && _r[1] == old_close_tag.start) {
					range = zen_coding.html_matcher(content, old_open_tag.end + 1, syntax);
				} else {
					range = [old_open_tag.end, old_close_tag.start];
				}
			} else {
				range = [old_open_tag.end, old_close_tag.start];
			}
		} else {
			var new_cursor = content.substring(0, old_close_tag.start).indexOf('<', old_open_tag.end);
			var search_pos = ~new_cursor ? new_cursor + 1 : old_open_tag.end;
			range = zen_coding.html_matcher(content, search_pos, syntax);
		}
	} else {
		range = zen_coding.html_matcher(content, cursor, syntax);
	}

	if (range != null && ~range[0]) {
		editor.createSelection(range[0], range[1]);
		return true;
	} else {
		return false;
	}
}

/**
 * Narrow down text indexes, adjusting selection to non-space characters
 * @param {String} text
 * @param {Number} start
 * @param {Number} end
 * @return {Array}
 */
function narrowToNonSpace(text, start, end) {
	// narrow down selection until first non-space character

	var non_space = text.substring(start,end).search(re_non_space);
	~non_space ?
		start += non_space :
		start = end;

	while (end-- > start && !re_non_space.test(text.charAt(end)));

	return [start, ++end];
}

/**
 * Wraps content with abbreviation
 * @param {zen_editor} Editor instance
 * @param {String} abbr Abbreviation to wrap with
 * @param {String} [syntax] Syntax type (html, css, etc.)
 * @param {String} [profile_name] Output profile name (html, xml, xhtml)
 */
function wrapWithAbbreviation(editor, abbr, syntax, profile_name) {
	syntax = syntax || editor.getSyntax();
	profile_name = profile_name || editor.getProfileName();
	abbr = abbr || editor.prompt("Enter abbreviation");

	var range = editor.getSelectionRange(),
	    start_offset = range.start,
	    end_offset = range.end,
	    content = editor.getContent();

	if (!abbr)
		return null;

	if (start_offset == end_offset) {
		// Prevent toggling CSS abbreviations in style tag or attribute
		var html_matcher = zen_coding.html_matcher,
		    syntax_bounds = editor.getSyntaxBounds();
		if (syntax_bounds)
			syntax = syntax_bounds.document_syntax;

		// no selection, find tag pair
		range = html_matcher(content, start_offset, profile_name);

		if (!range || !~range[0]) // nothing to wrap
			return null;

		var opening_tag = html_matcher.last_match['opening_tag'],
		    closing_tag = html_matcher.last_match['closing_tag'];

		if ((opening_tag.name == 'style' || opening_tag.name == 'script') && closing_tag)
			range = [opening_tag.start, closing_tag.end];

		var narrowed_sel = narrowToNonSpace(content, range[0], range[1]);

		start_offset = narrowed_sel[0];
		end_offset = narrowed_sel[1];
	}

	var start_line_bounds = zen_coding.getLineBounds(content, start_offset),
	    pad = getLinePadding(content.substring(start_line_bounds.start, start_line_bounds.end)),
	    new_content = content.substring(start_offset, end_offset),
	    result = zen_coding.wrapWithAbbreviation(abbr, unindentText(editor, new_content, pad), syntax, profile_name);

	if (result) {
		editor.setCaretPos(end_offset);
		editor.replaceContent(result, start_offset, end_offset);
	}
}

/**
 * Removes padding at the beginning of each text's line
 * @param {zen_editor} editor Editor instance
 * @param {String} text
 * @param {String} pad
 */
function unindentText(editor, text, pad) {
	var tab_size = editor.getTabSize();

	// Make a multiline Regular Expressions considering tabs/spaces variations
	// and possible shorter line paddings.
	var re_pad = new RegExp('^' +
		// Find tabs and space equivalents in sample pad and add to RegEx
		pad.replace(
			new RegExp(' {0,' + (tab_size - 1) + '}\t| {' + tab_size + '}', 'g'),
			'( {0,' + (tab_size - 1) + '}\t| {' + tab_size + '}| *)?'
		// add rest of the spaces
		).replace(/ +$/, function(end_spaces) {
			return ' {0,' + end_spaces.length + '}';
		}), 'gm');

	return text.replace(re_pad, '');
}

/**
 * Returns line padding
 * @param {String} line
 * @return {String}
 */
function getLinePadding(line) {
	return (line.match(re_line_padding) || [''])[0];
}

/**
 * Search for new caret insertion point
 * @param {zen_editor} editor Editor instance
 * @param {Number} inc Search increment: -1 — search left, 1 — search right
 * @param {Number} offset Initial offset relative to current caret position
 * @return {Number} Returns -1 if insertion point wasn't found
 */
function findNewEditPoint(editor, inc, offset) {
	inc = inc || 1;
	offset = offset || 0;
	var cur_point = editor.getCaretPos() + offset,
	    content = editor.getContent(),
	    syntax = editor.getSyntax(),
	    max_len = content.length,
	    next_point = -1;

	function getLine(ix) {
		var nl = zen_coding.getNewline(),
		    start = content.substring(0, ix).lastIndexOf(nl);

		if (~start)
			start += nl.length;
		else
			start = 0;

		return content.substring(start);
	}

	while ( (cur_point += inc) > 0 && cur_point < max_len && !~next_point) {
		var cur_char = content.charAt(cur_point),
		    next_char = content.charAt(cur_point + 1),
		    prev_char = content.charAt(cur_point - 1);
		switch (cur_char) {
			case '"':
			case '\'':
				if (next_char == cur_char && prev_char == '=')
					// empty attribute
					next_point = cur_point + 1;
				break;
			case '>':
				if (next_char == '<')
					// between tags
					next_point = cur_point + 1;
				break;
			case ':':
				if (next_char == ';' && syntax == 'css')
					// css property
					next_point = cur_point + 1;
				break;
			case '(':
				if (next_char == ')' && syntax == 'css')
					// css property
					next_point = cur_point + 1;
				break;
			case '\n':
			case '\r':
				// empty line
				if (re_empty_line.test(getLine(cur_point)))
					next_point = cur_point;
				break;
		}
	}

	return next_point;
}

/**
 * Move caret to previous edit point
 * @param {zen_editor} editor Editor instance
 */
function prevEditPoint(editor) {
	var cur_pos = editor.getCaretPos(),
	    new_point = findNewEditPoint(editor, -1);

	if (new_point == cur_pos)
		// we're still in the same point, try searching from the other place
		new_point = findNewEditPoint(editor, -1, -2);

	if (~new_point)
		editor.setCaretPos(new_point);
}

/**
 * Move caret to next edit point
 * @param {zen_editor} editor Editor instance
 */
function nextEditPoint(editor) {
	var new_point = findNewEditPoint(editor, 1);
	if (~new_point)
		editor.setCaretPos(new_point);
}

/**
 * Inserts newline character with proper indentation in specific positions only.
 * @param {zen_editor} editor
 * @return {Boolean} Returns <code>true</code> if line break was inserted 
 */
function insertFormattedNewlineOnly(editor) {
	var caret_pos = editor.getCaretPos(),
	    content = editor.getContent(),
	    nl = zen_coding.getNewline(),
	    pad = zen_coding.getVariable('indentation'),
	    syntax = editor.getSyntax();

	if (syntax == 'html') {
		// let's see if we're breaking newly created tag
		var pair = zen_coding.html_matcher.getTags(content, caret_pos, editor.getProfileName());

		if (pair[0] && pair[1] && pair[0].type == 'tag' && pair[0].end == caret_pos && pair[1].start == caret_pos) {
			editor.replaceContent(nl + pad + nl, caret_pos);
			return true;
		}
	} else if (syntax == 'css') {
		if (caret_pos && content.charAt(caret_pos - 1) == '{') {
			// look ahead for a closing brace
			re_curly_braces.lastIndex = caret_pos + 1;
			var brace = re_curly_braces.exec(content);
			if (brace && brace[0] == '}')
				return false;

			// defining rule set
			var ins_value = nl + pad + zen_coding.getCaretPlaceholder() + nl,
			    has_close_brace = caret_pos < content.length && content.charAt(caret_pos) == '}';

			var user_close_brace = zen_coding.getVariable('close_css_brace');
			if (user_close_brace) {
				// user defined how close brace should look like
				ins_value += zen_coding.replaceVariables(user_close_brace);
			} else if (!has_close_brace) {
				ins_value += '}';
			}

			editor.replaceContent(ins_value, caret_pos);
			return true;
		}
	}

	return false;
}

/**
 * Inserts newline character with proper indentation. This action is used in
 * editors that doesn't have indentation control (like textarea element) to 
 * provide proper indentation
 * @param {zen_editor} editor Editor instance
 */
function insertFormattedNewline(editor) {
	if (!insertFormattedNewlineOnly(editor)) {
		var cur_padding = getLinePadding(editor.getCurrentLine()),
		    content = editor.getContent(),
		    caret_pos = editor.getCaretPos(),
		    nl = zen_coding.getNewline();

		// check out next line padding
		var line_range = editor.getCurrentLineRange(),
		    next_padding = content.substring(line_range.end + nl.length).match(/^[ \t]*/)[0];

		if (next_padding.length > cur_padding.length)
			editor.replaceContent(nl + next_padding, caret_pos, caret_pos, true);
		else
			editor.replaceContent(nl, caret_pos);
	}
}

/**
 * Select line under cursor
 * @param {zen_editor} editor Editor instance
 */
function selectLine(editor) {
	var range = editor.getCurrentLineRange();
	editor.createSelection(range.start, range.end);
}

/**
 * Moves caret to matching opening or closing tag
 * @param {zen_editor} editor
 */
function goToMatchingPair(editor) {
	var content = editor.getContent(),
	    caret_pos = editor.getCaretPos();

	if (content.charAt(caret_pos) == '<')
		// looks like caret is outside of tag pair
		caret_pos++;

	var tags = zen_coding.html_matcher.getTags(content, caret_pos, editor.getProfileName());

	if (tags && tags[0]) {
		// match found
		var open_tag = tags[0],
		    close_tag = tags[1];

		if (close_tag) { // exclude unary tags
			if (open_tag.start <= caret_pos && open_tag.end >= caret_pos)
				editor.setCaretPos(close_tag.start);
			else if (close_tag.start <= caret_pos && close_tag.end >= caret_pos)
				editor.setCaretPos(open_tag.start);
		}
	}
}

/**
 * Get CSS block "{ ... }" inner range. Correctly takes in account inner blocks
 * of any depth and ignores comments and strings cause there can be any incorrectness.
 * @param {String} [text] Source code where to find.
 * @param {Number} [from] Position from where to search.
 * @return {Object|null}
 */
function getCSSBlockRange(text, from) {
	/* Replace comments and strings with fast created equal length spaces string */
	var re_comments_strings = /\/\*[\S\s]*?\*\/|'(\\.|[^\\'])*'|"(\\.|[^\\"])*"/g;
	text = text.replace(re_comments_strings, function(m) {
		var len = m.length,
		    shift_len = len,
		    whs = ' ';
		// double spaces until exceeding half of the string
		while ( (shift_len = shift_len >> 1) )
			whs += whs;
		// and then add rest part
		whs += whs.substring(0, len - whs.length);
		return whs;
	});

	/* Find start_ix curly brace. lastIndexOf() is fastest backward looking method */
	var bkw_text,
	    brc_cnt = 1,
	    start_ix,
	    end_ix,
	    last = from;
	do {
		bkw_text = text.substring(0, last); // get backward part of the CSS text
		start_ix = bkw_text.lastIndexOf('{');
		if (!~start_ix) return null; // no appropriate opening brace found, exit
		end_ix = bkw_text.lastIndexOf('}');
		if (start_ix < end_ix) {
			last = end_ix; // closing brace is last
			brc_cnt++; // add braces pair
		} else {
			last = start_ix; // opening brace is last
			brc_cnt--; // substract braces pair
		}
	} while (brc_cnt); // if no more pairs we found it

	/* Find end curly brace. Algorithm is similar but RegExp.exec() is very convenient.
	   All we need to do is search and count braces, no string manipulations required */
	re_curly_braces.lastIndex = from; // set lastIndex for proper search
	for (var brc_cnt = 1, end_brace; brc_cnt; end_brace[0] == '{' ? brc_cnt++ : brc_cnt-- ) {
		end_brace = re_curly_braces.exec(text);
		if (!end_brace) return null; // not found, exit
	}

	return {
		start: ++start_ix,
		end: end_brace.index
	}
}

/**
 * Merge lines spanned by user selection. If there's no selection, tries to find
 * matching tags and use them as selection
 * @param {zen_editor} editor
 */
function mergeLines(editor) {
	var selection = editor.getSelectionRange(),
	    syntax = editor.getSyntax(),
	    content = editor.getContent();

	if (selection.start == selection.end) {
		var caret_pos = selection.end,
		    profile = editor.getProfileName();
		if (syntax == 'html') {
			// find matching tag
			var pair = zen_coding.html_matcher(content, caret_pos, profile);
			if (pair) {
				selection.start = pair[0];
				selection.end = pair[1];
			}
		} else if (syntax = 'css') {
			var bounds = editor.getSyntaxBounds(),
			    start = 0,
			    end = content.length,
			    CSS_text;
			if (bounds) {
				start = bounds.start;
				end = bounds.end;
				CSS_text = content.substring(start, end);
			} else
				CSS_text = content;

			var block_range = getCSSBlockRange(CSS_text, caret_pos - start);
			if (block_range) {
				selection.start = start + block_range.start;
				selection.end = start + block_range.end;
			} else if (bounds) {
				selection.start = start;
				selection.end = end;
			}
		}
	}

	if (selection.start != selection.end) {
		// got range, merge lines
		var text = content.substring(selection.start, selection.end),
		    lines =  zen_coding.splitByLines(text);

		for (var i = lines.length; i--; )
			lines[i] = lines[i].replace(re_line_padding, '');

		text = lines.join('').replace(/\s{2,}/, ' ');
		editor.replaceContent(text, selection.start, selection.end);
		editor.createSelection(selection.start, selection.start + text.length);
	}
}

/**
 * Toggle comment on current editor's selection or HTML tag/CSS rule
 * @param {zen_editor} editor
 */
function toggleComment(editor) {
	switch (editor.getSyntax()) {
		case 'css':
			return toggleCSSComment(editor, editor.getSyntaxBounds());
		default:
			return toggleHTMLComment(editor);
	}
}

/**
 * Toggle HTML comment on current selection or tag
 * @param {zen_editor} editor
 * @return {Boolean} Returns <code>true</code> if comment was toggled
 */
function toggleHTMLComment(editor) {
	var rng = editor.getSelectionRange(),
	    content = editor.getContent();

	if (rng.start == rng.end) {
		// no selection, find matching tag
		var pair = zen_coding.html_matcher.getTags(content, editor.getCaretPos(), editor.getProfileName());
		if (pair && pair[0]) { // found pair
			rng.start = pair[0].start;
			rng.end = pair[1] ? pair[1].end : pair[0].end;
		}
	}

	return genericCommentToggle(editor, '<!--', '-->', rng.start, rng.end);
}

/**
 * Simple CSS commenting
 * @param {zen_editor} editor
 * @param {bounds} editor current syntax bounds (if it isn't the whole document)
 * @return {Boolean} Returns <code>true</code> if comment was toggled
 */
function toggleCSSComment(editor, bounds) {
	var rng = editor.getSelectionRange();

	if (rng.start == rng.end) {
		// no selection, get current line
		rng = editor.getCurrentLineRange();
		if (bounds) {
			rng.start = Math.max(rng.start, bounds.start);
			rng.end = Math.min(rng.end, bounds.end);
		}

		// adjust start index till first non-space character
		var _r = narrowToNonSpace(editor.getContent(), rng.start, rng.end);
		rng.start = _r[0];
		rng.end = _r[1];
	}

	return genericCommentToggle(editor, '/*', '*/', rng.start, rng.end);
}

/**
 * Search for nearest comment in <code>str</code>, starting from index <code>from</code>
 * @param {String} text Where to search
 * @param {Number} from Search start index
 * @param {String} start_token Comment start string
 * @param {String} end_token Comment end string
 * @return {Array|null} Returns null if comment wasn't found
 */
function searchComment(text, from, start_token, end_token) {
	var bkw_text,
	    start_ch = start_token.charAt(0),
	    start_token_len = start_token.length;

	// search for comment start
	from = text.substring(0, from).lastIndexOf(start_token);
	if (!~from) return null;

	// search for comment end
	var end_ix = text.substring(from).indexOf(end_token);
	if (~end_ix)
		end_ix += from + end_token.length;
	else
		return null;

	return [from, end_ix];
}

/**
 * Generic comment toggling routine
 * @param {zen_editor} editor
 * @param {String} comment_start Comment start token
 * @param {String} comment_end Comment end token
 * @param {Number} range_start Start selection range
 * @param {Number} range_end End selection range
 * @return {Boolean}
 */
function genericCommentToggle(editor, comment_start, comment_end, range_start, range_end) {
	var content = editor.getContent(),
	    caret_pos = editor.getCaretPos(),
	    new_content = null;

	/**
	 * Remove comment markers from string
	 * @param {Sting} str
	 * @return {String}
	 */
	function removeComment(str) {
		return str
			.replace(new RegExp('^' + comment_start.replace(re_specials, "\\$&") + '\\s*'), function(start_str){
				caret_pos -= start_str.length;
				return '';
			}).replace(new RegExp('\\s*' + comment_end.replace(re_specials, "\\$&") + '$'), '');
	}

	// first, we need to make sure that this substring is not inside
	// comment
	var comment_range = searchComment(content, caret_pos, comment_start, comment_end);

	if (comment_range && comment_range[0] <= range_start && comment_range[1] >= range_end) {
		// we're inside comment, remove it
		range_start = comment_range[0];
		range_end = comment_range[1];

		new_content = removeComment(content.substring(range_start, range_end));
		caret_pos = Math.max(caret_pos, range_start);
	} else {
		// should add comment
		// make sure that there's no comment inside selection
		new_content = comment_start + ' ' +
			content.substring(range_start, range_end)
				.replace(new RegExp(comment_start.replace(re_specials, "\\$&") + '\\s*|\\s*' + comment_end.replace(re_specials, "\\$&"), 'g'), '') +
			' ' + comment_end;

		// adjust caret position
		caret_pos += comment_start.length + 1;
	}

	// replace editor content
	if (new_content != null) {
		editor.replaceContent(new_content, range_start, range_end, true);
		editor.setCaretPos(caret_pos);
		return true;
	}

	return false;
}

/**
 * Splits or joins tag, e.g. transforms it into a short notation and vice versa:<br>
 * &lt;div&gt;&lt;/div&gt; → &lt;div /&gt; : join<br>
 * &lt;div /&gt; → &lt;div&gt;&lt;/div&gt; : split
 * @param {zen_editor} editor Editor instance
 * @param {String} [profile_name] Profile name
 */
function splitJoinTag(editor, profile_name) {
	var caret_pos = editor.getCaretPos(),
	    profile = zen_coding.getProfile(profile_name || editor.getProfileName()),
	    caret = zen_coding.getCaretPlaceholder();

	// find tag at current position
	var pair = zen_coding.html_matcher.getTags(editor.getContent(), caret_pos, editor.getProfileName());
	if (pair && pair[0]) {
		var new_content = pair[0].full_tag;

		if (pair[1]) { // join tag
			var closing_slash = ' /';
			if (profile.self_closing_tag == true)
				closing_slash = '/';

			new_content = new_content.replace(/\s*>$/, closing_slash + '>');

			// add caret placeholder
			if (new_content.length + pair[0].start < caret_pos)
				new_content += caret;
			else {
				var d = caret_pos - pair[0].start;
				new_content = new_content.substring(0, d) + caret + new_content.substring(d);
			}

			editor.replaceContent(new_content, pair[0].start, pair[1].end);
		} else { // split tag
			var nl = zen_coding.getNewline(),
			    pad = zen_coding.getVariable('indentation');

			// define tag content depending on profile
			var tag_content = (profile.tag_nl == true)
					? nl + pad +caret + nl
					: caret;

			new_content = new_content.replace(/\s*\/>$/, '>') + tag_content + '</' + pair[0].name + '>';
			editor.replaceContent(new_content, pair[0].start, pair[0].end);
		}

		return true;
	} else {
		return false;
	}
}

/**
 * Renames tag. Attributes remains not touched.
 * @param {zen_editor} editor
 * @param {String} new_tag_name
 */
function renameTag(editor, new_tag_name) {
	var caret_pos = editor.getCaretPos(),
	    content = editor.getContent();

	// search for tag
	var pair = zen_coding.html_matcher.getTags(content, caret_pos, editor.getProfileName());
	if (!pair || !pair[0])
		return false;

	new_tag_name = new_tag_name || editor.prompt("Enter new tag name");
	if (!/^\w[\w\:\-]*$/.test(new_tag_name))
		return false;

	var old_tag_name = pair[0].name;
	if (!pair[1]) {
		// simply rename unary tag
		editor.replaceContent(new_tag_name, pair[0].start + 1, pair[0].start + pair[0].name.length + 1);
	} else {
		var start = pair[0].start,
		    end = pair[1].end,
		    outerHTML = content.substring(start, end);
		// rename opening tag
		outerHTML = outerHTML.replace(new RegExp("^<"+old_tag_name), "<" + new_tag_name)
		// rename closing tag
			.replace(new RegExp("</"+old_tag_name+"(?=[^>]*>$)"), "</" + new_tag_name);

		editor.replaceContent(outerHTML, start, end, true);
	}
	editor.setCaretPos(caret_pos + new_tag_name.length - old_tag_name.length);
	return true;
}

/**
 * Gracefully removes tag under cursor
 * @param {zen_editor} editor
 */
function removeTag(editor) {
	var caret_pos = editor.getCaretPos(),
	    content = editor.getContent();

	// search for tag
	var pair = zen_coding.html_matcher.getTags(content, caret_pos, editor.getProfileName());
	if (!pair || !pair[0])
		return false;

	if (!pair[1]) {
		// simply remove unary tag
		editor.replaceContent(zen_coding.getCaretPlaceholder(), pair[0].start, pair[0].end);
	} else {
		var tag_content_range = narrowToNonSpace(content, pair[0].end, pair[1].start),
		    tag_content = content.substring(tag_content_range[0], tag_content_range[1]);

		tag_content = unindentText(editor, tag_content, zen_coding.getVariable('indentation'));
		editor.replaceContent(zen_coding.getCaretPlaceholder() + tag_content, pair[0].start, pair[1].end, true);
	}

	return true;
}


/**
 * Make decimal number look good: convert it to fixed precision end remove
 * traling zeroes
 * @param {Number} num
 * @param {Number} [fraction] Fraction numbers (default is 2)
 * @return {String}
 */
function prettifyNumber(num, fraction) {
	return num.toFixed(fraction == null ? 2 : fraction).replace(/\.?0+$/, '');
}

/**
 * Find expression bounds in current editor at caret position.
 * On each character a <code>fn</code> function will be caller which must
 * return <code>true</code> if current character meets requirements,
 * <code>false</code> otherwise
 * @param {zen_editor} editor
 * @param {Function} fn Function to test each character of expression
 * @return {Array} If expression found, returns array with start and end
 * positions
 */
function findExpressionBounds(editor, fn) {
	var content = editor.getContent(),
	    il = content.length,
	    expr_start = editor.getCaretPos(),
	    expr_end = expr_start - 1;

	// start by searching left
	while (expr_start-- && fn(content.charAt(expr_start), expr_start, content));

	// then search right
	while (++expr_end < il && fn(content.charAt(expr_end), expr_end, content));

	return expr_end > ++expr_start ? [expr_start, expr_end] : null;
}

/**
 * Extract number from current caret position of the <code>editor</code> and
 * increment it by <code>step</code>
 * @param {zen_editor} editor
 * @param {Number} step Increment step (may be negative)
 */
function incrementNumber(editor, step) {
	var content = editor.getContent(),
	    has_sign = false,
	    has_decimal = false;

	var r = findExpressionBounds(editor, function(ch) {
		if (re_digit.test(ch))
			return true;
		if (ch == '.')
			return has_decimal ? false : has_decimal = true;
		if (ch == '-')
			return has_sign ? false : has_sign = true;

		return false;
	});

	if (r) {
		var num = parseFloat(content.substring(r[0], r[1]));
		if (!isNaN(num)) {
			num = prettifyNumber(num + step);
			editor.replaceContent(num, r[0], r[1]);
			editor.createSelection(r[0], r[0] + num.length);
			return true;
		}
	}

	return false;
}

/**
 * Evaluates simple math expression under caret or all expressions found in selection.
 * @param {zen_editor} editor
 */
function evaluateMathExpression(editor) {
	var content = editor.getContent(),
	    selection = editor.getSelectionRange(),
	    re_math_pow = /(\d+(?:\.\d+)?)\^(-?\d+)/g,
	    re_math_round = /(\d+(?:\.\d+)?|\.\d+|Math.pow\([^)]*\))\\(-?(?:\d+(?:\.\d+)?|\.\d+|Math.pow\([^)]*\)))/g;

	if (selection.start != selection.end) {
		// Compute all math expressions found in selection
		var text = content.substring(selection.start, selection.end),
		    // Search for "number (operation number)+" followed by non-math
		    // characters. Alphabet characters are allowed in lookahead for
		    // calculating something like 10+1px in CSS.
		    re_math_expr = /-?(?:\d+(?:\.\d+)?|\.\d+)(?:[-+*\/\\^](?:-?\d+(?:\.\d+)?|\.\d+))+(?![-+*\/\\^%.\d])/g,
		    re_math_expr_lookbehind = /[^-+*\/\\%.\w]/;
		text = text.replace(re_math_expr, function(expr, pos) {
			// JS doesn't have lookbehind assertions in Regular Expressions so
			// test if we've found part of more complex unsupported expression.
			// or whatever Note that evaluating without selection or selecting
			// supported expression directly may compute such things.
			if (!pos || re_math_expr_lookbehind.test(text.charAt(pos - 1))) {
				// replace a power: 2^6 => Math.pow(2,6)
				var expr_str = expr.replace(re_math_pow, 'Math.pow($1,$2)')
					// replace integral division: 11\2 => Math.round(11/2)
					.replace(re_math_round, 'Math.round($1/$2)');
				try {
					var solve = new Function('return ' + expr_str)();
					if (isFinite(solve))
						return prettifyNumber(solve);
				} catch (e) {}
			}
			return expr; // Failed to compute, return unmodified.
		});
		editor.replaceContent(text, selection.start, selection.end, true);
		return true;
	} else {
		// Find expression and compute it
		var re_math_chars = /[-+*\/\\.\d^]/,
		    r = findExpressionBounds(editor, function(ch) {
		    	return re_math_chars.test(ch);
		    });

		if (r) {
			var expr = content.substring(r[0], r[1])
				// replace a power: 2^6 => Math.pow(2,6)
				.replace(re_math_pow, 'Math.pow($1,$2)')
				// replace integral division: 11\2 => Math.round(11/2)
				.replace(re_math_round, 'Math.round($1/$2)');

			try {
				var result = new Function('return ' + expr)();
				if (!isFinite(result))
					return false;
				result = prettifyNumber(result);
				editor.replaceContent(result, r[0], r[1]);
				editor.setCaretPos(r[0] + result.length);
				return true;
			} catch (e) {}
		}
	}

	return false;
}

// register all actions
zen_coding.registerAction('expand_abbreviation', expandAbbreviation);
zen_coding.registerAction('expand_abbreviation_with_tab', expandAbbreviationWithTab);
zen_coding.registerAction('match_pair', matchPair);
zen_coding.registerAction('match_pair_inward', function(editor){ matchPair(editor, 'in') });
zen_coding.registerAction('match_pair_outward', function(editor){ matchPair(editor, 'out') });
zen_coding.registerAction('wrap_with_abbreviation', wrapWithAbbreviation);
zen_coding.registerAction('prev_edit_point', prevEditPoint);
zen_coding.registerAction('next_edit_point', nextEditPoint);
zen_coding.registerAction('insert_formatted_line_break', insertFormattedNewline);
zen_coding.registerAction('insert_formatted_line_break_only', insertFormattedNewlineOnly);
zen_coding.registerAction('select_line', selectLine);
zen_coding.registerAction('matching_pair', goToMatchingPair);
zen_coding.registerAction('merge_lines', mergeLines);
zen_coding.registerAction('toggle_comment', toggleComment);
zen_coding.registerAction('split_join_tag', splitJoinTag);
zen_coding.registerAction('rename_tag', renameTag);
zen_coding.registerAction('remove_tag', removeTag);

zen_coding.registerAction('increment_number_by_1', function(editor) {
	return incrementNumber(editor, 1);
});

zen_coding.registerAction('decrement_number_by_1', function(editor) {
	return incrementNumber(editor, -1);
});

zen_coding.registerAction('increment_number_by_10', function(editor) {
	return incrementNumber(editor, 10);
});

zen_coding.registerAction('decrement_number_by_10', function(editor) {
	return incrementNumber(editor, -10);
});

zen_coding.registerAction('increment_number_by_01', function(editor) {
	return incrementNumber(editor, 0.1);
});

zen_coding.registerAction('decrement_number_by_01', function(editor) {
	return incrementNumber(editor, -0.1);
});

zen_coding.registerAction('evaluate_math_expression', evaluateMathExpression);

}();