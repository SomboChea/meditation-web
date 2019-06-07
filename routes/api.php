<?php

use App\Models\Contact;
use App\Models\Reasons;
use App\Models\Requestdemo;
use App\Models\Reviews;
use App\Models\Services;
use App\Models\Solutions;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



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

Route::post('contact', function (Request $request) {
    Contact::create([
        "name" => $request->name,
        "email" => $request->email,
        "subject" => $request->subject,
        "message" => $request->message,
        "phone" => $request->phone,
        "wayreach" => $request->wayreach,
        "ip" => $request->getClientIp()
    ]);
    return $request;
});

Route::post('/review', function (Request $request) {
//    return response('',322);
    $request->validate([
        "name" => "required",
        "lastname" => "required"
    ]);
    $review = Reviews::create([
        "name" => $request->name,
        "lastname" => $request->lastname,
        "comments" => $request->review,
        "company" => $request->company,
        "avatar" => $request->icon,
        "position" => $request->position
    ]);
    $service = Reviews::all();
    return $service;
});

Route::get('/services', function () {
    $service = Services::select('title as heading', 'summary', 'id as value', 'icon')->active()->get();//->keyBy('heading');
    return $service;
});

Route::get('/solutions', function () {
    $service = Solutions::select('title as heading', 'id as value', 'icon')->active()->get()->keyBy('value');
    return $service;
});

Route::get('/clients', function () {
    $service = App\Models\Clients::active()->get();
    return $service;
});


Route::get('/reasons', function () {
    $service = Reasons::select('title as heading', 'id as value', 'summary', 'icon')->active()->get()->keyBy('value');
    return $service;
});


Route::get('/reviews', function () {
//    return "dss";
    $service = Reviews::active()->get();
    return $service;
});


Route::post('requestdemo', function (Request $request) {
    $request->validate([
       "firstname"=>"required",
        "lastname"=>"required",
        "phone"=>"required|digits_between:8,11",
        "email"=>"required|email",
        "about"=>"required"
    ]);
    $demo = Requestdemo::create([
        "firstname" => $request->firstname,
        "lastname" => $request->lastname,
        "companyname" => $request->companyname,
        "email" => $request->email,
        "phone" => $request->phone,
        "country" => $request->country,
        "about" => $request->about,
        "ip" => $request->getClientIp()
    ]);

    Mail::send('mailview', ["demo" => $demo->toArray()], function (Message $m) use ($demo) {
        $subject_name = $demo->companyname . " - " . $demo->firstname . " " . $demo->lastname;
        $m->from(env("MAIL_FROM_ADDRESS"), env("MAIL_FROM_NAME"));
        $m->subject("Request Demo => $subject_name");
        $m->to(env("MAIL_TARGET"));
    });

    return $request;
});
