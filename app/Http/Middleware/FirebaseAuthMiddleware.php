<?php

namespace App\Http\Middleware;

use App\Base\Traits\FirebaseAuthenticate;
use Closure;
use Kreait\Firebase\Factory;
use Kreait\Firebase\Http\Middleware;
use Kreait\Firebase\ServiceAccount;

class FirebaseAuthMiddleware extends Middleware
{
    use FirebaseAuthenticate;

    private $firebase;

    public function __construct()
    {
        $serviceAccount = ServiceAccount::fromJsonFile(base_path('storage/mediation-edd90-firebase-adminsdk-kkswm-b206b3123b.json'));
        $this->firebase = (new Factory())
            ->withServiceAccount($serviceAccount)
            ->create();
    }

    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token=$request->cookie('token');
        $decode_token=$this->VerifyToken($token);
        $auth=$this->firebase->getAuth();
        $user=$auth->getUser($decode_token->getClaim('sub'));

        if($this->isAdmin($user->providerData[0])){
            return $next($request);
        }
        abort(401,"Authenticate");
    }
}
