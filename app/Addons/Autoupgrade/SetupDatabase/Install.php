<?php

namespace App\Addons\Autoupgrade\SetupDatabase;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema;

/**
*
*@author: Tiamiyu waliu kola
*@website : www.crea8social.com
*/
class Install
{
    public function database()
    {
        if (!\Schema::hasTable('upgraded_versions')) {
            \Schema::create('upgraded_versions', function(Blueprint $table) {
                $table->increments('id');
                $table->string('version_id');
                $table->timestamps();
            });
        }

    }
}