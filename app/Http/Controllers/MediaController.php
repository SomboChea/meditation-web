<?php

namespace App\Http\Controllers;

use App\Base\FirestoreInterface;
use App\Models\Media;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    private $firestore;
    public function __construct(FirestoreInterface $fs)
    {
        $this->firestore=$fs;
    }



    public function gets(){
        $collection=$this->firestore->getdocuments((new Media())->getTable());
//        dd($collection);
        return $collection;
        return [
            [
                "name"=>"u1",
                "cover"=>"/assets/images/users/1.jpg",
                "content"=>"hello",
                "author"=>"ls",
                "genre"=>"genre1",
            ],
            [
                "name"=>"u1",
                "cover"=>"/assets/images/users/5.jpg",
                "content"=>"hello",
                "author"=>"sl1",
                "genre"=>"genre1",
            ],
            [
                "name"=>"u9",
                "cover"=>"/assets/images/users/2.jpg",
                "content"=>"hello",
                "author"=>"ls",
                "genre"=>"genre2",
            ],
            [
                "name"=>"u1",
                "cover"=>"/assets/images/users/3.jpg",
                "content"=>"hello",
                "author"=>"dd",
                "genre"=>"genre2",
            ],

        ];
    }

    public function upload(Request $request){
        $media=new Media();
        $media->fill($request->toArray());
        $media->cover=$request->cover ?? env("DEFAULT_NOIMAGE");
        $result=$this->firestore->store($media);
        return $result;
    }
}
