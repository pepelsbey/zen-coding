# v0.6 (February 18, 2010) #
  * Support for custom attributes: `div[title]`, `a[title="Hello" rel]`, `td[colspan=2]`
  * Support for abbreviation groups with unlimited nesting: `div#page>(div#header>ul#nav>li*4>a)+(div#page>(h1>span)+p*2)+div#footer`. Now you can literally write a full document markup with just a single line.
  * ID and CLASS attributes order is not important: `div.section#demo` will also work.
  * [Filters](Filters.md) support
  * Multiple '$' characters in a row are used as zero padding, i.e.: `li.item$$$` → `li.item001`
  * More than 3 inline-level elements in a row will be printed on a new line each: compare `div>span*2` and `div>span*4`
  * `div` tag name can be omitted when writing element starting from ID or CLASS: `#content>.section` is the same as `div#content>div.section`.
  * HAML support (read [Filters](Filters.md) for more info)
  * Plugin for PSPad editor
  * Plugin for [Komodo Edit/IDE](http://community.activestate.com/xpi/zen-coding)
  * New actions: "Toggle comment", "Split/Join tag", "Remove tag" (read [Actions](Actions.md) for more info)
  * Many bugfixes and tweaks (some of them are listed [here](http://code.google.com/p/zen-coding/issues/list?can=1&q=label%3AMilestone-0.6%20status%3AFixed%2CDone))
  * [Updated plugins](http://code.google.com/p/zen-coding/downloads/list) (with '0.6' in their names)

### For developers ###
  * Engine development is [moved to GitHub](http://github.com/sergeche/zen-coding).
  * [Better API](http://wiki.github.com/sergeche/zen-coding/plugin-howto) for adding Zen Coding support into your editor.


