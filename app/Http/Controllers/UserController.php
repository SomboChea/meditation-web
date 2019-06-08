<?php


namespace App\Http\Controllers;


use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class UserController extends Controller
{
    use AuthenticatesUsers;

    public function login(Request $request)
    {
        return [
          "user"=>[
              "avatar"=>env("APP_LOGO_LIGHT"),
              "name"=>"Testing",
              "email"=>"Testing"
          ]
        ];
    }

    public function logout(Request $request)
    {

    }

}
