<?php

namespace App\Http\Controllers\BackEnd;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    //
    public function get(){
        $tables=["requestdemo","reviews","services",'solution',"reasons"];
        $final=array_reduce($tables,function ($result,$table){
            $t=DB::table($table)->get();

            return array_merge($result,[$table=>[
                "total"=>$t->count(),
                "active"=>$t->filter(function ($el){
                    return $el->status==1;
                })->count()
            ]]);
        },[]);

        return [
            "boards"=>$final
        ];
    }

}
