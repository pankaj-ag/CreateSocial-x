<?php

namespace App\Repositories;

use App\Models\Favorite;
use App\Repositories\NotificationRepository;
use App\Repositories\UserRepository;
use Illuminate\Cache\Repository;
use Illuminate\Events\Dispatcher;
use Illuminate\Mail\Mailer;

class FavoriteRepository
{
     public function __construct(
        Favorite $favorite,
        Dispatcher $event,
        NotificationRepository $notificationRepository,
        Repository $cache,
        \Illuminate\Config\Repository $config,
        UserRepository $userRepository,
        Mailer $mailer,
        RealTimeRepository $realTimeRepository,
        MustAvoidUserRepository $mustAvoidUserRepository
    ) 
     {
        $this->model = $favorite;
        $this->event = $event;
        $this->notification = $notificationRepository;
        $this->cache = $cache;
        $this->config = $config;
        $this->userRepository = $userRepository;
        $this->mailer = $mailer;
        $this->realTimeRepository = $realTimeRepository;
        $this->mustAvoidUserRepository = $mustAvoidUserRepository;
    }
    
     public function add($userid, $postid, $way = 2)
    {
        $userid = sanitizeText($userid);
        $postid = sanitizeText($postid);
        $way = sanitizeText($way);
        if (!is_numeric($userid) or !is_numeric($postid)) return false;
         
         return $this->exists($userid, $postid, $way); 
        if (!$this->exists($userid, $postid, $way)) {
            $connection = $this->model->newInstance();
            $connection->user_id = $userid;
            $connection->post_id = $postid;
            $connection->way = $way;
            $connection->save();
        }
         return true;
         
     }
    
     public function exists($userid, $postid, $way)
    {
        
            return $query = $this->model->where('user_id', '=', $userid)
                ->where('post_id', '=', $postid)
                ->where('way', '=', $way)->first();

    }
    
    
     public function followers($userid, $limit = 10)
    {
        return $this->model->where('user_id', '=', $userid)
            ->where('way', '=', 1)->paginate($limit);
    }
    
    
}

?>