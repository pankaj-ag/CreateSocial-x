<?php
Route::group(['prefix' => 'admincp/', 'before' => 'admincp-auth'], function() {

    Route::any('upgrade', [
        'as' => 'admincp-upgrade',
        'uses' => 'App\\Addons\\Autoupgrade\\Controller\\AdmincpController@index'
    ]);
});

