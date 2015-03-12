Zen Coding isn't only a decent abbreviations expander, but also a set of handy tools for common XHTML tasks. Read this page carefully to boost your productivity even more. Note that almost every action highly depends on current caret position inside text editor.



# Expand Abbreviation #
This is a main tool of Zen Coding: when called, it search CSS-like abbreviation from your current caret position and expand it into HTML/XML/HAML code. If ZC can't find correct abbreviation, you can _select_ it call "Expand Abbreviation" action again. Read more about available syntax on ZenHTMLSelectorsEn page.

Remember that _it's not necessary to write abbreviation on a new line_. When parsing, ZC search for a first stop-symbol (a space, for example) left to current caret position. Also, parser takes care about existing XHTML tags and it's smart enough to understand that in string `<div>ul#nav>li` you want to expand `ul#nav>li`, not `div>ul#nav>li`.

# Wrap with Abbreviation #
One of the most powerful tool for coder. It takes ZC abbreviation, expands it and places currently selected content in the last element of expanded abbreviation, taking care of proper code indentation. If you don't have selected text, it uses current caret position to create it. The algorithm is following (assuming we want to wrap text with `div.wrap` abbreviation):

  * if caret is inside opening or closing tag, it search for _tag bounds_ and wraps them
> ![http://zen-coding.googlecode.com/svn/wiki/images/wrap1.png](http://zen-coding.googlecode.com/svn/wiki/images/wrap1.png)

  * if caret is inside tag content, it search for _content bounds_ and wraps them
> ![http://zen-coding.googlecode.com/svn/wiki/images/wrap2.png](http://zen-coding.googlecode.com/svn/wiki/images/wrap2.png)

When searching for content bounds, ZC will trim away whitespaces and newlines from the beginning and the end of actual content, thus giving you more predictable and desired result.

This action also introduces a special syntax for wrapping each line of selection. Placing asterisk near element (without multiplication number!) will mark it as a _repeating element_ and output as many times as lines you have in your selection, placing content of each line in the deepest child element. This is extremely useful for creating menus:

![http://zen-coding.googlecode.com/svn/wiki/images/wrap3.png](http://zen-coding.googlecode.com/svn/wiki/images/wrap3.png)

# Balance Tag Inward/Outward #
A well-known tag balancing: search for tag or tag's content bounds from current caret position and selects it. It will expand (outward balancing) or shrink (inward balancing) selection when called multiple times. Not every editor supports both inward and outward balancing due of some implementation issues, most editors have outward balancing only.

The interesting feature of Zen Coding's balancing engine is that it doesn't require full document parse in order to work. It search for nearest left-most opening tag from current caret position, and then find closing tag for it. The benefits of this approach are _speed_ and _context independence_ (it can work even inside non-HTML files, like JavaScript, Python, PHP, etc.).

# Go to Next/Previous Edit Point #
This action was written as a simple replacement of _Tab stops_ feature (available in TextMate and Espresso editors) for a quick navigation between important pieces of code after inserting snippet (e.g. expanding abbreviation). But soon it became my favorite and most used action when writing XHTML code. It simply moves caret between important code points where you likely want to edit. These points are marked on the following screenshot:

![http://zen-coding.googlecode.com/svn/wiki/images/edit-points.png](http://zen-coding.googlecode.com/svn/wiki/images/edit-points.png)

As you can see, these are points between tags, empty attributes and empty lines.

# Update `<img>` Size #
Place your caret inside `<img>` tag, run this action ant it will automatically update (or add) width and height attributes with current images dimensions. This action isn't available on every editor because neither JavaScript, nor Python doesn't have native support for getting image attributes.

This action supports relative image paths, like `<img src="../image.png" />`, as well as absolute paths: `<img src="/image.png" />`.

# Merge Lines #
Merges all lines of current selection. If there's no selection, it will run _Balance Tag Outward_ first and use its result as selection.

# Remove Tag #
_Added in v0.6_

Removing unneeded tag from document is an exhausting work: you have to remove opening tag, then find and remove closing tag, and then select tag's content and adjust it indentation. This action does very same thing but with a single keystroke. It search for nearest tag from current caret position (Balance Tag Outward) and gracefully removes it, adjusting content indentation if needed.

# Split/Join Tag #
_Added in v0.6_

This action quickly switches tag between full and self-closing notation: from `<div class="test"></div>` to `<div class="test" />` and vice versa. As usual, it search for nearest tag using Balance Tag Outward. XML/XSL developers would appreciate this action.

# Toggle Comment #
_Added in v0.6_

Unlike many native editor's implementations, this action uses tag balancing to comment/uncomment full tag, not a current line. Currently supports XML/HTML tag commenting; it will toggle comment on current line (with respect of indentation) when called inside CSS document/scope.