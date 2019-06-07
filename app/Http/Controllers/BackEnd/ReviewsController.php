<?php
/**
 * Created by PhpStorm.
 * User: sl
 * Date: 2/9/19
 * Time: 12:24 PM
 */

namespace App\Http\Controllers\BackEnd;


use App\Http\Controllers\Controller;
use App\Models\Reviews;
use Illuminate\Http\Request;

class ReviewsController extends Controller
{
    public function get(){
//        return "Review";
        $reviews= Reviews::all();
        $rules=[
            "columns"=>[
                "icon"=>[
                    "type"=>"icon"
                ],
                "status"=>[
                    "type"=>"boolean"
                ],
                "name"=>[
                    "text"=>"First Name"
                ],
                "avatar"=>[
                    "type"=>"avatar",
                    "name"=>"name"
                ]
            ],
            "action"=>[
                "deletable"=>true
            ]
        ];
        return $this->FormatForTable($reviews,"reviews",$rules);
    }

    public function Hiddens()
    {
        return ["updated_at"];
    }

    public function post(Request $request,$id=null){

        $review=Reviews::firstOrCreate([
            "id"=>$id
        ]);
        $review->status=$request->status;
        $review->save();
    }

    // Delete
    public function delete(Request $request,$id){
        Reviews::where('id',$id)->delete();
    }
}
