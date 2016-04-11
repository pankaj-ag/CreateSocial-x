<?php

app('menu')->add('account-menu', 'verify-get', [
    'name' => 'Get Verified Badge',
    'link' => \URL::to('verify/get'),
    'ajaxify' => true,
    'icon' => '<i class="icon ion-android-earth"></i>'
]);

app('menu')->add('site-menu', 'verify-get', [
    'name' => 'Get Verified Badge',
    'link' => \URL::to('verify/get'),
    'ajaxify' => true,
    'icon' => '<i class="icon ion-android-earth"></i>'
]);

Event::listen('user-side-preview-card', function() {
   echo Theme::section('verify::button');
});