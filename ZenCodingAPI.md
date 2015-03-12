_This document in early development stage and can be changed at any time_

## Profiles ##
Profiles are set of properties that defines how expaned abbreviations should output. There are number of predefined profiles in Zen Coding: _plain_, _html_, _xhtml_, _xml_.

How to use profiles:
```
from zencoding import zen_core as zen

print(zen.expand_abbreviation('div#header>p', 'html', 'xml'))
```

The last attribute is _profile name_, default value is `plain`.

### Creating your own profile ###
In order to create your own profile you need to call `zen_core.setup_profile(name, options)`, where `options` is a _dictionary_ with the following properties:

  * `tag_case` — Tag's name case. Possible values are _'upper'_ and _'lower'_ (`<IMG />` or `<img />`).  Default value: _'lower'_.
  * `attr_case` — Tag attribute's name case. Possible values are _'upper'_ and _'lower'_ (`<a HREF="">` or `<a href="">`). Default value: _'lower'_.
  * `attr_quotes` — Attribute value's quotes. Possible values are _'single'_ and _'double'_ (`<a href=''>` or `<a href="">`). Default value: _'double'_.
  * `tag_nl` — Print each tag on new line. Possible values are _True_, _False_, _'decide'_. The last value means that newline character will be printed only if current tag is block level (e.g. `<p>`, `<div>`, `<blockquote>`). Default value is _'decide'_.
  * `place_cursor` — Print cursor (pipe characer: |) to the output. Possible values are _True_ and _False_. Default value is _True_.
  * `indent` — Indent child tags. Possible values are _True_ and _False_. Default value is _True_.
  * `self_closing_tag` — Add self-closing character for empty elements. Possible values are _True_, _False_, _'xhtml'_ (`<img/>`, `<img>` and `<img />` respectively). Default value: _'xhtml'_.

Example:
```
from zencoding import zen_core as zen

zen.setup_profile('my_profile', {'tag_case': 'upper', 'place_cursor': False}))
print(zen.expand_abbreviation('div#header>p', 'html', 'my_profile'))
```
If you omit some of the properties, default value will be used.

