<?php

namespace App\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    protected $appends=["username"];

    protected $guarded=[];
    //
    public function user(){
        return $this->belongsTo(User::class)->select(['id','name']);
    }

    public function getUsernameAttribute(){
        if($this->user){
            return $this->user->name;
        }
        return "";
    }

    public function  scopeActive($query){
        return $query->where('status',1);
    }
}
