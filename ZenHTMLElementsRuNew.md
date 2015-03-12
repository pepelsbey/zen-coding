<h1>Элементы Zen HTML</h1>

На основе черновика спецификации HTML 5.

<h2>Корневой элемент</h2>

<h3><code>html</code></h3>
```
<html></html>
```

<h3><code>html:xml</code></h3>
```
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru"></html>
```

<h3><code>html:4t</code></h3>
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ru">
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
</head>
<body>

</body>
</html>
```

<h3><code>html:4s</code></h3>
```
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html lang="ru">
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
</head>
<body>

</body>
</html>
```

<h3><code>html:xt</code></h3>
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru">
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
</head>
<body>

</body>
</html>
```

<h3><code>html:xs</code></h3>
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru">
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
</head>
<body>

</body>
</html>
```

<h3><code>html:xxs</code></h3>
```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru">
<head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
</head>
<body>

</body>
</html>
```

<h3><code>html:5</code></h3>
```
<!DOCTYPE HTML>
<html lang="ru-RU">
<head>
    <title></title>
    <meta charset="UTF-8">
</head>
<body>

</body>
</html>
```

<h2>Метаданные документа</h2>

<h3><code>head</code></h3>
```
<head></head>
```

<h3><code>title</code></h3>
```
<title></title>
```

<h3><code>base</code></h3>
```
<base href="">
```

<h3><code>link</code></h3>
```
<link>
```

<h3><code>link:css</code></h3>
```
<link rel="stylesheet" type="text/css" href="style.css" media="all">
```

<h3><code>link:print</code></h3>
```
<link rel="stylesheet" type="text/css" href="print.css" media="print">
```

<h3><code>link:favicon</code></h3>
```
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
```

<h3><code>link:touch</code></h3>
```
<link rel="apple-touch-icon" href="favicon.png">
```

<h3><code>link:rss</code></h3>
```
<link rel="alternate" type="application/rss+xml" title="RSS" href="rss.xml">
```

<h3><code>link:atom</code></h3>
```
<link rel="alternate" type="application/atom+xml" title="Atom" href="atom.xml">
```

<h3><code>meta</code></h3>
```
<meta>
```

<h3><code>meta:utf</code></h3>
```
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
```

<h3><code>meta:win</code></h3>
```
<meta http-equiv="Content-Type" content="text/html;charset=Win-1251">
```

<h3><code>meta:compat</code></h3>
```
<meta http-equiv="X-UA-Compatible" content="IE=7">
```

<h3><code>style</code></h3>
```
<style type="text/css"></style>
```

<h2>Скрипты</h2>

<h3><code>script</code></h3>
```
<script type="text/javascript"></script>
```

<h3><code>script:src</code></h3>
```
<script type="text/javascript" src=""></script>
```

<h3><code>noscript</code></h3>
```
<noscript></noscript>
```

<h2>Структурные элементы</h2>

<h3><code>body</code></h3>
```
<body></body>
```

<h3><code>section, sect</code></h3>
```
<section></section>
```

<h3><code>nav</code></h3>
```
<nav></nav>
```

<h3><code>article, art</code></h3>
```
<article></article>
```

<h3><code>aside</code></h3>
```
<aside></aside>
```

<h3><code>h1</code></h3>
```
<h1></h1>
```

<h3><code>h2</code></h3>
```
<h2></h2>
```

<h3><code>h3</code></h3>
```
<h3></h3>
```

<h3><code>h4</code></h3>
```
<h4></h4>
```

<h3><code>h5</code></h3>
```
<h5></h5>
```

<h3><code>h6</code></h3>
```
<h6></h6>
```

<h3><code>hgroup, hgr</code></h3>
```
<hgroup></hgroup>
```

<h3><code>header, hdr</code></h3>
```
<header></header>
```

<h3><code>footer, ftr</code></h3>
```
<footer></footer>
```

<h3><code>address, adr</code></h3>
```
<address></address>
```

<h3><code>div</code></h3>
```
<div></div>
```

<h2>Группировка содержимого</h2>

<h3><code>p</code></h3>
```
<p></p>
```

<h3><code>hr</code></h3>
```
<hr>
```

<h3><code>br</code></h3>
```
<br>
```

<h3><code>pre</code></h3>
```
<pre></pre>
```

<h3><code>dialog, dlg</code></h3>
```
<dialog></dialog>
```

<h3><code>blockquote, bq</code></h3>
```
<blockquote></blockquote>
```

<h3><code>ol</code></h3>
```
<ol></ol>
```

<h3><code>ol+</code></h3>
```
<ol>
    <li></li>
</ol>
```

<h3><code>ul</code></h3>
```
<ul></ul>
```

<h3><code>ul+</code></h3>
```
<ul>
    <li></li>
</ul>
```

<h3><code>li</code></h3>
```
<li></li>
```

<h3><code>dl</code></h3>
```
<dl></dl>
```

<h3><code>dl+</code></h3>
```
<dl>
    <dt></dt>
    <dd></dd>
</dl>
```

<h3><code>dt</code></h3>
```
<dt></dt>
```

<h3><code>dd</code></h3>
```
<dd></dd>
```

<h2>Семантика текста</h2>

<h3><code>a</code></h3>
```
<a href=""></a>
```

<h3><code>a:link</code></h3>
```
<a href="http://"></a>
```

<h3><code>a:mail</code></h3>
```
<a href="mailto:"></a>
```

<h3><code>q</code></h3>
```
<q></q>
```

<h3><code>cite</code></h3>
```
<cite></cite>
```

<h3><code>em</code></h3>
```
<em></em>
```

<h3><code>strong, str</code></h3>
```
<strong></strong>
```

<h3><code>small</code></h3>
```
<small></small>
```

<h3><code>mark</code></h3>
```
<mark></mark>
```

<h3><code>dfn</code></h3>
```
<dfn></dfn>
```

<h3><code>abbr</code></h3>
```
<abbr title=""></abbr>
```

<h3><code>acronym, acr</code></h3>
```
<acronym title=""></acronym>
```

<h3><code>time</code></h3>
```
<time></time>
```

<h3><code>progress, prog</code></h3>
```
<progress></progress>
```

<h3><code>meter</code></h3>
```
<meter></meter>
```

<h3><code>code</code></h3>
```
<code></code>
```

<h3><code>var</code></h3>
```
<var></var>
```

<h3><code>samp</code></h3>
```
<samp></samp>
```

<h3><code>kbd</code></h3>
```
<kbd></kbd>
```

<h3><code>sub</code></h3>
```
<sub></sub>
```

<h3><code>sup</code></h3>
```
<sup></sup>
```

<h3><code>span</code></h3>
```
<span></span>
```

<h3><code>i</code></h3>
```
<i></i>
```

<h3><code>b</code></h3>
```
<b></b>
```

<h3><code>bdo</code></h3>
```
<bdo dir=""></bdo>
```

<h3><code>bdo:r</code></h3>
```
<bdo dir="rtl"></bdo>
```

<h3><code>bdo:l</code></h3>
```
<bdo dir="ltr"></bdo>
```

<h3><code>ruby</code></h3>
```
<ruby></ruby>
```

<h3><code>rt</code></h3>
```
<rt></rt>
```

<h3><code>rp</code></h3>
```
<rp></rp>
```

<h2>Версионность</h2>

<h3><code>ins</code></h3>
```
<ins></ins>
```

<h3><code>del</code></h3>
```
<del></del>
```

<h2>Внедрённое содержимое</h2>

<h3><code>figure, fig</code></h3>
```
<figure></figure>
```

<h3><code>img</code></h3>
```
<img src="" alt="">
```

<h3><code>iframe, ifr</code></h3>
```
<iframe src="" frameborder="0"></iframe>
```

<h3><code>embed, emb</code></h3>
```
<embed src="" type="">
```

<h3><code>object, obj</code></h3>
```
<object data="" type=""></object>
```

<h3><code>param</code></h3>
```
<param name="" value="">
```

<h3><code>video</code></h3>
```
<video src=""></video>
```

<h3><code>audio</code></h3>
```
<audio src=""></audio>
```

<h3><code>source, src</code></h3>
```
<source>
```

<h3><code>canvas</code></h3>
```
<canvas></canvas>
```

<h3><code>map</code></h3>
```
<map name=""></map>
```

<h3><code>map+</code></h3>
```
<map name="">
    <area shape="" coords="" href="" alt="">
</map>
```

<h3><code>area</code></h3>
```
<area shape="" coords="" href="" alt="">
```

<h3><code>area:d</code></h3>
```
<area shape="default" href="" alt="">
```

<h3><code>area:c</code></h3>
```
<area shape="circle" coords="" href="" alt="">
```

<h3><code>area:r</code></h3>
```
<area shape="rect" coords="" href="" alt="">
```

<h3><code>area:p</code></h3>
```
<area shape="poly" coords="" href="" alt="">
```

<h2>Табличные данные</h2>

<h3><code>table</code></h3>
```
<table></table>
```

<h3><code>table+</code></h3>
```
<table>
<tr>
    <td></td>
</tr>
</table>
```

<h3><code>caption, cap</code></h3>
```
<caption></caption>
```

<h3><code>colgroup, colg</code></h3>
```
<colgroup></colgroup>
```

<h3><code>colgroup+, colg+</code></h3>
```
<colgroup>
    <col>
</colgroup>
```

<h3><code>col</code></h3>
```
<col>
```

<h3><code>tbody</code></h3>
```
<tbody></tbody>
```

<h3><code>thead</code></h3>
```
<thead></thead>
```

<h3><code>tfoot</code></h3>
```
<tfoot></tfoot>
```

<h3><code>tr</code></h3>
```
<tr></tr>
```

<h3><code>tr+</code></h3>
```
<tr>
    <td></td>
</tr>
```

<h3><code>th</code></h3>
```
<th></th>
```

<h3><code>td</code></h3>
```
<td></td>
```

<h2>Формы</h2>

<h3><code>form</code></h3>
```
<form action=""></form>
```

<h3><code>form:get</code></h3>
```
<form action="" method="get"></form>
```

<h3><code>form:post</code></h3>
```
<form action="" method="post"></form>
```

<h3><code>fieldset, fset</code></h3>
```
<fieldset></fieldset>
```

<h3><code>legend, leg</code></h3>
```
<legend></legend>
```

<h3><code>label</code></h3>
```
<label for=""></label>
```

<h3><code>input</code></h3>
```
<input type="">
```

<h3><code>input:hidden, input:h</code></h3>
```
<input type="hidden" value="">
```

<h3><code>input:text, input:t</code></h3>
```
<input type="text" value="" id="">
```

<h3><code>input:search</code></h3>
```
<input type="search" value="" id="">
```

<h3><code>input:email</code></h3>
```
<input type="email" value="" id="">
```

<h3><code>input:url</code></h3>
```
<input type="url" value="" id="">
```

<h3><code>input:password, input:p</code></h3>
```
<input type="password" value="" id="">
```

<h3><code>input:datetime</code></h3>
```
<input type="datetime" value="" id="">
```

<h3><code>input:datetime-local</code></h3>
```
<input type="datetime-local" value="" id="">
```

<h3><code>input:date</code></h3>
```
<input type="date" value="" id="">
```

<h3><code>input:month</code></h3>
```
<input type="month" value="" id="">
```

<h3><code>input:week</code></h3>
```
<input type="week" value="" id="">
```

<h3><code>input:time</code></h3>
```
<input type="time" value="" id="">
```

<h3><code>input:number</code></h3>
```
<input type="number" value="" id="">
```

<h3><code>input:range</code></h3>
```
<input type="range" value="" id="">
```

<h3><code>input:color</code></h3>
```
<input type="color" value="" id="">
```

<h3><code>input:checkbox, input:c</code></h3>
```
<input type="checkbox" id="">
```

<h3><code>input:radio, input:r</code></h3>
```
<input type="radio" id="">
```

<h3><code>input:file, input:f</code></h3>
```
<input type="file" id="">
```

<h3><code>input:submit, input:s</code></h3>
```
<input type="submit" value="">
```

<h3><code>input:image, input:i</code></h3>
```
<input type="image" src="" alt="">
```

<h3><code>input:reset</code></h3>
```
<input type="reset" value="">
```

<h3><code>input:button, input:b</code></h3>
```
<input type="button" value="">
```

<h3><code>button, btn</code></h3>
```
<button></button>
```

<h3><code>select</code></h3>
```
<select id=""></select>
```

<h3><code>select+</code></h3>
```
<select id="">
    <option value=""></option>
</select>
```

<h3><code>optgroup, optg</code></h3>
```
<optgroup></optgroup>
```

<h3><code>optgroup+, optg+</code></h3>
```
<optgroup>
    <option></option>
</optgroup>
```

<h3><code>option, opt</code></h3>
```
<option></option>
```

<h2>Интерактивные элементы</h2>

<h3><code>datagrid, datag</code></h3>
```
<datagrid></datagrid>
```

<h3><code>datalist, datal</code></h3>
```
<datalist></datalist>
```

<h3><code>textarea, tarea</code></h3>
```
<textarea id="" cols="30" rows="10"></textarea>
```

<h3><code>keygen, kg</code></h3>
```
<keygen>
```

<h3><code>output, out</code></h3>
```
<output></output>
```

<h3><code>details, det</code></h3>
```
<details></details>
```

<h3><code>command, cmd</code></h3>
```
<command>
```

<h3><code>bb</code></h3>
```
<bb></bb>
```

<h3><code>menu</code></h3>
```
<menu></menu>
```

<h3><code>menu:context, menu:c</code></h3>
```
<menu type="context"></menu>
```

<h3><code>menu:toolbar, menu:t</code></h3>
```
<menu type="toolbar"></menu>
```

<h2>Условные комментарии</h2>

<h3><code>cc:ie</code></h3>
```
<!--[if IE]><![endif]-->
```

<h3><code>cc:noie</code></h3>
```
<!--[if !IE]><!--><!--<![endif]-->
```