<?php
use Illuminate\Support\Facades\Route;


Route::post('/user',"UserController@FetchUser");
Route::put("/user","UserController@ChangePassword");
Route::patch('/user',"UserController@updateUser");

Route::post('/media',"MediaController@upload");
Route::get('/medias',"MediaController@gets");
