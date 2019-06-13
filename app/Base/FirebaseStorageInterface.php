<?php
/**
 * Created by PhpStorm.
 * User: sl
 * Date: 6/12/19
 * Time: 10:24 AM
 */

namespace App\Base;


interface FirebaseStorageInterface
{
    public function store_file($file,$path="");
}