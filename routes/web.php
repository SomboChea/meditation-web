<?php

use Illuminate\Support\Facades\Route;

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
Route::post("/login", "UserController@login");
Route::post('/logout',"UserController@logout");

Route::get("test",function (\Illuminate\Database\Eloquent\Collection $test){
    $demo=\App\Models\Requestdemo::find(4);
    $demo=$demo->makeHidden(["id",'updated_at']);
//    $test->toa
//    dd($demo->toArray());
    \Illuminate\Support\Facades\Mail::send('mailview',["demo"=>$demo],function (\Illuminate\Mail\Message $m) use ($demo){
        $subject_name=$demo->companyname." - ".$demo->firstname." ".$demo->lastname;
        $m->from(env("MAIL_FROM_ADDRESS"), env("MAIL_FROM_NAME"));
        $m->subject("Request Demo from $subject_name");
        $m->to("osunlong@gmail.com");

    });
//    \Illuminate\Support\Facades\Mail::send('mailview',["demo"=>$demo->toArray()],function (\Illuminate\Mail\Message $m) use ($demo){
//        $subject_name=$demo->companyname." - ".$demo->firstname." ".$demo->lastname;
//        $m->from(env("MAIL_FROM_ADDRESS"), env("MAIL_FROM_NAME"));
//        $m->subject("Request Demo => $subject_name");
//        $m->to(env("MAIL_TARGET"));
//    });
//    return view("mailview")->with("demo",$demo->toArray());
});


// PHPMAILER SEND MAIL
Route::get("mail",function (){
    $mail = new \PHPMailer\PHPMailer\PHPMailer(true); // notice the \  you have to use root namespace here
    try {
        $mail->isSMTP(); // tell to use smtp
//        $mail->SMTPDebug  = 2;
        $mail->Helo="www.cubetiqs.com"; //env("MAIL_FROM_ADDRESS","localhost");
        $mail->CharSet = "utf-8"; // set charset to utf8
        $mail->SMTPAuth = true;  // use smpt auth
        $mail->SMTPSecure = env("MAIL_ENCRYPTION"); // or ssl
        $mail->Host = env("MAIL_HOST");
//        $mail->setFrom("")
        $mail->Port = env("MAIL_PORT"); // most likely something different for you. This is the mailtrap.io port i use for testing.
        $mail->Username = env("MAIL_USERNAME");
        $mail->Password = env("MAIL_PASSWORD");
        $mail->setFrom("no-reply@cubetiqs.com", env("MAIL_FROM_NAME"));
        $mail->Subject = "WITH HELO 2222";
        $mail->MsgHTML("HELLO SLS");
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        $mail->addAddress("osunlong@gmail.com", "Recipient Name");
        $mail->send();
    } catch (\PHPMailer\PHPMailer\Exception $e) {
        dd($e);
    } catch (Exception $e) {
        dd($e);
    }
    die('success');
});


/**
 * For Request  API Not found in BackEnd
 *
 */
Route::get("/cubetiq/api/{any}", function (\Illuminate\Http\Request $request){
    return response("page Not found",404);
})->name('cubetiq')->where('any', '.*');

/**
 *  For Request API not found in Front End
 */
Route::get("/cubetiq/api/{any}", function (\Illuminate\Http\Request $request){
    return response("page Not found",404);
})->name('cubetiq')->where('any', '.*');

/**
 *  For Any Request Redirect to home
 */
Route::get("/{any}", function (\Illuminate\Http\Request $request){
    return view("index");
})->name('cubetiq')->where('any', '.*');
