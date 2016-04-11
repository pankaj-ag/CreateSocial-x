<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laracasts\Presenter\PresentableTrait;


class Favorite extends Model

{
 use PresentableTrait;

    protected $table = "favorits";

    protected $presenter = "App\\Presenters\\ConnectionPresenter";   
    
    
    
    
    
}














?>