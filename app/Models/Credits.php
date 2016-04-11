<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
*
*@author : Prakhar AGrawal
*@website : http://www.prakharagrawal.com
*/

class Credits extends Eloquent {

    protected $table = 'crea8social_user_credits';
    
     protected $fillable = array(
         'USER_ID', 
         'CREDITS', 
         'LAST_BOUGHT'
     );

}