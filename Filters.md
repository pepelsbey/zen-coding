Zen Coding v0.6 introduces a new concept called _filters_. Filters are special post-processors that modifies expanded abbreviation right before output to the editor. To better understand how filters works, let's walk through a simple tutorial.

Go to [demo page](http://zen-coding.ru/textarea/) and try to expand the following abbreviation: `div#content>p.title`. As you may expect, it will be expanded into the following HTML code:

```
<div id="content">
	<p class="title"></p>
</div>
```

Now, try to expand this abbreviation: `div#content>p.title|e`. You'll have a slightly different result:

```
&lt;div id="content"&gt;
	&lt;p class="title"&gt;&lt;/p&gt;
&lt;/div&gt;
```

We've just applied "e" (escape) filter by appending its name after pipe character. This filter escaped all XML-unsafe symbols with entities right before ZC sent output to the editor. Now, try this one:  `div#content>p.title|e|e`:

```
&amp;lt;div id="content"&amp;gt;
	&amp;lt;p class="title"&amp;gt;&amp;lt;/p&amp;gt;
&amp;lt;/div&amp;gt;
```

We have a double-escaped code (e.g. we applied "e" filter twice). As you can see, we can apply as many filters to abbreviation as we want, and as many times as we want.

Let's do something more interesting. Try to expand this abbreviation: `div#content>p.title|haml`

```
#content
	%p.title
```

Isn't it nice? We've just expanded abbreviation as a HAML template!

As you can see, filtering is a key concept of Zen Coding v0.6. They can anything: from small tweaks as placing whitespace after CSS-rule to more complex tasks as outputting result in different syntax. Even HTML output is defined as `html` filter.

## Implicit filter call ##
You can apply filter to abbreviation explicitly, by adding pipe character and its name right after abbreviation. But filters also can be applied implicitly, depending on document type you're  currently edit. You don't want to append `|haml` every time you expand abbreviation in HAML document, right?

Default filters are defined in [zen\_settings.js](http://github.com/sergeche/zen-coding/blob/master/javascript/zen_settings.js) (or .py) file in `filters` section of each syntax:

```
zen_settings = {
	...
	'html': {
		...
		'filters': 'html'
	}
}
```

If there's no such section, `html` filter is applied by default. If you want to apply more than one filter by default, you can write a comma- or pipe-separated list of filter names in `filters` section:

```
zen_settings = {
	...
	'html': {
		...
		'filters': 'html, e'
	}
}
```

Now, every time you expand abbreviation in HTML document, `html` and `e` filters will be applied by default.

**But be careful!** You always have to place one of the syntax filter—`html` or `haml`—at first place of default filters in `zen_settings` file, otherwise you'll have empty output because syntax filters are defining primary output result.

## List of available filters ##

### haml ###
HAML syntax filter: output abbreviation as HAML template. Applies by default for HAML files.

### html ###
HTML syntax filter: output abbreviation as HTML tags. Applies by default everywhere except HAML files.

### e ###
Escapes XML-unsafe characters: `<`, `>` and `&`.

For example, `div#header|e` will be expanded into `&lt;div id="header"&gt;&lt;/div&gt;`. This filters will be extremely useful for tech bloggers/writers who wants to show code snippets on website (if you add Zen Coding support into you CMS, of course).

### c ###
Add comments around important tags. Important tags are those tags with ID and/or CLASS attribute.

```
div>div#page>p.title+p|c
```

will be expanded into

```
<div>
	<!-- #page -->
	<div id="page">
		<!-- .title -->
		<p class="title"></p>
		<!-- /.title -->
		<p></p>
	</div>
	<!-- /#page -->
</div>
```

### fc ###
Format CSS rule: add whitespace after CSS property name.

```
fl:l|fc
```

will be expanded into

```
float: left;
```

If you prefer this coding style, you'll definitely want to modify `zen_settings` file and add this filter as default one for CSS syntax. But remember: you should add `html` filter first:

```
zen_settings = {
	...
	'css': {
		...
		'filters': 'html, fc'
	}
}
```

### xsl ###
This filter removes `select` attribute from `<xsl:variable>` and `<xsl:with-param>` tags _if they have child nodes_. For example:

```
ap>wp
```

will be expanded into

```
<xsl:apply-templates select="" mode="">
	<xsl:with-param name="" select=""/>
</xsl:apply-templates>
```

...but

```
ap>wp>call
```

will be expanded into

```
<xsl:apply-templates select="" mode="">
	<xsl:with-param name="">
		<xsl:call-template name=""/>
	</xsl:with-param>
</xsl:apply-templates>
```

Applies by default in XSL files.