<?php

Route::any('verify/get', [
    'as' => 'verify-get',
    'uses' => 'App\\Addons\\Verify\\Controllers\\VerifyController@index'
]);

Route::any('verify/reset', [
    'uses' => 'App\\Addons\\Verify\\Controllers\\VerifyController@resetAll'
]);