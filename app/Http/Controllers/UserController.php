<?php


namespace App\Http\Controllers;


use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class UserController extends Controller
{
    use AuthenticatesUsers;

    public function login(Request $request)
    {
        return response()->json([
            "user"=>[
                "avatar"=>env("APP_LOGO_LIGHT"),
                "name"=>"Testing",
                "email"=>"Testing"
            ]
        ])->withCookie(cookie()->make(
            'token',
            "je",
            0,
            null,
            null,
            false,
            false));
    }

    public function FetchUser(){
        return response()->json([
            "user"=>[
                "avatar"=>env("APP_LOGO_LIGHT"),
                "name"=>"Testing",
                "email"=>"Testing"
            ]
        ]);
    }
    public function logout(Request $request)
    {

    }


}
