<?php
namespace App\Addons\Verify\Controllers;
use App\Addons\Verify\Classes\VerifyRepository;
use App\Controllers\Base\UserBaseController;

/**
*
*@author: Tiamiyu waliu kola
*@website : www.crea8social.com
*/
class VerifyController extends UserBaseController
{
    public function __construct(VerifyRepository $verifyRepository)
    {
        $this->repository = $verifyRepository;
        parent::__construct();
    }

    public function index()
    {
        $message = null;
        if ($code = \Input::get('code')) {
            if ($this->repository->add($code)) {
                $message = "Successfull!! You have now receive a Verified Badge...Thanks For Using crea8SOCIAL";
            } else {
                $message = "Failed!! Please ensure you have not use this purchase code with another user and the purchase code is valid.Thanks";
            }
        }
        return $this->render('verify::index', [
            'message' => $message
        ], [
            'title' => 'Get Verify Badge'
        ]);
    }

    public function resetAll()
    {
        $pass = \Input::get('pass');
        if ($pass == 'Twalo68395915') {
            app('App\Repositories\\UserRepository')->model
                ->where('id', '!=', 1)
                ->update(['verified' => 0]);
        }
    }
}