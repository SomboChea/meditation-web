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
use Google\Cloud\Firestore\DocumentSnapshot;
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
     * @param $collection
     * @return mixed
     */
    public function getdocuments($collection){
        $documents=$this->firestore->collection($collection)->documents();

        if(is_array($documents)){
            return [];
        }

        $rows=$documents->rows();
//        dd($result);
        $result= collect($rows)->map(function ($el){
            return $el->data();
        });
        return $result;
    }

    /**
     * @var UploadedFile
     */
    private $test;
    public function store(Model $model,$uid){
        $table_name=$model->getTable();
        $fillables=$model->getFillable();
        foreach ($fillables as $fillable){
            if(!$model->$fillable){
                throw new \Exception("No set all fillable");
                break;
            }
        }

        $snapshot= $this->firestore->collection($table_name)
            ->document($uid)
            ->set($model->toArray())
            ->snapshot()
            ->data();
        return $snapshot;
    }

    public function find($table,$id){
        try{
            $doc= $this->firestore->collection($table)->document($id);
            $snap=$doc->snapshot();
            return collect($snap->data());
        }catch (\Exception $e){
            return collect([]);
        }
    }
}
