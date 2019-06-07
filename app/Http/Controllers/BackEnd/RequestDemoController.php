<?php

namespace App\Http\Controllers\BackEnd;

use App\Models\Requestdemo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RequestDemoController extends Controller
{
    //
    public function get(){
        $requests=Requestdemo::all();
        $rules=[
            "columns"=>[
                "status"=>[
                    "type"=>"multiple",
                    "statuses"=>[
                        "1"=>"Contacted",
                        "2"=>"Pending"
                    ]
                ],
                "id"=>[
                    "text"=>"ID"
                ],

                "created_at"=>[
                    "text"=>"Created"
                ],
                "firstname"=>[
                    "text"=>"First Name"
                ],
                "lastname"=>[
                    "text"=>"Last Name"
                ],
                "companyname"=>[
                    "text"=>"Company"
                ],
                "email"=>[
                    "type"=>"hidden"
                ],
                "about"=>[
                    "type"=>"hidden"
                ],
                'ip'=>[
                    "type"=>"hidden"
                ],
            ],
            "action"=>[
                "editable"=>true,
            ]

        ];
        return $this->FormatForTable($requests,"requestdemo",$rules);
    }
    public function Hiddens()
    {
        return ['note',"updated_at"];
    }

    public function post(Request $request,$id){

        $demo=Requestdemo::find($id);
        if(!$demo){
            return response("Not Found",404);
        }
        $demo->status=$request->status;
        $demo->note=$request->note;

        $demo->save();
    }

    public function getUnread(Request $request){
        $query=Requestdemo::where("status",-1);
        $result=$query->get();
        $query->update([
            "status"=>2
        ]);
        return [
            "notifications"=>$result,
            "count"=>$result->count()
        ];
    }
}
