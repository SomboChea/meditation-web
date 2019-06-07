<template>
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div data-boxed-layout="full" data-header-position="absolute" data-layout="vertical" data-navbarbg="skin5"
         data-sidebar-position="absolute" data-sidebartype="full" id="main-wrapper">
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
        <Nav/>
        <!-- ============================================================== -->
        <!-- End Topbar header -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <Side/>
        <!-- ============================================================== -->
        <!-- End Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper  -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
            <!-- ============================================================== -->
            <!-- Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <div class="page-breadcrumb">
                <div class="row align-items-center">
                    <div class="col-5">
                        <h4 class="page-title">{{(title || $route.params.type || $route.name || "").toUpperCase()
                            }}</h4>
                        <!--                        <div class="d-flex align-items-center">-->
                        <!--                            <nav aria-label="breadcrumb">-->
                        <!--                                <ol class="breadcrumb">-->
                        <!--                                    <li class="breadcrumb-item"><a href="#">Home</a></li>-->
                        <!--                                    <li class="breadcrumb-item active" aria-current="page">Library</li>-->
                        <!--                                </ol>-->
                        <!--                            </nav>-->
                        <!--                        </div>-->
                    </div>
                    <div class="col-7">
                        <!--                        <div class="text-right upgrade-btn">-->
                        <!--                            <a href="https://wrappixel.com/templates/xtremeadmin/" class="btn btn-danger text-white" target="_blank">Upgrade to Pro</a>-->
                        <!--                        </div>-->
                    </div>
                </div>
            </div>
            <!-- ============================================================== -->
            <!-- End Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <div class="container-fluid">
                <!-- ============================================================== -->
                <!-- Start Page Content -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-12">
                        <!--                            <h1>Hello World</h1>-->
                        <div class="card" style="min-width: 700px">
                            <div class="card-body">
                                <router-view :key="$route.name + $route.params.type" :title="title"/>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- End PAge Content -->
                <!-- ============================================================== -->
                <!-- ============================================================== -->
                <!-- Right sidebar -->
                <!-- ============================================================== -->
                <!-- .right-sidebar -->
                <!-- ============================================================== -->
                <!-- End Right sidebar -->
                <!-- ============================================================== -->
            </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- footer -->
            <!-- ============================================================== -->
            <Footer/>
            <!-- ============================================================== -->
            <!-- End footer -->
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Page wrapper  -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
</template>

<script>
    import Nav from "~/Layouts/Nav"
    import Side from "~/Layouts/Side"
    import Footer from '~/Layouts/Footer'
    import {other} from "../Store/Type";

    export default {
        name: "Content",
        components: {Side, Nav, Footer},
        data: () => ({}),
        mounted() {
            // this is for close icon when navigation open in mobile view
            $(".nav-toggler").on('click', function () {
                $("#main-wrapper").toggleClass("show-sidebar");
                $(".nav-toggler i").toggleClass("ti-menu");
            });
            $(".search-box a, .search-box .app-search .srh-btn").on('click', function () {
                $(".app-search").toggle(200);
                $(".app-search input").focus();
            });
            // ==============================================================
            // Resize all elements
            // ==============================================================
            $("body, .page-wrapper").trigger("resize");
            $(".page-wrapper").delay(20).show();

            //****************************
            /* This is for the mini-sidebar if width is less then 1170*/
            //****************************
            var setsidebartype = function () {
                var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
                if (width < 1170) {
                    $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
                } else {
                    $("#main-wrapper").attr("data-sidebartype", "full");
                }
            };
            $(window).ready(setsidebartype);
            $(window).on("resize", setsidebartype);
        },
        computed: {
            title() {
                return this.$store.getters[other.title]
            }
        },
        created() {

        }
    }
</script>

<style scoped>
    .page-wrapper {
        overflow: scroll;
        max-height: 90vh;
    }
</style>
