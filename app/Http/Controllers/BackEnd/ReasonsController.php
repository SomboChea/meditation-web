<?php

namespace App\Http\Controllers\BackEnd;

use App\Models\Reasons;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReasonsController extends Controller
{
    /// Get ALL Reason
    public function get(){
        $Reasons= Reasons::with(['user'])->get();
        $rules=[
            "columns"=>[
                "icon"=>[
                    "type"=>"icon"
                ],
                "status"=>[
                    "type"=>"boolean"
                ]
            ],
            "action"=>[
                "editable"=>true,
                "deletable"=>true,
                "creatable"=>true
            ]
        ];
        return $this->FormatForTable($Reasons,"reasons",$rules);
    }

    public function Hiddens()
    {
        return ['description','user.id','user_id','updated_at',"link"];
    }

    // Store Reason
    public function post(Request $request,$id=null){
        $request->validate([
            "title"=>"required",
            "summary"=>"required",
            "icon"=>"required",
        ]);


        $Reason=is_null($id)?New Reasons():Reasons::find($id);

        $Reason->title=$request->title;
        $Reason->summary=$request->summary;
        $Reason->user_id=$request->user('api')->id;
        $Reason->icon=$request->icon;
        $Reason->status=boolval($request->status);


        $Reason->save();

        return $this->get();
    }

    // Delete
    public function delete(Request $request,$id){
        Reasons::where('id',$id)->delete();
        return $this->get();
    }
}
