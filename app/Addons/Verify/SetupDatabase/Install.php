<?php

namespace App\Addons\Verify\SetupDatabase;

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
        if (!\Schema::hasTable('verified_codes')) {
            \Schema::create('verified_codes', function(Blueprint $table) {
                $table->increments('id');
                $table->string('code');
                $table->timestamps();
            });
        }


    }
}