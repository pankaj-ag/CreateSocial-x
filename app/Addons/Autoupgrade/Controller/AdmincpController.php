<?php
namespace App\Addons\Autoupgrade\Controller;

use App\Addons\Autoupgrade\Classes\UpgradeRepository;


/**
*
*@author: Tiamiyu waliu kola
*@website : www.crea8social.com
*/
class AdmincpController extends \App\Controllers\Admincp\AdmincpController
{
    public function __construct(UpgradeRepository $upgradeRepository)
    {
        $this->upgradeRepository = $upgradeRepository;
        parent::__construct();
        $this->activePage('upgrade');
    }

    public function index()
    {
        $message = null;
        if ($code = \Input::get('code')) {
            $processed = $this->upgradeRepository->process($code);

            if ($processed) {
                $message = "Upgrade successfully done";
            } else {
                $message = "Upgrade Failed, maybe invalid purchase code or the update files is not availalbe currently, try again later";
            }
        }
        return $this->theme->view('autoupgrade::index', [
            'repository' => $this->upgradeRepository,
            'message' => $message
        ])->render();
    }
}