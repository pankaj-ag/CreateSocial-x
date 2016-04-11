<?php
namespace App\Controllers;

//Idocrea8\Theme
use Idocrea8\Theme\Widget;

/**
*
*@author : Tiamiyu waliu
*@website : http://www.iDocrea8.com
*/
class pankajhomecontroller extends \BaseController
    
{
    protected $widget;
    
    public function __construct(Widget $widget)
    {
        $this->widget =$widget;
    }
    public function index()
    {
        
       // return 'helloo';
        return $this->widget->getin();
    }
    
}

?>