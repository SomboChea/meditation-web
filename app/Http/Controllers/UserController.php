<?php


namespace App\Http\Controllers;


use App\Base\FirestoreInterface;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Kreait\Firebase\Factory;
use Kreait\Firebase\Request\UpdateUser;
use Kreait\Firebase\ServiceAccount;
use Morrislaptop\Firestore\Firestore;

class UserController extends Controller
{
    use AuthenticatesUsers;

    private $firebase;

    private $firestore;

    public function __construct(FirestoreInterface $firestore)
    {
        $serviceAccount=ServiceAccount::fromJsonFile(base_path('storage/mediation-edd90-firebase-adminsdk-kkswm-b206b3123b.json'));
        $this->firebase=(new Factory())
            ->withServiceAccount($serviceAccount)
            ->create();
        $this->firestore=$firestore;
    }

    public function login(Request $request)
    {
        $request->validate([
            "email"=>"required|email",
            "password"=>"required|min:6"
        ]);

        $email=$request->email;
        $password=$request->password;


        $auth=$this->firebase->getAuth();



        $user=$auth->verifyPassword($email,$password);

        $auth->updateUser($user->uid,[
            "displayName"=>"Test Admin",
            "photoUrl"=>"https://www.google.com.kh/url?sa=i&source=images&cd=&ved=2ahUKEwjwuJn1jvXiAhUWM94KHSRWDQAQjRx6BAgBEAU&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3ANo_image_available.svg&psig=AOvVaw3PaCxYFftzmiQjRmzDYQPq&ust=1561018955477083",
        ]);
//
//        $prop=UpdateUser::new();
//        $prop->withDisplayName('Test Admin')
//            ->withPhotoUrl()
        $user_info=$this->firestore->find('users',$user->uid);
        $user->customAttributes=[
            "info"=>$user_info
        ];

        return [
            "data"=>$user
        ];


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
