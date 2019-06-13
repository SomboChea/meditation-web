@php
    $config=[
    "APP_NAME"=>env("APP_NAME"),
    "APP_LOGO_LIGHT"=>env("APP_LOGO"),
    "APP_LOGO_BLACK"=>env("APP_LOGO_BLACK"),
    "APP_URL"=>env("APP_URL"),
    "DEFAULT_NOIMAGE"=>env("DEFAULT_NOIMAGE")

    ]

@endphp

        <!DOCTYPE html>
<html dir="ltr" lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
    <meta name="csrf-token" content="{{ csrf_token() }}">


    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/logo-icon.png">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css">
    <title>{{env("APP_NAME")}}</title>

{{--    Data Table--}}
{{--    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">--}}

    @include("components.styles")


</head>

<body>
    <div class="preloader">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>
    <div id="app">

    </div>
    <script>
        window.config={!! json_encode($config) !!}
    </script>

    @include('components.scripts')
</body>

</html>
