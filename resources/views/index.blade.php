@php
$config=[
"APP_NAME"=>env("APP_NAME"),
"APP_LOGO"=>env("APP_LOGO"),
"APP_LOGO_BLACK"=>env("APP_LOGO_BLACK")

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


    <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css">
    <title>{{env("APP_NAME")}}</title>

{{--    Data Table--}}
{{--    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">--}}
    <!-- Custom CSS -->
    <link href="/css/app.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>


    <![endif]-->
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

<!-- ============================================================== -->
<!-- ============================================================== -->
<!-- All Jquery -->
<!-- ============================================================== -->
<script src="/assets/libs/jquery/dist/jquery.min.js"></script>
    {{--    Data Table--}}
{{--    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>--}}

    <!-- Bootstrap tether Core JavaScript -->
<script src="/assets/libs/popper.js/dist/umd/popper.min.js"></script>
<script src="/assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="/assets/js/app-style-switcher.js"></script>
<!--Wave Effects -->
<script src="/assets/js/waves.js"></script>
<!--Menu sidebar -->
<script src="/assets/js/sidebarmenu.js"></script>
{{--    <script src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>--}}
<script src="/js/manifest.js"></script>
<script src="/js/vendor.js"></script>
<script src="/js/app.js"></script>
<!--Custom JavaScript -->
{{--<script src="../../dist/js/custom.js"></script>--}}
</body>

</html>
