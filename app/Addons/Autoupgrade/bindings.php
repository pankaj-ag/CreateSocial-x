<?php

$e = null;
if (preg_match('#/admincp#', \Request::url())) {


    if (app('App\Addons\Autoupgrade\Classes\UpgradeRepository')->needUpdate()) {
        $e = '<span style="color: red;font-weight: bold">New!</span>';
    }
}
\Menu::add('admincp-menu', 'upgrade', [
    'link' => URL::to('admincp/upgrade'),
    'name' => 'Upgrade System '. $e,
]);

