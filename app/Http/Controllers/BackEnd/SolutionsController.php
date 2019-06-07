<?php

namespace App\Http\Controllers\BackEnd;

use App\Models\Solutions;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SolutionsController extends Controller
{
    // Get ALL solution
    public function get(){
        $solutions= Solutions::with(['user'])->get();
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
        return $this->FormatForTable($solutions,"solution",$rules);
    }

    public function Hiddens()
    {
        return ['description','user.id','user_id','updated_at',"link"];
    }

    // Store solution
    public function post(Request $request,$id=null){
        $request->validate([
            "title"=>"required",
            "icon"=>"required",
        ]);

        $solution=is_null($id)?New Solutions():Solutions::find($id);

        $solution->title=$request->title;
        $solution->user_id=$request->user('api')->id;
        $solution->icon=$request->icon;
        $solution->status=boolval($request->status);

//        return $solution;
        $solution->save();

    }

    // Delete
    public function delete(Request $request,$id){
        Solutions::where('id',$id)->delete();
    }
}
