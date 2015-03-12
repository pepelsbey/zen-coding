# Installation #
## Zen HTML and Zen CSS ##
  * Close SlickEdit.
  * Replace files html.als and css.als with files from this package in SlickEdit configuration directory:<br><b>Windows XP:</b> 	\Documents and Settings\%USERNAME%\My Documents\My SlickEdit Config\14.0.2<br><b>Windows Vista, 7:</b> 	\Users\%USERNAME%\Documents\My SlickEdit Config\14.0.2<br>
<b>WARNING:</b> All predefined aliases and your aliases will be overwritten by Zen HTML and Zen CSS rules. In order to keep them add content of html.als and css.als files from our package to your original files.<br>
<br><b>NOTE:</b> In order to use extended templates like @f and f+ make sure that symbols<br>
:+@ are added to Word chars list (Tools->Options->Languages->Web Authoring Languages->HTML/CSS->General->Word chars) for both CSS and HTML languages.</li></ul>

<h2>Zen Coding</h2>
<ul><li>Go to Macro->Load Module... menu item.<br>
</li><li>Choose bundles.e file from this package.<br>
</li><li>Go to Tools->Options->Keyboard->Key Bindings menu item.<br>
</li><li>Find expand-bundle macros and assign a shortcut to it.<br>
<b>NOTE:</b> currently E*N$ and E+ HTML selectors are not supported, E*N is supported only if it is located at the end of the expression.