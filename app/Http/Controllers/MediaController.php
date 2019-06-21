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

        // Cover
        $cover = $request->cover ?? env("DEFAULT_COVER_IMAGE","/assets/images/no-image.png");
        if(!is_string($cover)){
            $cover_info = $this->storage->store_file($cover, "cover");
        }

        // Attachment Audio
        $attachment = $request->attachment;
        $attach_info = $this->storage->store_file($attachment, "attach");

        $media->fill(array_merge(\request()->toArray(),[
                "attachment" => $attach_info['mediaLink'],
                "cover" => $cover_info['mediaLink'] ?? $cover
            ]));

        $result = $this->firestore->store($media,base64_encode($request->name));
        return $result;
    }
}
