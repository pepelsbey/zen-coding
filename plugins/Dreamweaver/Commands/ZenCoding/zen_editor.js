/**
 * High-level editor interface that communicates with underlying editor (like
 * TinyMCE, CKEditor, etc.) or browser.
 * Basically, you should call <code>zen_editor.setContext(obj)</code> method to
 * set up undelying editor context before using any other method.
 *
 * This interface is used by <i>zen_actions.js</i> for performing different
 * actions like <b>Expand abbreviation</b>
 *
 * @example
 * var textarea = document.getElemenetsByTagName('textarea')[0];
 * zen_editor.setContext(textarea);
 * //now you are ready to use editor object
 * zen_editor.getSelectionRange();
 *
 * @author GreLI (grelimail@gmail.com)
 * @link http://code.google.com/p/zen-coding/
 */
var zen_editor = (function(){
	var dom,
	    // Set default indentation to one tab
	    indent_size = 1,
	    indent_tabs = 'TRUE',
	    // Check for style attribute
	    syntax_bounds;

	/**
	 * Returns whitrespace padding of string
	 * @param {String} str String line
	 * @return {String}
	 */
	function getStringPadding(str) {
		return (str.match(/^\s+/) || [''])[0];
	}

	/**
	 * Returns editor's content
	 * @return {String}
	 */
	function getContent(){
		return dom.source.getText();
	};

	/**
	 * Replaces the range of source text
	 * @return {Boolean}
	 */
	function replaceRange(start, end, value) {
		return dom.source.replaceRange(start, end, value);
	}

	/**
	 * Returns current caret position
	 * @return {Number|null}
	 */
	function getCaretPos() {
		var caret_pos = dom.source.getSelection()[1];
		return ( ~caret_pos ? caret_pos : null );
	};

	/**
	 * Set new caret position
	 * @param {Number} pos Caret position
	 */
	function setCaretPos(pos){
		dom.source.setSelection(pos, pos);
	};

	/**
	 * Returns content of current line
	 * @return {String}
	 */
	function getCurrentLine() {
		var content = getContent(),
		    line = zen_coding.getLineBounds(content, getCaretPos());

		return content.substring(line.start, line.end);
	};

	return {
		/**
		 * Setup underlying editor context. You should call this method
		 * <code>before</code> using any Zen Coding action.
		 * @param {Object} context
		 */
		setContext: function() {
			dom = dw.getDocumentDOM(); // Get current document DOM.
			if (!dom) return false;

			syntax_bounds = null; // clear syntax bounds

			// Check new line settings.
			var nl = dw.getPreferenceInt('Source Format', 'Line Break Type', 0x0A);
			zen_coding.setNewline( nl == 0x0D0A ? '\x0D\x0A' : String.fromCharCode(nl) );

			// Check identation settings.
			var dw_indent_size = dw.getPreferenceInt('Source Format', 'Indent Size', 1),
			    dw_use_tabs = dw.getPreferenceString('Source Format', 'Use Tabs', 'TRUE');

			// Apply settings if they differs.
			if (indent_size == dw_indent_size &&
			    indent_tabs == dw_use_tabs)
				return true;

			indent_size = dw_indent_size;
			indent_tabs = dw_use_tabs;

			var indent_str = zen_coding.repeatString(
				dw_use_tabs.toUpperCase() == 'TRUE'? '\t' : ' ',
				dw_indent_size
			);

			zen_coding.setVariable('indentation', indent_str);
			return true;
		},

		/**
		 * Returns Tab size in spaces from editor preferences
		 * @return {Number}
		 */
		getTabSize: function() {
			return dw.getPreferenceInt('Source Format', 'Tab Size', 8);
		},

		/**
		 * Returns character indexes of selected text: object with <code>start</code>
		 * and <code>end</code> properties. If there's no selection, should return
		 * object with <code>start</code> and <code>end</code> properties referring
		 * to current caret position
		 * @return {Object}
		 * @example
		 * var selection = zen_editor.getSelectionRange();
		 * alert(selection.start + ', ' + selection.end);
		 */
		getSelectionRange: function() {
			var selection = dom.source.getSelection();

			return {
				start: selection[0],
				end: selection[1]
			};
		},

		/**
		 * Creates selection from <code>start</code> to <code>end</code> character
		 * indexes. If <code>end</code> is ommited, this method should place caret
		 * and <code>start</code> index
		 * @param {Number} start
		 * @param {Number} [end]
		 * @example
		 * zen_editor.createSelection(10, 40);
		 *
		 * //move caret to 15th character
		 * zen_editor.createSelection(15);
		 */
		createSelection: function(start, end) {
			if (end == null) end = start;
			return dom.source.setSelection(start, end);
		},

		/**
		 * Returns current line's start and end indexes as object with <code>start</code>
		 * and <code>end</code> properties
		 * @return {Object}
		 * @example
		 * var range = zen_editor.getCurrentLineRange();
		 * alert(range.start + ', ' + range.end);
		 */
		getCurrentLineRange: function() {
			return zen_coding.getLineBounds(getContent(), getCaretPos());
		},

		/**
		 * Returns current caret position
		 * @return {Number|null}
		 */
		getCaretPos: getCaretPos,

		/**
		 * Set new caret position
		 * @param {Number} pos Caret position
		 */
		setCaretPos: setCaretPos,

		/**
		 * Returns content of current line
		 * @return {String}
		 */
		getCurrentLine: getCurrentLine,

		/**
		 * Replace editor's content or it's part (from <code>start</code> to
		 * <code>end</code> index). If <code>value</code> contains
		 * <code>caret_placeholder</code>, the editor will put caret into
		 * this position. If you skip <code>start</code> and <code>end</code>
		 * arguments, the whole target's content will be replaced with
		 * <code>value</code>.
		 *
		 * If you pass <code>start</code> argument only,
		 * the <code>value</code> will be placed at <code>start</code> string
		 * index of current content.
		 *
		 * If you pass <code>start</code> and <code>end</code> arguments,
		 * the corresponding substring of current target's content will be
		 * replaced with <code>value</code>.
		 * @param {String} value Content you want to paste
		 * @param {Number} [start] Start index of editor's content
		 * @param {Number} [end] End index of editor's content
		 * @param {Boolean} [no_indent] Do not auto indent <code>value</code>
		 */
		replaceContent: function(value, start, end, no_indent) {
			var content = getContent();

			if (end == null) {
				if (start == null) {
					start = 0;
					end = content.length;
				} else {
					end = start;
				}
			}

			// indent new value
			var start_line_bounds = zen_coding.getLineBounds(content, start),
			    start_line_pad = getStringPadding(content.substring(start_line_bounds.start, start_line_bounds.end));

			if (!no_indent)
				value = zen_coding.padString(value, start_line_pad);

			var caret_placeholder = zen_coding.getCaretPlaceholder(), // get '{%::zen-caret::%}', do not hardcode it!
				caret_new_pos = start;

			// find new caret position
			var caret_place = value.indexOf(caret_placeholder);
			if (~caret_place) {
				caret_new_pos += caret_place; // adjust caret position
				value = value.split(caret_placeholder).join(''); // remove placeholders from string
			} else {
				// if there is no position placeholder set caret position to the end of the insertion
				caret_new_pos += value.length;
			}

			replaceRange(start, end, value); // paste new content

			setCaretPos(caret_new_pos); // place caret
		},

		/**
		 * Returns editor's content
		 * @return {String}
		 */
		getContent: getContent,

		/**
		 * Returns current editor's syntax mode
		 * @return {String}
		 */
		getSyntax: function(for_abbr){
			var parse_mode = dom.getParseMode();

			if (~dom.documentType.indexOf('XSLT'))
				parse_mode = 'xsl';

			if (parse_mode == 'html') {
				var content = getContent(),
					sel = dom.source.getSelection(),
					caret_pos = sel[1],
					pair = zen_coding.html_matcher.getTags(content, caret_pos), // get the context tag
					re_style_attr = /(\bstyle\s*=\s*)("[^"]*|'[^']*)$/,
					m;

				if (pair && pair[0] && pair[0].type == 'tag') {
					// check if we're inside <style> tag
					if ( (pair[0].name.toLowerCase() == 'style' &&
					      pair[0].end <= caret_pos &&
					      pair[1].start >= caret_pos)
					   ) {
						syntax_bounds = {
							start: pair[0].end,
							end: pair[1].start,
							document_syntax: 'html',
						};
						parse_mode = 'css';
					}
					// or inside style attribute
					else if ( (for_abbr || sel[0] != sel[1]) &&
					           sel[1] < pair[0].end &&
					           ( m = content.substring(pair[0].start, sel[0]).match(re_style_attr) ) ) {
						syntax_bounds = {
							start: pair[0].start + m.index + m[1].length + 1,
							end: caret_pos + content.substring(caret_pos, pair[0].end).indexOf(m[2].charAt(0)),
							document_syntax: 'html',
						};
						parse_mode = 'css';
					}
				}
			}

			return parse_mode;
		},

		/**
		 * Returns current editor's syntax mode bounds
		 * @return {Object|null}
		 */
		getSyntaxBounds: function() {
			return syntax_bounds;
		},

		/**
		 * Returns current output profile name (@see zen_coding#setupProfile)
		 * @return {String}
		 */
		getProfileName: function() {
			switch(dom.documentType) {
				case 'XML':
				case 'XSLT':
				case 'XSLT-fragment':
					return 'xml';
				// Allow to edit HTML in PHP and other non-HTML documents
				default:
					return dom.getIsXHTMLDocument() ? 'xhtml' : 'html';
			}
		},

		/**
		 * Ask user to enter something
		 * @param {String} title Dialog title
		 * @return {String} Entered data
		 * @since 0.65
		 */
		prompt: function(title) {
			return window.prompt(title);
		},

		/**
		 * Returns current selection
		 * @return {String}
		 * @since 0.65
		 */
		getSelection: function() {
			var selection = dom.source.getSelection();
			return dom.source.getText(selection[0], selection[1]);
		},

		/**
		 * Returns current editor's file path
		 * @return {String}
		 * @since 0.65
		 */
		getFilePath: function() {
			return dom.URL;
		}
	}
})();