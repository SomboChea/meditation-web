<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>CUBETIQ Admin Page</title>

    <!-- Scripts -->
{{--    <script src="{{ asset('js/app.js') }}" defer></script>--}}

<!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
    <style>
        @font-face {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 300;
            src: local('Open Sans Light'), local('OpenSans-Light'), url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN_r8OUuhs.ttf) format('truetype');
        }
        @font-face {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0e.ttf) format('truetype');
        }
        @font-face {
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 600;
            src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'), url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UNirkOUuhs.ttf) format('truetype');
        }
        @font-face {
            font-family: 'Open Sans Condensed';
            font-style: normal;
            font-weight: 300;
            src: local('Open Sans Condensed Light'), local('OpenSansCondensed-Light'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff1GhDuXMQg.ttf) format('truetype');
        }
        @font-face {
            font-family: 'Open Sans Condensed';
            font-style: normal;
            font-weight: 700;
            src: local('Open Sans Condensed Bold'), local('OpenSansCondensed-Bold'), url(https://fonts.gstatic.com/s/opensanscondensed/v12/z7NFdQDnbTkabZAIOl9il_O6KJj73e7Ff0GmDuXMQg.ttf) format('truetype');
        }
        * {
            box-sizing: border-box;
        }
        body {
            font-family: 'open sans', helvetica, arial, sans;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
        }
        .log-form {
            width: 40%;
            min-width: 320px;
            max-width: 475px;
            background: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
        }
        @media (max-width: 40em) {
            .log-form {
                width: 95%;
                position: relative;
                margin: 2.5% auto 0 auto;
                left: 0%;
                -webkit-transform: translate(0%, 0%);
                -moz-transform: translate(0%, 0%);
                -o-transform: translate(0%, 0%);
                -ms-transform: translate(0%, 0%);
                transform: translate(0%, 0%);
            }
        }
        .log-form form {
            display: block;
            width: 100%;
            padding: 2em;
        }
        .log-form h2 {
            color: white;
            text-align: center;
            font-family: 'open sans condensed';
            font-size: 1.35em;
            display: block;
            background: #2a2a2a;
            width: 100%;
            text-transform: uppercase;
            padding: 0.75em 1em 0.75em 1.5em;
            box-shadow: inset 0px 1px 1px rgba(255, 255, 255, 0.05);
            border: 1px solid #1d1d1d;
            margin: 0;
            font-weight: 200;
        }
        .log-form input {
            display: block;
            margin: auto auto;
            width: 100%;
            margin-bottom: 2em;
            padding: 0.5em 0;
            border: none;
            border-bottom: 1px solid #eaeaea;
            padding-bottom: 1.25em;
            color: #757575;
        }
        .log-form input:focus {
            outline: none;
        }
        .log-form .btn {
            display: inline-block;
            background: #1fb5bf;
            border: 1px solid #1ba0a9;
            padding: 0.5em 2em;
            color: white;
            margin-right: 0.5em;
            box-shadow: inset 0px 1px 0px rgba(255, 255, 255, 0.2);
        }
        .log-form .btn:hover {
            background: #23cad5;
        }
        .log-form .btn:active {
            background: #1fb5bf;
            box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.1);
        }
        .log-form .btn:focus {
            outline: none;
        }
    .error{
        color:red
    }

    </style>
    <!-- Styles -->
    {{--<link href="{{ asset('css/app.css') }}" rel="stylesheet">--}}
</head>
<body>
<div id="app">
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">

            <div class="log-form">
                <h2>CUBETIQ Login</h2>
                <form action="{{route('login')}}" method="post">
                    @csrf
                    @if($errors->has('msg'))
                    <small class="error">{{$errors->first('msg')}}</small>
                    @endif
                    <input type="email" title="username" placeholder="Email" name="email" value=""/>

                    <input type="password" title="username" placeholder="Password" name="password" value=""/>
                    <button type="submit" class="btn">Login</button>
                </form>

            </div>
        </div>
    </nav>

</div>
</body>
</html>