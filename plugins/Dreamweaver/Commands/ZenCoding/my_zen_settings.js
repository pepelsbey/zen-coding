var my_zen_settings = {
	'html': {
		'abbreviations': {
			'jq': '<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>',
		},
		'snippets': {
			'cc:ie8': '<!--[if gte IE 8]>\n\t${child}|\n<![endif]-->',
			'cc:ie9': '<!--[if gte IE 9]>\n\t${child}|\n<![endif]-->',
		}
	},
	'css': {
		'snippets': {
			"@md": "@-moz-document url-prefix() {\n\t${child}|\n}",
		}
	}
};