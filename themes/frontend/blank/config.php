<?php

return array(
    'theme-fade-effect' => [
        'type' => 'boolean',
        'title' => 'Enable/Disable Page Load Fade Effect',
        'description' => 'Use this settings to enable or disable page load fade effect without the need to touch any code',
        'value' => '1',
    ],
    'enable-blogmenu' => [
        'type' => 'boolean',
        'title' => 'Enable blogmenu',
        'description' => 'If u have BlogAddon you can enable/disable blogmenu in leftMenu',
        'value' => '0',
    ],
/*header color code*/	
    'blank-header-color' => [
        'type' => 'textarea',
        'title' => 'input your own header color or gradient',
        'description' => 'Use <a href="http://www.cssmatic.com/gradient-generator" target="_blank">Gradientgenerator</a></strong> and copy your generated gradient-code here.<br>leave empty for default',
        'value' => '',
    ],
    'blank-header-iconcol' => [
        'type' => 'text',
        'title' => 'Input your own header icon color',
        'description' => 'Input an <strong><a href="http://html-color-codes.info/#HTML_Color_Picker" target="_blank">css-color</a></strong> like: #dddddd<br>leave empty for default',
        'value' => '',
    ],
    'blank-suggestion-adscolumn' => [
        'type' => 'boolean',
        'title' => 'Enable "suggestion people" to home right.column',
        'description' => 'Enable "people you may know" on 3column before Ads',
        'value' => '0',
    ],
);