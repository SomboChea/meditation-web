<?php
/**
 * Created by PhpStorm.
 * User: sl
 * Date: 6/12/19
 * Time: 10:24 AM
 */

namespace App\Base\Implement;


use App\Base\FirebaseStorageInterface;
use Illuminate\Http\UploadedFile;
use Kreait\Firebase\ServiceAccount;

class FirebaseStorageRepository implements FirebaseStorageInterface
{
    private $storage;
    public function __construct()
    {
        $serviceAccount=ServiceAccount::fromJsonFile(base_path("storage/mediation-edd90-firebase-adminsdk-kkswm-b206b3123b.json"));
        $firebase=(new \Kreait\Firebase\Factory())
            ->withServiceAccount($serviceAccount)
            ->create();
        $this->storage=$firebase->getStorage();
    }

    /**
     * @var UploadedFile
     */
    private $test;
    public function store_file($file,$path=""){
//        $info=fopen($file,"r");
//        $info=fopen('/home/sl/projects/web/royada/public/img/cash_on_delivery_new.png',"r");
//        dd($info);
//        dd($file);
//        $this->test->hashName();
        $info = $this->storage
            ->getBucket()
            ->upload(fopen($file,"r"),[
                "name"=>$file->hashName(),
                'acl' => [],
                'predefinedAcl' => 'PUBLICREAD'
            ])
//            ->identity()
            ->info();
//        $info = $this->storage
//            ->getBucket()
//            ->upload(fopen('/home/sl/projects/web/royada/public/img/cash_on_delivery_new.png',"r"),[
//                "name"=>"test.png",
////                'acl' => [],
////                'predefinedAcl' => 'PUBLICREAD'
//            ])
////            ->identity()
//        ->info()
//        ;
        return $info;
    }

}
