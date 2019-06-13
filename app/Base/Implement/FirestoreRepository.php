<?php
/**
 * Created by PhpStorm.
 * User: sl
 * Date: 11/6/2562
 * Time: 11:19 น.
 */

namespace App\Base\Implement;


use App\Base\FirebaseStorageInterface;
use App\Base\FirestoreInterface;
use Google\Cloud\Firestore\FirestoreClient;
use Google\Cloud\Storage\Acl;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Kreait\Firebase\ServiceAccount;
use Kreait\Firebase\Storage;
use Morrislaptop\Firestore\Factory;
use Morrislaptop\Firestore\Firestore;
use function PHPSTORM_META\type;

class FirestoreRepository implements FirestoreInterface
{
    /**
     * @var Firestore
     */
    private $firestore;

    /**
     * @var FirebaseStorageInterface
     */
    private $storage;

    public function __construct(FirebaseStorageInterface $store)
    {
        $serviceAccount=ServiceAccount::fromJsonFile(base_path("storage/mediation-edd90-firebase-adminsdk-kkswm-b206b3123b.json"));
        $this->firestore=(new Factory())
            ->withServiceAccount($serviceAccount)
            ->createFirestore();
        $this->storage=$store;
    }

    /**
     * @var UploadedFile
     */
    private $test;
    public function store(Model $model){
        $table_name=$model->getTable();
        $fillables=$model->getFillable();
        foreach ($fillables as $fillable){
            if(!$model->$fillable){
                throw new \Exception("No set all fillable");
                break;
            }
        }

        $attachment=$model->attachment;
        $cover=$model->cover;
        $attach_info=$this->storage->store_file($attachment,"attach");
        $cover_info=$this->storage->store_file($cover,"cover");

        $model->fill([
            "attachment"=>$attach_info['mediaLink'],
            "cover"=>$cover_info['mediaLink']
        ]);
//        $this->test->getClientOriginalName()
//        dd($file);
//        dd()
//        $uploaded=$this->storage->getBucket()
//            ->acl()
//            ->add('allUsers',Acl::ROLE_READER);
//        $this->storage->getStorageClient()->bucket()->
//        $uploaded=$this->storage->getBucket()->upload($file,[
//                "name"=>$file->getClientOriginalName(),
//            'acl' => [],
//            'predefinedAcl' => 'PUBLICREAD'
//            ])->info();
//        dd($uploaded);

        $snapshot= $this->firestore->collection($table_name)
            ->document($model->name)
            ->set($model->toArray())
            ->snapshot()
            ->data();
        return $snapshot;
    }
}
