<?php


namespace App\Models;


use App\User;
use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{
    protected $guarded=[];
    //
    public function user(){
        return $this->belongsTo(User::class)->select(['id','name']);
    }

    public function  scopeActive($query){
        return $query->where('status',1);
    }
}