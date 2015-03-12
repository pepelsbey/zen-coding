<br><br><br><br>
<h1>Update: you should use <a href='https://github.com/sergeche/eclipse-zencoding'>https://github.com/sergeche/eclipse-zencoding</a> instead this plugin</h1>
<br><br><br><br>
<h2>Installing</h2>
Zen Coding requires <a href='http://wiki.eclipse.org/Eclipse_Monkey_Overview'>EclipseMonkey</a> plugin to run. This plugin is bundled with Aptana by default. So, if you're using Aptana, you can skip first step.<br>
<ol><li>Install EclipseMonkey using update site: <a href='http://download.eclipse.org/technology/dash/update'>http://download.eclipse.org/technology/dash/update</a> (you can skip this step if you have Aptana installed)<br>
</li><li>Create top-level project in your current Eclipse workspace, name it, for example, <b>zencoding</b>
</li><li>Create <b>scripts</b> folder inside newly created project<br>
</li><li>Extract contents of downloaded zip plugin into this folder. The project structure may look like this:<br>
<blockquote><img src='http://zen-coding.googlecode.com/svn/wiki/images/aptana-proj-structure.png' />
</blockquote></li><li>Restart Eclipse/Aptana if needed</li></ol>

<b>UPD:</b> see step-by-step ZC installation on Aptana (Windows) in <a href='http://gonzalezmora.com/publications/screencasts/ZenCoding/ZenCoding.html'>screencast from Gonzalo González Mora</a>.<br>
<br>
Now you should have Scripts menu item with Zen Coding in it.<br>
<br>
<h2>Changing keyboard shortcuts</h2>
If you don't like default keyboard shortcuts, you can always change them. For example, if you wish to change "Expand Abbreviation" shortcut, you should open <code>Expand Abbreviation.js</code> file. At the top of this file you will see something like this:<br>
<pre><code>/*<br>
 * Menu: Zen Coding &gt; Expand Abbreviation<br>
 * Kudos: Sergey Chikuyonok (http://chikuyonok.ru)<br>
 * License: EPL 1.0<br>
 * Key: M3+E<br>
 * DOM: http://download.eclipse.org/technology/dash/update/org.eclipse.eclipsemonkey.lang.javascript<br>
 * <br>
 * @include "/EclipseMonkey/scripts/monkey-doc.js"<br>
 * @include "lib/core.js"<br>
 * @include "settings.js"<br>
 */<br>
</code></pre>

There's a <b>Key</b> command describing current shortcut, which is <code>M3+E</code> in this case (<code>M3</code> stands for <code>Alt</code>). Just change this shortcut and save the file. Read more about available keycodes on <a href='http://docs.aptana.com/docs/index.php/Eclipse_Monkey_scripting_with_Ruby#Adding_metadata_to_your_script'>Aptana Help Pages</a>

Please note that action hotkeys may be changed in future releases.<br>
<br>
<h2>Keyboard shortcuts doesn't work!</h2>
Eclipse is a great IDE with tons of features, most of them are bound to keyboard shortcuts. Every newly installed Eclipse plugin binds its own shortcuts. All this may result in keyboard shortcut conflicts with Zen Coding: shortcuts defined in Eclipse's Preferences take precedence over script ones.<br>
<br>
There are two solutions of this problem:<br>
<ol><li>Unbind reserved shortcuts from Eclipse’s Preferences → General → Keys. You can sort commands by Binding field, select command and click on “Unbind Command” button.<br>
</li><li>Remap Zen Coding action to different keyboard shortcut (see above)</li></ol>

Eclipse on Mac (at least Cocoa version) has problems with M3 (Alt) key, which makes creating convenient two or three-keys keyboard shortcuts virtually impossible for every user by default.