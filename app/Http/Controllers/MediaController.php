<?php

namespace App\Http\Controllers;

use App\Base\FirebaseStorageInterface;
use App\Base\FirestoreInterface;
use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Hash;

class MediaController extends Controller
{
    private $firestore;
    private $storage;

    public function __construct(FirestoreInterface $fs,FirebaseStorageInterface $str)
    {
        $this->storage=$str;
        $this->firestore = $fs;
    }


    public function gets()
    {
        $collection = $this->firestore->getdocuments((new Media())->getTable());
        return $collection;
    }

    public function upload(Request $request)
    {
        $media = new Media();

        $media->cover = $request->cover ?? env("DEFAULT_NOIMAGE");

        $attachment = $request->attachment;
        $cover = $request->cover;

        $attach_info = $this->storage->store_file($attachment, "attach");
        $cover_info = $this->storage->store_file($cover, "cover");

        $media->fill(array_merge(\request()->toArray(),[
                "attachment" => $attach_info['mediaLink'],
                "cover" => $cover_info['mediaLink']
            ]));


        $result = $this->firestore->store($media,base64_encode($request->name));
        return $result;
    }
}
