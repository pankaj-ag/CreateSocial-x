<?php

namespace App\Controllers;

use App\Controllers\Base\ProfileBaseController;
use App\Repositories\FavoriteRepository;

/**
*
*@author : Tiamiyu waliu
*@website : http://www.iDocrea8.com
*/
class FavoriteController extends ProfileBaseController
{
     public function __construct(FavoriteRepository $favoriteRepository)
    {
        parent::__construct();
        $this->favoriteRepository = $favoriteRepository;
    }
    
    

    public function add($userid, $postid, $way)
    {
        /*if ($this->favoriteRepository->add($userid, $postid, $way)) {
            return 1;
        }
        return 0;*/
        return $this->favoriteRepository->add($userid, $postid, $way);
    
    }



   

}