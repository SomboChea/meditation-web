<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

Route::post('/user',"UserController@FetchUser");
Route::put("/user","UserController@ChangePassword");
Route::patch('/user',"UserController@updateUser");

Route::group(["namespace"=>"BackEnd\\"],function () {
    Route::get("/services", "ServicesController@get");
    Route::post("/services/{id?}","ServicesController@post");
    Route::delete("/services/{id}","ServicesController@delete");

    Route::get("/solutions", "SolutionsController@get");
    Route::post("/solutions/{id?}","SolutionsController@post");
    Route::delete("/solutions/{id}","SolutionsController@delete");

    Route::get("/reasons", "ReasonsController@get");
    Route::post("/reasons/{id?}","ReasonsController@post");
    Route::delete("/reasons/{id}","ReasonsController@delete");


    Route::get("/reviews", "ReviewsController@get");
    Route::post("/reviews/{id?}", "ReviewsController@post");
    Route::delete("/reviews/{id}","ReviewsController@delete");

    Route::get("/clients", "ClientsController@get");

    Route::get("/requests","RequestDemoController@get");
    Route::post("/requests/{id}","RequestDemoController@post");
    Route::get('/notifications',"RequestDemoController@getUnread");

    Route::get("/dashboard", "DashboardController@get");

});


Route::post('/media/save', function (Request $request) {
    $request->validate([
        "file" => "required"
    ]);
    $filename = Storage::disk('icon')->put('', $request->file);
    return [
        "filename" => $filename,
        "location" => Storage::disk('icon')->url($filename)
    ];
});

