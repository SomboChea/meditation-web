<?php

namespace App\Http\Controllers\BackEnd;

use App\Models\Clients ;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ClientsController extends Controller
{
    public function get(){
        $Clients= Clients::all();
        $rules=[
            "columns"=>[
                "icon"=>[
                    "type"=>"icon"
                ],
                "status"=>[
                    "type"=>"boolean"
                ]
            ]
        ];
        return $this->FormatForTable($Clients,"clients",$rules);
    }

    // Store Client
    public function post(Request $request){
        $request->validate([
            "name"=>"required",
            "icon"=>"required",
        ]);


        $id=$request->get('id',null);
        $Client=is_null($id)?New Clients():Clients::find($id);

        $Client->name=$request->name;
//        $Client->link=$request->link;
//        $Client->user_id=$request->user('api')->id;
        $Client->icon=$request->icon;

        $Client->save();

        return $this->get();
    }

    // Delete
    public function delete(Request $request,$id){
        Clients::where('id',$id)->delete();
        return $this->get();
    }
}
