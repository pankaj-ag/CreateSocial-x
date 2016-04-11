<?php
namespace App\Addons\Verify\Classes;

/**
*
*@author: Tiamiyu waliu kola
*@website : www.crea8social.com
*/
class VerifyRepository
{
    public function __construct(VerifyModel $model)
    {
        $this->model = $model;
    }

    public function add($code)
    {
        if ($this->exists($code)) return false;

        if (!$this->validCode($code)) return false;
        $codeModel = $this->model->newInstance();
        $codeModel->code = $code;
        $codeModel->save();

        //lets verify this user now
        $user = \Auth::user();
        $user->verified = 1;
        $user->save();

        return true;
    }

    public function exists($code)
    {
        return $this->model->where('code', '=', $code)->first();
    }

    protected function validCode($buyerCode)
    {
        $apiKey = "2ndevom38wcgtiag8r52hrn09rhvb18o";
        ini_set('user_agent', 'Mozilla/5.0');

        try{
            $requestUrl = 'http://marketplace.envato.com/api/edge/procrea8/'.$apiKey.'/verify-purchase:'.$buyerCode.'.json';

            $jsonContent = file_get_contents($requestUrl);


            if (empty($jsonContent)) return false;

            $jsonData = json_decode($jsonContent, true);


            if (isset($jsonData['error'])) return false;

            if (empty($jsonData['verify-purchase'])) return false;

            return true;
        } catch(\Exception $e) {
            return false;
        }
    }

}