# Introduction #

Zen Coding is an editor plugin for high-speed HTML, XML, XSL (or any other structured code format) coding and editing. The core of this plugin is a powerful abbreviation engine which allows you to expand expressions—similar to CSS selectors—into HTML code. You can find more information on [project main page](http://code.google.com/p/zen-coding/).


# How to install #
To install it you need to [download zip-package](http://code.google.com/p/zen-coding/downloads/detail?name=Zen%20Coding%20v.0.7.5.mxp) of the extension, unpack “Zen Coding v.0.7.5.mxp”. Run Adobe Extension Manager under Commands menu in Dreamweaver and install this file with it.

**Note:** if you just double click on file, there could be bugs if you have different languages of OS and editor. They can be fixed by running Adobe Extension Manager under commands menu and enabling/installing extension with it.

Source code is also included to package. You can make changes if you want and install mxi or package and install new extension then.

After installing you need to restart Adobe Dreamweaver (or [reload extensions](http://help.adobe.com/en_US/dreamweaver/cs/extend/WS5b3ccc516d4fbf351e63e3d117f508c8de-7fd1.html)) if it running.


# Whats new in version 0.7.5 #
  * Added "Reflect CSS value" command from Zen Coding 0.7.
  * Added "Select Next/Previous Item" commands from Zen Coding 0.7.
  * Extension now uses `$#` for output from Zen Coding 0.7. E.g. `ul>li{$#}*` creates a list with each string in its own list item.
  * Multi-line selection indenting now works with Tab key.
  * Fixed XSLT document recognizing.

# Whats new in version 0.7.2 #
  * "Evaluate Math Expression" command now evaluates all simple math expressions found in selection. Supported operators: addition “`+`”, subtraction “`−`”, multiplying “`*`”, division “`/`”, rounded division “`\`” and power “`^`”.
  * Different line paddings with tabs/spaces variations now processed correctly.
  * Smarter "Insert formatted newline" behavior after start curly brace “{” in CSS.
  * Bug fixes related to comments processing.

# Whats new in version 0.7.1 #
  * Tab expanding now works with strict rules. If you are not editing HTML/CSS/XML code or selected text or caret is in tag no expanding will occur (except for CSS in style attribute) and normal tab will be inserted (or whatever in your settings). ([Issue 231](http://code.google.com/p/zen-coding/issues/detail?id=231))
  * Abbreviations itself now also got stricter rules for expanding, thus fixing [Issue 232](http://code.google.com/p/zen-coding/issues/detail?id=232) with CSS snippet expanding after opening curly brace.
  * Reworked menu commands shortcuts in order to try keep consistency with other plugins as much as possible. Sorry if you already accustomed to the old ones. I hope you will like it and quickly adapt to the new shortcuts. See [#Shortcuts\_table](#Shortcuts_table.md) for information.
  * Also if you if you specify only the class or id for inline subelement in abbreviation it automatically will be `span` not `div` ([Issue 227](http://code.google.com/p/zen-coding/issues/detail?id=227)).
  * As it was asked in comments “Merge Lines” without selection now automatically recognize blocks in CSS parsing mode (`{…}`). It correctly works with nested blocks and totally ignores braces in comments and quoted strings.
  * New action “Rename tag” were also added. It just changes a name of tag and leaves its attributes untouched. If it isn't enough for your “Wrap with abbreviation”/“Remove tag” combination is recommended.
  * “Insert Formatted Newline” action were (re-)added. Being executed between newly created opening and closing tags or curly brackets it breaks them to separate lines and puts caret into middle line with indentation.
  * Various indentation issues were also fixed.


# About Adobe Dreamweaver extension #

This extension contains all Zen Coding features which can be done using editor extension engine. The bad news is that Dreamweaver doesn't have multiple tab stops and can't read image (binary) files. So, related features like “encode to base64” aren't realized. Maybe someone will do it with C-level extensibility.

But the good news is that since version 0.7 **you can expand abbreviations with Tab button**! Also some new actions were added and almost all actions now have shortcuts.

# Actions and shortcuts #

Except Tab key you can expand abbreviations with “`Ctrl+,`” as before. Unfortunately it conflicts with hotkeys in some Dreamweaver localizations. If you faced with this issue you should manage hotkeys manually via Edit → Keyboard Shortcuts menu.

As for other shortcuts I tried to assign non-used ones. The two of them with Ctrl key: “`Ctrl+H`” and “`Ctrl+K`” were assigned to “Wrap with Abbreviation” and “Select Line”. With some others “Alt” key became very helpful because Dreamweaver doesn't allow to assign it via user interaction. (I think in order to avoid collisions with menu bar.) You can still assign your own shortcuts via Keyboard Shortcuts editor.

The only action without shortcut is “Balance Tag”. There are two reasons: outward (same by default) and inward versions of the action and similar function of Dreamweaver “Select Parent Tag” (“`Ctrl+[`”).

## Shortcuts table ##
**Note:** This table matches to the latest extension version: **0.7.5**.
```
Expand Abbreviation             Tab or Ctrl+, (on selection only Ctrl+,)
Wrap with Abbreviation          Ctrl+H
Re_flect CSS Value              Ctrl+R

Balance Tag Outward             Alt+[
Balance Tag Inward              Alt+]
Next Edit Point                 Ctrl+Alt+Right
Previous Edit Point             Ctrl+Alt+Left
Go to Matching Pair             Alt+/
Select Next Item                Alt+Right
Select Previous Item            Alt+Left

Insert Formatted Newline        Ctrl+Enter
Select Line                     Ctrl+K
Merge Lines                     Ctrl+\
Toggle Comment                  Ctrl+/
Split/Join Tag                  Ctrl+Shift+\
Rename Tag                      Ctrl+Shift+B
Remove Tag                      Alt+-
Evaluate Math Expression        Alt+=

Increment number by 1           Ctrl+Up
Decrement number by 1           Ctrl+Down
Increment number by 10          Ctrl+Alt+Up
Decrement number by 10          Ctrl+Alt+Down
Increment number by 0.1         Alt+Up
Decrement number by 0.1         Alt+Down
```

# New CSS shortcuts #

With standard [CSS-properties and its aliases](http://code.google.com/p/zen-coding/wiki/ZenCSSPropertiesEn) there also were added some new shortcuts:
```
color:transparent;                             c:t
color:rgb();                                   c:r
color:rgba();                                  c:ra
color:hsl();                                   c:h
color:hsla();                                  c:ha
 
text-overflow:;                                tov
text-overflow:"";                              tov+
text-overflow:clip;                            tov:c
text-overflow:ellipsis;                        tov:e
 
box-decoration-break:clone;                    bxdb (the only non-default option)
box-decoration-break:slice;                    bxdb:s
 
transition:                                    ts
transition-property:;                          tsp
transition-duration:;                          tsd
transition-delay:;                             tsdl
transition-timing-function:;                   tst
transition-timing-function:ease;               tst:e
transition-timing-function:linear;             tst:l
transition-timing-function:ease-in;            tst:i
transition-timing-function:ease-out;           tst:o
transition-timing-function:ease-in-out;        tst:io
transition-timing-function:step-start;         tst:ss
transition-timing-function:step-end;           tst:se
transition-timing-function:steps();            tst:s
transition-timing-function:cubic-bezier();     tst:cb

direction                                      dir
direction:ltr                                  dir:l
direction:rtl                                  dir:r

@page {}                                       @p
@top-left-corner {}                            @tlc
@top-left {}                                   @tl
@top-center {}                                 @tc
@top-right {}                                  @tr
@top-right-corner {}                           @trc
@bottom-left-corner {}                         @blc
@bottom-left {}                                @bl
@bottom-center {}                              @bc
@bottom-right {}                               @br
@bottom-right-corner {}                        @brc
@footnote {}                                   @fn
@counter-style   ""                            @cs
```

# Extensibility #

Also my\_zen\_settings.js was added to package to help you adding of new snippets. It can be located in source files (and then deployed with extension reinstall) or in “Commands\ZenCoding” folder under your [configuration folder](http://help.adobe.com/en_US/dreamweaver/cs/extend/WS5b3ccc516d4fbf351e63e3d117f508c8de-7fdb.html). You should [reload extensions](http://help.adobe.com/en_US/dreamweaver/cs/extend/WS5b3ccc516d4fbf351e63e3d117f508c8de-7fd1.html) or restart Dreamweaver to make changes work. Note, that your changes will be lost with extension update and uninstall. So backup if it is worth for you.

For example to my\_zen\_settings.js were included next snippets:HTML:
jq      <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
cc:ie8  <!--[if gte IE 8]><![endif]-->
cc:ie9  <!--[if gte IE 9]><![endif]-->

CSS:
@md     @-moz-document url-prefix() {}```