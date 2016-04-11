<?php
namespace App\Addons\Autoupgrade\Classes;
use App\Repositories\ConfigurationRepository;
use App\Repositories\DatabaseRepository;

/**
*
*@author: Tiamiyu waliu kola
*@website : www.crea8social.com
*/
class UpgradeRepository
{
    protected $latestUrl = 'http://crea8social.com/upgrade/latest.php';
    protected $downloadUrl = "http://crea8social.com/upgrade/download.php";
   // protected $definesUrl =  "http://localhost/crea8socialwebsite/upgrade/defines.php";

    public function __construct(
        Upgrade $upgrade,
        ConfigurationRepository $configurationRepository,
        DatabaseRepository $databaseRepository
    )
    {
        $this->model = $upgrade;
        $this->configuration = $configurationRepository;
        $this->databaseRepository = $databaseRepository;
    }

    public function needUpdate($get = false)
    {
        $latestUrl = @file_get_contents($this->latestUrl);

        if ($latestUrl) {
            $json = json_decode($latestUrl, true);

            $id = $json['id'];

            if ($get) return $id;

            if (!$this->versionExists($id)) return true;

            return false;
        }

        return false;
    }



    public function versionExists($id)
    {
        return $this->model->where('version_id', '=', $id)->first();
    }

    public function process($code)
    {

        $url = $this->downloadUrl. '?code='.$code;
        $fileContent = file_get_contents($url);

        //rename some folders
        $app_path = app_path('');
        @rename($app_path.'controllers', $app_path.'Controllers');
        @rename($app_path.'Controllers/admincp', $app_path.'Controllers/Admincp');
        @rename($app_path.'Controllers/base', $app_path.'Controllers/Base');
        @rename($app_path.'install', $app_path.'Install');
        @rename($app_path.'interfaces', $app_path.'Interfaces');
        @rename($app_path.'models', $app_path.'Models');
        @rename($app_path.'presenters', $app_path.'Presenters');
        @rename($app_path.'providers', $app_path.'Providers');
        @rename($app_path.'repositories', $app_path.'Repositories');

        //lets try and change permissions for necessary folders
        @chmod(base_path(''), 0777);
        @chmod(base_path('app/'), 0777);
        @chmod(base_path('boostrap/'), 0777);
        @chmod(base_path('themes/'), 0777);
        @chmod(base_path('vendor/'), 0777);
        @chmod(base_path('workbench/'), 0777);

        if (empty($fileContent)) return false;

        $handle = fopen(base_path('update.zip'), 'a+');
        fwrite($handle, $fileContent);
        $zip = new \ZipArchive();
        $res = $zip->open(base_path('update.zip'));
        if ($res == TRUE) {
            $this->configuration->save([
               'maintenance-mode' => 1
            ]);
            $basePath = base_path('');
            $zip->extractTo($basePath);

            $zip->close();

            $this->configuration->update();
            //update has finished lets restore site back
            /**$this->configuration->save([
                'maintenance-mode' => 0
            ]);**/

            //lets register the new version
            $u = $this->model->newInstance();
            $u->version_id = $this->needUpdate(true);
            $u->save();

            $this->databaseRepository->update();
            @unlink(base_path('update.zip'));
            return true;
        } else {
            return false;
        }

        return false;
    }
}