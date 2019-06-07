<?php

namespace App\Http\Controllers\BackEnd;

use App\Models\Services;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Schema;

class ServicesController extends Controller
{
    /**
     * Retrieve All Services
     * @return array
     */
    public function get()
    {
        $hiddens=['description', 'user_id', "user", 'updated_at',"link"];
        $services = Services::with(['user'])->get()->makeHidden($hiddens);
        $rules = [
            "columns" => [
                "created_at" => [
                    "text" => "Create Date",
                    "type" => "text"
                ],
                "status" => [
                    "type" => "boolean",
                ],
                "icon" => [
                    "type" => "icon"
                ],
                "username" => [
                    "type" => "bold"
                ],
            ],
            "action" => [
                "editable" => true,
                "deletable"=>true,
                "creatable"=>true
            ]
        ];

        return [
            "columns"=>array_diff(Schema::getColumnListing("services"),$hiddens),
            "rows" => $services,
            "rules" => $rules
        ];
    }

    /**
     * Store Service
     *
     * @param Request $request
     * @return array
     */
    public function post(Request $request,$id=null)
    {$request->validate([
        "title"=>"required",
        "summary"=>"required",
        "icon"=>"required",
    ]);


        $service = is_null($id) ? New Services() : Services::find($id);


        $service->title = $request->title;
        $service->summary = $request->summary;
        $service->user_id = $request->user('api')->id;
        $service->icon = $request->icon;
        $service->status=boolval($request->status);

        $service->save();
    }

    // Delete
    public function delete(Request $request,$id)
    {
        Services::where("id",$id)->delete();
        return $this->get();
    }
}
