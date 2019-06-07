<?php

namespace App\Http\Controllers;

use App\User;
use const http\Client\Curl\Features\HTTP2;
use http\Cookie;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Http\Parser\Cookies;

class UserController extends Controller
{

    use AuthenticatesUsers;

    //

    public function login(Request $request)
    {

        $credential_name=filter_var($request->email,FILTER_VALIDATE_EMAIL)?"email":"name";

        $credential=[
            $credential_name=>$request->email,
            "password"=>$request->password
        ];

        $token = \auth('api')->attempt($credential);

        if (!$token) {
            return response("Wrong Crediential", 406);
        }
        $cookie = \cookie('token', $token, null, null, null, false, false);
        return response()->json([
            "user" => \auth("api")->user()
        ])->withCookie($cookie);
    }


    public function FetchUser(Request $request)
    {
        return ["user" => $request->user('api')];
    }

    /**
     * User Change Password
     *
     * @param Request $request
     */
    public function ChangePassword(Request $request){
        $request->validate([
           "password"=>"required|confirmed",
            "old_password"=>"required",
        ]);


        $user=$request->user('api');
        $old=$request->get("old_password","");
        $new=$request->get("password","");

        if(!Hash::check($old,$user->password)){
            return response("Wrong Old Password",406);
        }
        $user->password=$new;
        $user->save();
        return response("login Again",401);
    }

    public function updateUser(Request $request){
//        return $request;
        $request->validate([
            "avatar"=>"required",
            "name"=>"required",
            "email"=>"required"
        ]);
        $user=$request->user('api');
        $user->avatar=$request->avatar;
        $user->name=$request->name;
        $user->email=$request->email;

        $user->save();
    }

    /**
     * Not Using , Logout By Javascript
     * @param Request $request
     */
    public function logout(Request $request)
    {
//        if(\cookie('token')){
//            \auth('api')->logout();
//        }
        \cookie()->forget("token");
//        return view('auth.login');
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }
}
