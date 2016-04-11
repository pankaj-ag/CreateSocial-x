<?php
Route::any('/favorite/add/{userid}/{postid}/{way}', [
    'as' => 'favorite-add',
    'before' => 'auth',
    'uses' => 'App\\Controllers\\FavoriteController@add'
])->where([
        'userid' => '[0-9]+',
        'touserid' => '[0-9]+',
        'way' => '[0-9]+'
    ]);
?>