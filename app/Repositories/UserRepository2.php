<?php

namespace App\Repositories;

use App\Interfaces\PhotoRepositoryInterface;
use App\Models\User;
use Illuminate\Events\Dispatcher;
use Illuminate\Config\Repository;
use Illuminate\Mail\Mailer;

/**
*User Repository
*
*@author : Tiamiyu waliu
*@website : http://www.iDocrea8.com
*/
class UserRepository2
{
    public  $model;

    public function __construct(
        User $user,
        Dispatcher $dispatcher,
        Repository $config,
        PhotoRepositoryInterface $photoRepository,
        BlockedUserRepository $blockedUserRepository,
        Mailer $mailer,
        PhotoAlbumRepository $photoAlbumRepository,
        \Illuminate\Cache\Repository $cache,
        MustAvoidUserRepository $mustAvoidUserRepository
    )
    {
        $this->model = $user;
        $this->event = $dispatcher;
        $this->config =  $config;
        $this->photoRepository = $photoRepository;
        $this->blockedUserRepository = $blockedUserRepository;
        $this->mailer = $mailer;
        $this->photoAlbum = $photoAlbumRepository;
        $this->cache = $cache;
        $this->mustAvoidUserRepository = $mustAvoidUserRepository;
    }

   
       

  
  
    

}
?>
