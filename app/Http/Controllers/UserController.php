<?php


namespace App\Http\Controllers;


use App\Base\FirestoreInterface;
use App\Base\Traits\FirebaseAuthenticate;
use App\User;
use Firebase\JWT\JWT;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Kreait\Firebase\Factory;
use Kreait\Firebase\Request\UpdateUser;
use Kreait\Firebase\ServiceAccount;
use Kreait\Firebase\Value\Provider;
use Lcobucci\JWT\Parser;
use Morrislaptop\Firestore\Firestore;

class UserController extends Controller
{
    use AuthenticatesUsers,FirebaseAuthenticate;

    private $firebase;

    private $firestore;

    public function __construct(FirestoreInterface $firestore)
    {
        $serviceAccount = ServiceAccount::fromJsonFile(base_path('storage/mediation-edd90-firebase-adminsdk-kkswm-b206b3123b.json'));
        $this->firebase = (new Factory())
            ->withServiceAccount($serviceAccount)
            ->create();
        $this->firestore = $firestore;
    }

    public function login(Request $request)
    {
        $request->validate([
            "email" => "required|email",
            "password" => "required|min:6"
        ]);

        $email = $request->email;
        $password = $request->password;

        $auth = $this->firebase->getAuth();

        $user = $auth->verifyPassword($email, $password);

        $user_info = $this->firestore->find('users', $user->uid);
        $user->customAttributes = [
            "info" => $user_info
        ];

        $token = $auth->createCustomToken($user->uid);

        $model=(new User())->fill([
           "isAdmin"=>true,
        ]);

        $result=$this->firestore->store($model,$user->uid);

        return [
            "data" => $user->providerData[0],
            "token" => (string)$token
        ];
    }

    public function FetchUser()
    {
        $auth = $this->firebase->getAuth();

        $token = Cookie::get('token');
        $verifytoken=$this->VerifyToken($token);
        $user=$auth->getUser($verifytoken->getClaim('sub'));

        $user_info = $this->firestore->find('users', $user->uid);
        $user->customAttributes = [
            "info" => $user_info
        ];
        return [
            "data" => $user->providerData[0],
        ];
    }

    public function logout(Request $request)
    {
        $auth = $this->firebase->getAuth();
    }

}
