<?php

use Illuminate\Foundation\Inspiring;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->describe('Display an inspiring quote');

Artisan::command('test',function(){
//    $storage = new \Google\Cloud\Storage\StorageClient([
//        'keyFilePath' => base_path("storage/mediation-edd90-firebase-adminsdk-kkswm-b206b3123b.json")
//    ]);
//    $bucket=$storage->bucket("mediation-edd90.appspot.com");
//    $file=$bucket->object('0K0bsewn3F4frNatACPC9Sjzr8Q0fHcy5z0rdMKk.jpeg');
//   dd($file->downloadToFile('storage/down.jpg'));



});
