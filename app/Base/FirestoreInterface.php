<?php
/**
 * Created by PhpStorm.
 * User: sl
 * Date: 11/6/2562
 * Time: 11:18 น.
 */

namespace App\Base;


use Illuminate\Database\Eloquent\Model;

interface FirestoreInterface
{
    /**
     * Store to fireStore
     *
     * @param Model $model
     * @return mixed
     */
    public function store(Model $model);

    /**
     * get collection's document
     *
     * @param $collection
     * @return mixed
     */
    public function getdocuments($collection);


    }
