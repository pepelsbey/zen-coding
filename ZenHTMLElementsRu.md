# Элементы Zen HTML #

На основе черновика спецификации HTML 5.

## Корневой элемент ##

### `html` ###
```
<html></html>
```

### `html:xml` ###
```
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru"></html>
```

### `html:4t` ###
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

### `html:4s` ###
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

### `html:xt` ###
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

### `html:xs` ###
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

### `html:xxs` ###
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

### `html:5` ###
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

## Метаданные документа ##

### `head` ###
```
<head></head>
```

### `title` ###
```
<title></title>
```

### `base` ###
```
<base href="">
```

### `link` ###
```
<link>
```

### `link:css` ###
```
<link rel="stylesheet" type="text/css" href="style.css" media="all">
```

### `link:print` ###
```
<link rel="stylesheet" type="text/css" href="print.css" media="print">
```

### `link:favicon` ###
```
<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
```

### `link:touch` ###
```
<link rel="apple-touch-icon" href="favicon.png">
```

### `link:rss` ###
```
<link rel="alternate" type="application/rss+xml" title="RSS" href="rss.xml">
```

### `link:atom` ###
```
<link rel="alternate" type="application/atom+xml" title="Atom" href="atom.xml">
```

### `meta` ###
```
<meta>
```

### `meta:utf` ###
```
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
```

### `meta:win` ###
```
<meta http-equiv="Content-Type" content="text/html;charset=Win-1251">
```

### `meta:compat` ###
```
<meta http-equiv="X-UA-Compatible" content="IE=7">
```

### `style` ###
```
<style type="text/css"></style>
```

## Скрипты ##

### `script` ###
```
<script type="text/javascript"></script>
```

### `script:src` ###
```
<script type="text/javascript" src=""></script>
```

### `noscript` ###
```
<noscript></noscript>
```

## Структурные элементы ##

### `body` ###
```
<body></body>
```

### `section, sect` ###
```
<section></section>
```

### `nav` ###
```
<nav></nav>
```

### `article, art` ###
```
<article></article>
```

### `aside` ###
```
<aside></aside>
```

### `h1` ###
```
<h1></h1>
```

### `h2` ###
```
<h2></h2>
```

### `h3` ###
```
<h3></h3>
```

### `h4` ###
```
<h4></h4>
```

### `h5` ###
```
<h5></h5>
```

### `h6` ###
```
<h6></h6>
```

### `hgroup, hgr` ###
```
<hgroup></hgroup>
```

### `header, hdr` ###
```
<header></header>
```

### `footer, ftr` ###
```
<footer></footer>
```

### `address, adr` ###
```
<address></address>
```

### `div` ###
```
<div></div>
```

## Группировка содержимого ##

### `p` ###
```
<p></p>
```

### `hr` ###
```
<hr>
```

### `br` ###
```
<br>
```

### `pre` ###
```
<pre></pre>
```

### `dialog, dlg` ###
```
<dialog></dialog>
```

### `blockquote, bq` ###
```
<blockquote></blockquote>
```

### `ol` ###
```
<ol></ol>
```

### `ol+` ###
```
<ol>
    <li></li>
</ol>
```

### `ul` ###
```
<ul></ul>
```

### `ul+` ###
```
<ul>
    <li></li>
</ul>
```

### `li` ###
```
<li></li>
```

### `dl` ###
```
<dl></dl>
```

### `dl+` ###
```
<dl>
    <dt></dt>
    <dd></dd>
</dl>
```

### `dt` ###
```
<dt></dt>
```

### `dd` ###
```
<dd></dd>
```

## Семантика текста ##

### `a` ###
```
<a href=""></a>
```

### `a:link` ###
```
<a href="http://"></a>
```

### `a:mail` ###
```
<a href="mailto:"></a>
```

### `q` ###
```
<q></q>
```

### `cite` ###
```
<cite></cite>
```

### `em` ###
```
<em></em>
```

### `strong, str` ###
```
<strong></strong>
```

### `small` ###
```
<small></small>
```

### `mark` ###
```
<mark></mark>
```

### `dfn` ###
```
<dfn></dfn>
```

### `abbr` ###
```
<abbr title=""></abbr>
```

### `acronym, acr` ###
```
<acronym title=""></acronym>
```

### `time` ###
```
<time></time>
```

### `progress, prog` ###
```
<progress></progress>
```

### `meter` ###
```
<meter></meter>
```

### `code` ###
```
<code></code>
```

### `var` ###
```
<var></var>
```

### `samp` ###
```
<samp></samp>
```

### `kbd` ###
```
<kbd></kbd>
```

### `sub` ###
```
<sub></sub>
```

### `sup` ###
```
<sup></sup>
```

### `span` ###
```
<span></span>
```

### `i` ###
```
<i></i>
```

### `b` ###
```
<b></b>
```

### `bdo` ###
```
<bdo dir=""></bdo>
```

### `bdo:r` ###
```
<bdo dir="rtl"></bdo>
```

### `bdo:l` ###
```
<bdo dir="ltr"></bdo>
```

### `ruby` ###
```
<ruby></ruby>
```

### `rt` ###
```
<rt></rt>
```

### `rp` ###
```
<rp></rp>
```

## Версионность ##

### `ins` ###
```
<ins></ins>
```

### `del` ###
```
<del></del>
```

## Внедрённое содержимое ##

### `figure, fig` ###
```
<figure></figure>
```

### `img` ###
```
<img src="" alt="">
```

### `iframe, ifr` ###
```
<iframe src="" frameborder="0"></iframe>
```

### `embed, emb` ###
```
<embed src="" type="">
```

### `object, obj` ###
```
<object data="" type=""></object>
```

### `param` ###
```
<param name="" value="">
```

### `video` ###
```
<video src=""></video>
```

### `audio` ###
```
<audio src=""></audio>
```

### `source, src` ###
```
<source>
```

### `canvas` ###
```
<canvas></canvas>
```

### `map` ###
```
<map name=""></map>
```

### `map+` ###
```
<map name="">
    <area shape="" coords="" href="" alt="">
</map>
```

### `area` ###
```
<area shape="" coords="" href="" alt="">
```

### `area:d` ###
```
<area shape="default" href="" alt="">
```

### `area:c` ###
```
<area shape="circle" coords="" href="" alt="">
```

### `area:r` ###
```
<area shape="rect" coords="" href="" alt="">
```

### `area:p` ###
```
<area shape="poly" coords="" href="" alt="">
```

## Табличные данные ##

### `table` ###
```
<table></table>
```

### `table+` ###
```
<table>
<tr>
    <td></td>
</tr>
</table>
```

### `caption, cap` ###
```
<caption></caption>
```

### `colgroup, colg` ###
```
<colgroup></colgroup>
```

### `colgroup+, colg+` ###
```
<colgroup>
    <col>
</colgroup>
```

### `col` ###
```
<col>
```

### `tbody` ###
```
<tbody></tbody>
```

### `thead` ###
```
<thead></thead>
```

### `tfoot` ###
```
<tfoot></tfoot>
```

### `tr` ###
```
<tr></tr>
```

### `tr+` ###
```
<tr>
    <td></td>
</tr>
```

### `th` ###
```
<th></th>
```

### `td` ###
```
<td></td>
```

## Формы ##

### `form` ###
```
<form action=""></form>
```

### `form:get` ###
```
<form action="" method="get"></form>
```

### `form:post` ###
```
<form action="" method="post"></form>
```

### `fieldset, fset` ###
```
<fieldset></fieldset>
```

### `legend, leg` ###
```
<legend></legend>
```

### `label` ###
```
<label for=""></label>
```

### `input` ###
```
<input type="">
```

### `input:hidden, input:h` ###
```
<input type="hidden" value="">
```

### `input:text, input:t` ###
```
<input type="text" value="" id="">
```

### `input:search` ###
```
<input type="search" value="" id="">
```

### `input:email` ###
```
<input type="email" value="" id="">
```

### `input:url` ###
```
<input type="url" value="" id="">
```

### `input:password, input:p` ###
```
<input type="password" value="" id="">
```

### `input:datetime` ###
```
<input type="datetime" value="" id="">
```

### `input:datetime-local` ###
```
<input type="datetime-local" value="" id="">
```

### `input:date` ###
```
<input type="date" value="" id="">
```

### `input:month` ###
```
<input type="month" value="" id="">
```

### `input:week` ###
```
<input type="week" value="" id="">
```

### `input:time` ###
```
<input type="time" value="" id="">
```

### `input:number` ###
```
<input type="number" value="" id="">
```

### `input:range` ###
```
<input type="range" value="" id="">
```

### `input:color` ###
```
<input type="color" value="" id="">
```

### `input:checkbox, input:c` ###
```
<input type="checkbox" id="">
```

### `input:radio, input:r` ###
```
<input type="radio" id="">
```

### `input:file, input:f` ###
```
<input type="file" id="">
```

### `input:submit, input:s` ###
```
<input type="submit" value="">
```

### `input:image, input:i` ###
```
<input type="image" src="" alt="">
```

### `input:reset` ###
```
<input type="reset" value="">
```

### `input:button, input:b` ###
```
<input type="button" value="">
```

### `button, btn` ###
```
<button></button>
```

### `select` ###
```
<select id=""></select>
```

### `select+` ###
```
<select id="">
    <option value=""></option>
</select>
```

### `optgroup, optg` ###
```
<optgroup></optgroup>
```

### `optgroup+, optg+` ###
```
<optgroup>
    <option></option>
</optgroup>
```

### `option, opt` ###
```
<option></option>
```

## Интерактивные элементы ##

### `datagrid, datag` ###
```
<datagrid></datagrid>
```

### `datalist, datal` ###
```
<datalist></datalist>
```

### `textarea, tarea` ###
```
<textarea id="" cols="30" rows="10"></textarea>
```

### `keygen, kg` ###
```
<keygen>
```

### `output, out` ###
```
<output></output>
```

### `details, det` ###
```
<details></details>
```

### `command, cmd` ###
```
<command>
```

### `bb` ###
```
<bb></bb>
```

### `menu` ###
```
<menu></menu>
```

### `menu:context, menu:c` ###
```
<menu type="context"></menu>
```

### `menu:toolbar, menu:t` ###
```
<menu type="toolbar"></menu>
```

## Условные комментарии ##

### `cc:ie` ###
```
<!--[if IE]><![endif]-->
```

### `cc:noie` ###
```
<!--[if !IE]><!--><!--<![endif]-->
```