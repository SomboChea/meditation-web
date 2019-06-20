<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;

/**
 *  For Any Request Redirect to home
 */
Route::get("/{any}", function (\Illuminate\Http\Request $request){
    return view("app");
})->name('home')->where('any', '.*');


//Route::get('/**',function (){
//    return view("app");
//});