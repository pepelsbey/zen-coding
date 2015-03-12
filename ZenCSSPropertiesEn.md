# Zen CSS properties #

Based on CSS 3 draft specification

```
Property                                    Alias
```

## Special Rules ##

```
@import url();                              @i
```

```
@media print {                              @m
    
    }
```

```
@font-face {                                @f
    font-family:;
    src:url();
    }
```

```
!important                                  !
```

```
expression()                                exp
```

## Properties Groups ##

### Sorting Methods ###

  * Positioning
  * Box behavior and properties
  * Sizing
  * Color appearance
  * Special content types
  * Text
  * Visual properties
  * Print

### Positioning ###

```
position:;                                  pos
position:static;                            pos:s
position:absolute;                          pos:a
position:relative;                          pos:r
position:fixed;                             pos:f
```

```
top:;                                       t
top:auto;                                   t:a
```

```
right:;                                     r
right:auto;                                 r:a
```

```
bottom:;                                    b
bottom:auto;                                b:a
```

```
left:;                                      l
left:auto;                                  l:a
```

```
z-index:;                                   z
z-index:auto;                               z:a
```

### Box behavior and properties ###

```
float:;                                     fl
float:none;                                 fl:n
float:left;                                 fl:l
float:right;                                fl:r
```

```
clear:;                                     cl
clear:none;                                 cl:n
clear:left;                                 cl:l
clear:right;                                cl:r
clear:both;                                 cl:b
```

```
display:;                                   d
display:none;                               d:n
display:block;                              d:b
display:inline;                             d:i
display:inline-block;                       d:ib
display:-moz-inline-box;                   d:mib
display:-moz-inline-stack;                 d:mis
display:list-item;                          d:li
display:run-in;                             d:ri
display:compact;                            d:cp
display:table;                              d:tb
display:inline-table;                       d:itb
display:table-caption;                      d:tbcp
display:table-column;                       d:tbcl
display:table-column-group;                 d:tbclg
display:table-header-group;                 d:tbhg
display:table-footer-group;                 d:tbfg
display:table-row;                          d:tbr
display:table-row-group;                    d:tbrg
display:table-cell;                         d:tbc
```

```
visibility:;                                v
visibility:visible;                         v:v
visibility:hidden;                          v:h
visibility:collapse;                        v:c
```

```
overflow:;                                  ov
overflow:visible;                           ov:v
overflow:hidden;                            ov:h
overflow:scroll;                            ov:s
overflow:auto;                              ov:a
```

```
overflow-x:;                                ovx
overflow-x:visible;                         ovx:v
overflow-x:hidden;                          ovx:h
overflow-x:scroll;                          ovx:s
overflow-x:auto;                            ovx:a
```

```
overflow-y:;                                ovy
overflow-y:visible;                         ovy:v
overflow-y:hidden;                          ovy:h
overflow-y:scroll;                          ovy:s
overflow-y:auto;                            ovy:a
```

```
overflow-style:;                            ovs
overflow-style:auto;                        ovs:a
overflow-style:scrollbar;                   ovs:s
overflow-style:panner;                      ovs:p
overflow-style:move;                        ovs:m
overflow-style:marquee;                     ovs:mq
```

```
zoom:1;                                     zoo
```

```
clip:;                                      cp
clip:auto;                                  cp:a
clip:rect(0 0 0 0);                         cp:r
```

```
box-sizing:;                                bxz
box-sizing:content-box;                     bxz:cb
box-sizing:border-box;                      bxz:bb
```

```
box-shadow:;                                bxsh
box-shadow:none;                            bxsh:n
box-shadow:0 0 0 #000;                      bxsh+
-webkit-box-shadow:;                        bxsh:w
-webkit-box-shadow:0 0 0 #000;              bxsh:w+
-moz-box-shadow:;                           bxsh:m
-moz-box-shadow:0 0 0 0 #000;               bxsh:m+
```

### Sizing ###

```
margin:;                                    m
margin:auto;                                m:a
margin:0;                                   m:0
margin:0 0;                                 m:2
margin:0 0 0;                               m:3
margin:0 0 0 0;                             m:4
```

```
margin-top:;                                mt
margin-top:auto;                            mt:a
```

```
margin-right:;                              mr
margin-right:auto;                          mr:a
```

```
margin-bottom:;                             mb
margin-bottom:auto;                         mb:a
```

```
margin-left:;                               ml
margin-left:auto;                           ml:a
```

```
padding:;                                   p
padding:0;                                  p:0
padding:0 0;                                p:2
padding:0 0 0;                              p:3
padding:0 0 0 0;                            p:4
```

```
padding-top:;                               pt
padding-right:;                             pr
padding-bottom:;                            pb
padding-left:;                              pl
```

```
width:;                                     w
width:auto;                                 w:a
```

```
height:;                                    h
height:auto;                                h:a
```

```
max-width:;                                 maw
max-width:none;                             maw:n
```

```
max-height:;                                mah
max-height:none;                            mah:n
```

```
min-width:;                                 miw
min-height:;                                mih
```

### Color appearance ###

```
outline:;                                   o
outline:none;                               o:n
outline:1px solid #000;                     o+
```

```
outline-offset:;                            oo
outline-width:;                             ow
outline-style:;                             os
```

```
outline-color:#000;                         oc
outline-color:invert;                       oc:i
```

```
border:;                                    bd
border:none;                                bd:n
border:1px solid #000;                      bd+
```

```
border-break:;                              bdbk
border-break:close;                         bdbk:c
```

```
border-collapse:;                           bdcl
border-collapse:collapse;                   bdcl:c
border-collapse:separate;                   bdcl:s
```

```
border-color:#000;                          bdc
```

```
border-image:;                                          bdi
border-image:none;                                      bdi:n
border-image:url() 0 repeat;                            bdi:+
-webkit-border-image:;                                  bdi:w
-webkit-border-image:url() 0 repeat;                    bdi:w+
-moz-border-image:;                                     bdi:m
-moz-border-image:url() 0 repeat;                       bdi:m+
```

```
border-top-image:;                          bdti
border-top-image:none;                      bdti:n
```

```
border-right-image:;                        bdri
border-right-image:none;                    bdri:n
```

```
border-bottom-image:;                       bdbi
border-bottom-image:none;                   bdbi:n
```

```
border-left-image:;                         bdli
border-left-image:none;                     bdli:n
```

```
border-corner-image:;                       bdci
border-corner-image:none;                   bdci:n
border-corner-image:continue;               bdci:c
```

```
border-top-left-image:;                     bdtli
border-top-left-image:none;                 bdtli:n
border-top-left-image:continue;             bdtli:c
```

```
border-top-right-image:;                    bdtri
border-top-right-image:none;                bdtri:n
border-top-right-image:continue;            bdtri:c
```

```
border-bottom-right-image:;                 bdbri
border-bottom-right-image:none;             bdbri:n
border-bottom-right-image:continue;         bdbri:c
```

```
border-bottom-left-image:;                  bdbli
border-bottom-left-image:none;              bdbli:n
border-bottom-left-image:continue;          bdbli:c
```

```
border-fit:;                                bdf
border-fit:clip;                            bdf:c
border-fit:repeat;                          bdf:r
border-fit:scale;                           bdf:sc
border-fit:stretch;                         bdf:st
border-fit:overwrite;                       bdf:ow
border-fit:overflow;                        bdf:of
border-fit:space;                           bdf:sp
```

```
border-length:;                             bdlt
border-length:auto;                         bdlt:a
```

```
border-spacing:;                            bdsp
```

```
border-style:;                              bds
border-style:none;                          bds:n
border-style:hidden;                        bds:h
border-style:dotted;                        bds:dt
border-style:dashed;                        bds:ds
border-style:solid;                         bds:s
border-style:double;                        bds:db
border-style:dot-dash;                      bds:dtds
border-style:dot-dot-dash;                  bds:dtdtds
border-style:wave;                          bds:w
border-style:groove;                        bds:g
border-style:ridge;                         bds:r
border-style:inset;                         bds:i
border-style:outset;                        bds:o
```

```
border-width:;                              bdw
```

```
border-top:;                                bdt
border-top:none;                            bdt:n
border-top:1px solid #000;                  bdt+
```

```
border-top-width:;                          bdtw
```

```
border-top-style:;                          bdts
border-top-style:none;                      bdts:n
```

```
border-top-color:#000;                      bdtc
```

```
border-right:;                              bdr
border-right:none;                          bdr:n
border-right:1px solid #000;                bdr+
```

```
border-right-width:;                        bdrw
```

```
border-right-style:;                        bdrs
border-right-style:none;                    bdrs:n
```

```
border-right-color:#000;                    bdrc
```

```
border-bottom:;                             bdb
border-bottom:none;                         bdb:n
border-bottom:1px solid #000;               bdb+
```

```
border-bottom-width:;                       bdbw
```

```
border-bottom-style:;                       bdbs
border-bottom-style:none;                   bdbs:n
```

```
border-bottom-color:#000;                   bdbc
```

```
border-left:;                               bdl
border-left:none;                           bdl:n
border-left:1px solid #000;                 bdl+
```

```
border-left-width:;                         bdlw
```

```
border-left-style:;                         bdls
border-left-style:none;                     bdls:n
```

```
border-left-color:#000;                     bdlc
```

```
border-radius:;                             bdrs
-webkit-border-radius:;                     bdrs:w
-moz-border-radius:;                        bdrs:m
border-top-right-radius:;                   bdtrrs
border-top-left-radius:;                    bdtlrs
border-bottom-right-radius:;                bdbrrs
border-bottom-left-radius:;                 bdblrs
```

```
background:;                                                                               bg
background:none;                                                                           bg:n
background:#FFF url() 0 0 no-repeat;                                                       bg+
filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='',sizingMethod='crop');     bg:ie
```

```
background-color:#FFF;                      bgc
background-color:transparent;               bgc:t
```

```
background-image:url();                     bgi
background-image:none;                      bgi:n
```

```
background-repeat:;                         bgr
background-repeat:repeat;                   bgr:r
background-repeat:repeat-x;                 bgr:x
background-repeat:repeat-y;                 bgr:y
background-repeat:no-repeat;                bgr:n
```

```
background-attachment:;                     bga
background-attachment:fixed;                bga:f
background-attachment:scroll;               bga:s
```

```
background-position:0 0;                    bgp
background-position-x:;                     bgpx
background-position-y:;                     bgpy
```

```
background-break:;                          bgbk
background-break:bounding-box;              bgbk:bb
background-break:each-box;                  bgbk:eb
background-break:continuous;                bgbk:c
```

```
background-clip:;                           bgcp
background-clip:border-box;                 bgcp:bb
background-clip:padding-box;                bgcp:pb
background-clip:content-box;                bgcp:cb
background-clip:no-clip;                    bgcp:nc
```

```
background-origin:;                         bgo
background-origin:padding-box;              bgo:pb
background-origin:border-box;               bgo:bb
background-origin:content-box;              bgo:cb
```

```
background-size:;                           bgz
background-size:auto;                       bgz:a
background-size:contain;                    bgz:ct
background-size:cover;                      bgz:cv
```

```
color:#000;                                 c
```

### Special content types ###

```
table-layout:;                              tbl
table-layout:auto;                          tbl:a
table-layout:fixed;                         tbl:f
```

```
caption-side:;                              cps
caption-side:top;                           cps:t
caption-side:bottom;                        cps:b
```

```
empty-cells:;                               ec
empty-cells:show;                           ec:s
empty-cells:hide;                           ec:h
```

```
list-style:;                                lis
list-style:none;                            lis:n
```

```
list-style-position:;                       lisp
list-style-position:inside;                 lisp:i
list-style-position:outside;                lisp:o
```

```
list-style-type:;                           list
list-style-type:none;                       list:n
list-style-type:disc;                       list:d
list-style-type:circle;                     list:c
list-style-type:square;                     list:s
list-style-type:decimal;                    list:dc
list-style-type:decimal-leading-zero;       list:dclz
list-style-type:lower-roman;                list:lr
list-style-type:upper-roman;                list:ur
```

```
list-style-image:;                          lisi
list-style-image:none;                      lisi:n
```

```
quotes:;                                    q
quotes:none;                                q:n
quotes:'\00AB' '\00BB' '\201E' '\201C';     q:ru
quotes:'\201C' '\201D' '\2018' '\2019';     q:en
```

```
content:;                                   ct
content:normal;                             ct:n
content:open-quote;                         ct:oq
content:no-open-quote;                      ct:noq
content:close-quote;                        ct:cq
content:no-close-quote;                     ct:ncq
content:attr();                             ct:a
content:counter();                          ct:c
content:counters();                         ct:cs
```

```
counter-increment:;                         coi
counter-reset:;                             cor
```

### Text ###

```
vertical-align:;                            va
vertical-align:super;                       va:sup
vertical-align:top;                         va:t
vertical-align:text-top;                    va:tt
vertical-align:middle;                      va:m
vertical-align:baseline;                    va:bl
vertical-align:bottom;                      va:b
vertical-align:text-bottom;                 va:tb
vertical-align:sub;                         va:sub
```

```
text-align:;                                ta
text-align:left;                            ta:l
text-align:center;                          ta:c
text-align:right;                           ta:r
text-align:justify;                         ta:j
```

```
text-align-last:;                           tal
text-align-last:auto;                       tal:a
text-align-last:left;                       tal:l
text-align-last:center;                     tal:c
text-align-last:right;                      tal:r
```

```
text-decoration:;                           td
text-decoration:none;                       td:n
text-decoration:overline;                   td:o
text-decoration:line-through;               td:l
text-decoration:underline;                  td:u
```

```
text-emphasis:;                             te
text-emphasis:none;                         te:n
text-emphasis:accent;                       te:ac
text-emphasis:dot;                          te:dt
text-emphasis:circle;                       te:c
text-emphasis:disc;                         te:ds
text-emphasis:before;                       te:b
text-emphasis:after;                        te:a
```

```
text-height:;                               th
text-height:auto;                           th:a
text-height:font-size;                      th:f
text-height:text-size;                      th:t
text-height:max-size;                       th:m
```

```
text-indent:;                               ti
text-indent:-9999px;                        ti:-
```

```
text-justify:;                              tj
text-justify:auto;                          tj:a
text-justify:inter-word;                    tj:iw
text-justify:inter-ideograph;               tj:ii
text-justify:inter-cluster;                 tj:ic
text-justify:distribute;                    tj:d
text-justify:kashida;                       tj:k
text-justify:tibetan;                       tj:t
```

```
text-outline:;                              to
text-outline:none;                          to:n
text-outline:0 0 #000;                      to+
```

```
text-replace:;                              tr
text-replace:none;                          tr:n
```

```
text-transform:;                            tt
text-transform:none;                        tt:n
text-transform:uppercase;                   tt:u
text-transform:capitalize;                  tt:c
text-transform:lowercase;                   tt:l
```

```
text-wrap:;                                 tw
text-wrap:normal;                           tw:n
text-wrap:none;                             tw:no
text-wrap:unrestricted;                     tw:u
text-wrap:suppress;                         tw:s
```

```
text-shadow:;                               tsh
text-shadow:none;                           tsh:n
text-shadow:0 0 0 #000;                     tsh+
```

```
line-height:;                               lh
```

```
white-space:;                               whs
white-space:normal;                         whs:n
white-space:pre;                            whs:p
white-space:nowrap;                         whs:nw
white-space:pre-wrap;                       whs:pw
white-space:pre-line;                       whs:pl
```

```
white-space-collapse:;                      whsc
white-space-collapse:normal;                whsc:n
white-space-collapse:keep-all;              whsc:k
white-space-collapse:loose;                 whsc:l
white-space-collapse:break-strict;          whsc:bs
white-space-collapse:break-all;             whsc:ba
```

```
word-break:;                                wob
word-break:normal;                          wob:n
word-break:keep-all;                        wob:k
word-break:loose;                           wob:l
word-break:break-strict;                    wob:bs
word-break:break-all;                       wob:ba
```

```
word-spacing:;                              wos
```

```
word-wrap:;                                 wow
word-wrap:normal;                           wow:n
word-wrap:none;                             wow:no
word-wrap:unrestricted;                     wow:u
word-wrap:suppress;                         wow:s
```

```
letter-spacing:;                            lts
```

```
font:;                                      f
font:1em Arial,sans-serif;                  f+
```

```
font-weight:;                               fw
font-weight:normal;                         fw:n
font-weight:bold;                           fw:b
font-weight:bolder;                         fw:br
font-weight:lighter;                        fw:lr
```

```
font-style:;                                fs
font-style:normal;                          fs:n
font-style:italic;                          fs:i
font-style:oblique;                         fs:o
```

```
font-variant:;                              fv
font-variant:normal;                        fv:n
font-variant:small-caps;                    fv:sc
```

```
font-size:;                                 fz
```

```
font-size-adjust:;                          fza
font-size-adjust:none;                      fza:n
```

```
font-family:;                                               ff
font-family:Georgia,'Times New Roman',serif;              ff:s
font-family:Helvetica,Arial,sans-serif;                     ff:ss
font-family:'Monotype Corsiva','Comic Sans MS',cursive;     ff:c
font-family:Capitals,Impact,fantasy;                        ff:f
font-family:Monaco,'Courier New',monospace;                 ff:m
```

```
font-effect:;                               fef
font-effect:none;                           fef:n
font-effect:engrave;                        fef:eg
font-effect:emboss;                         fef:eb
font-effect:outline;                        fef:o
```

```
font-emphasize:;                            fem
```

```
font-emphasize-position:;                   femp
font-emphasize-position:before;             femp:b
font-emphasize-position:after;              femp:a
```

```
font-emphasize-style:;                      fems
font-emphasize-style:none;                  fems:n
font-emphasize-style:accent;                fems:ac
font-emphasize-style:dot;                   fems:dt
font-emphasize-style:circle;                fems:c
font-emphasize-style:disc;                  fems:ds
```

```
font-smooth:;                               fsm
font-smooth:auto;                           fsm:a
font-smooth:never;                          fsm:n
font-smooth:always;                         fsm:aw
```

```
font-stretch:;                              fst
font-stretch:normal;                        fst:n
font-stretch:ultra-condensed;               fst:uc
font-stretch:extra-condensed;               fst:ec
font-stretch:condensed;                     fst:c
font-stretch:semi-condensed;                fst:sc
font-stretch:semi-expanded;                 fst:se
font-stretch:expanded;                      fst:e
font-stretch:extra-expanded;                fst:ee
font-stretch:ultra-expanded;                fst:ue
```

### Visual properties ###

```
opacity:;                                                               op
filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=100);            op:ie
-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';      op:ms
```

```
resize:;                                    rz
resize:none;                                rz:n
resize:both;                                rz:b
resize:horizontal;                          rz:h
resize:vertical;                            rz:v
```

```
cursor:;                                    cur
cursor:auto;                                cur:a
cursor:default;                             cur:d
cursor:crosshair;                           cur:c
cursor:hand;                                cur:ha
cursor:help;                                cur:he
cursor:move;                                cur:m
cursor:pointer;                             cur:p
cursor:text;                                cur:t
```

### Print ###

```
page-break-before:;                         pgbb
page-break-before:auto;                     pgbb:a
page-break-before:always;                   pgbb:aw
page-break-before:left;                     pgbb:l
page-break-before:right;                    pgbb:r
```

```
page-break-inside:;                         pgbi
page-break-inside:auto;                     pgbi:a
page-break-inside:avoid;                    pgbi:av
```

```
page-break-after:;                          pgba
page-break-after:auto;                      pgba:a
page-break-after:always;                    pgba:aw
page-break-after:left;                      pgba:l
page-break-after:right;                     pgba:r
```

```
orphans:;                                   orp
widows:;                                    wid
```