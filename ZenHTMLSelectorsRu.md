# Селекторы Zen HTML #

## E#name ##

### `div#name` ###
```
<div id="name"></div>
```

## E.name ##

### `div.name` ###
```
<div class="name"></div>
```

### `div.one.two` ###
```
<div class="one two"></div>
```

### `div#name.one.two` ###
```
<div id="name" class="one two"></div>
```

## E>E ##

### `head>link` ###
```
<head>
    <link/>
</head>
```

### `table>tr>td` ###
```
<table>
<tr>
    <td></td>
</tr>
</table>
```

### `ul#name>li.item` ###
```
<ul id="name">
    <li class="item"></li>
</ul>
```

## E+E ##

### `p+p` ###
```
<p></p>
<p></p>
```

### `div#name>p.one+p.two` ###
```
<div id="name">
    <p class="one"></p>
    <p class="two"></p>
</div>
```

# Псевдонимы Zen HTML #

## E\*N ##

### `p*3` ###
```
<p></p>
<p></p>
<p></p>
```

### `ul#name>li.item*3` ###
```
<ul id="name">
    <li class="item"></li>
    <li class="item"></li>
    <li class="item"></li>
</ul>
```

## E\*N$ ##

### `p.name-$*3` ###
```
<p class="name-1"></p>
<p class="name-2"></p>
<p class="name-3"></p>
```

### `select>option#item-$*3` ###
```
<select>
    <option id="item-1"></option>
    <option id="item-2"></option>
    <option id="item-3"></option>
</select>
```

## E+ ##

### `ul+` ###
```
<ul>
    <li></li>
</ul>
```

### `table+` ###
```
<table>
<tr>
    <td></td>
</tr>
</table>
```

### `dl+` ###
```
<dl>
    <dt></dt>
    <dd></dd>
</dl>
```