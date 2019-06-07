<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Schema;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function formatValidationErrors(\Illuminate\Contracts\Validation\Validator $validator)
    {
        $status = 422;
        return [
            "message" => $status . " error",
            "errors" => [
                "message" => $validator->getMessageBag()->first(),
                "info" => [$validator->getMessageBag()->keys()[0]],
            ],
            "status_code" => $status
        ];
    }

    public  function  Hiddens(){
        return [];
    }

    /**
     * Format Data For Table
     *
     * @param Collection $data
     * @param string $tables
     * @param array $rules
     *
     */
    public function FormatForTable(Collection $data,string $table,$rules=[]){
        return [
            "rows"=>$data->makeHidden($this->Hiddens()),
            "columns"=>array_diff(Schema::getColumnListing($table),$this->Hiddens()),
            "rules"=>$rules
        ];
    }

}
