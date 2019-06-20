<?php


namespace App\Base\Traits;


use Firebase\Auth\Token\Generator;
use Kreait\Firebase\Auth\UserInfo;
use Kreait\Firebase\Auth\UserRecord;
use Lcobucci\JWT\Parser;
use Lcobucci\JWT\Token;

trait FirebaseAuthenticate
{
    private function CustomTokenToIdToken($custom_token){
        $decode_token=(new Parser())->parse($custom_token);
        $auth = $this->firebase->getAuth();

        $response=$auth->getApiClient()->exchangeCustomTokenForIdAndRefreshToken($decode_token);
        $idtoken=json_decode($response->getBody()->getContents())->idToken;
        return $idtoken;
    }

    /**
     * @param string $token
     * @return Token
     */
    private function VerifyToken($token){
        if(!$this->firebase){
            return abort(500,"Please Instantiate Kreait Firebase in Constructor");
        }
        try{
            $idtoken=$this->CustomTokenToIdToken($token);
            $auth = $this->firebase->getAuth();
            $verify=$auth->verifyIdToken($idtoken);
            return $verify;
        }catch (\Exception $exception){
            return abort(401,$exception->getMessage());
        }
    }

    /**
     * @param UserInfo $user
     */
    public function isAdmin($user){
        return $user->providerId=="password";
    }
}