<?php
/**
 * Created by PhpStorm.
 * User: sl
 * Date: 2/9/19
 * Time: 12:25 PM
 */

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Reviews extends Model
{
    protected $table = 'reviews';

    protected $guarded = [];

    public function  scopeActive($query){
        return $query->where('status',1);
    }
}
