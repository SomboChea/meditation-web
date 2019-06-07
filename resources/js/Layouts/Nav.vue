<template>
    <header class="topbar" data-navbarbg="skin5">
        <nav class="navbar top-navbar navbar-expand-md navbar-dark">
            <div class="navbar-header" data-logobg="skin5">
                <!-- ============================================================== -->
                <!-- Logo -->
                <!-- ============================================================== -->
                <router-link class="navbar-brand" :to="{name:'dashboard'}">
                    <!-- Logo icon -->
                    <b class="logo-icon">
                        <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                        <!-- Dark Logo icon -->
                        <img :src="$env_config.APP_LOGO" alt="homepage" class="dark-logo" />
                        <!-- Light Logo icon -->
                        <img :src="$env_config.APP_LOGO_BLACK" width="180" alt="homepage" class="light-logo" />
                    </b>
                    <!--End Logo icon -->
                    <!-- Logo text -->
                    <span class="logo-text">
<!--                        <h3>{{$env_config.APP_NAME}}</h3>-->
<!--                             &lt;!&ndash; dark Logo text &ndash;&gt;-->
<!--                             <img src="/assets/images/logo-text.png" alt="homepage" class="dark-logo" />-->
<!--                        &lt;!&ndash; Light Logo text &ndash;&gt;-->
<!--                             <img src="/assets/images/logo-light-text.png" class="light-logo" alt="homepage" />-->
                        </span>
                </router-link>
                <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== -->

                <div class="d-md-none navbar-right">
                    <!-- This is for the sidebar toggle which is visible on mobile only -->
                    <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i class="ti-menu ti-close" style="color: black;"></i></a>
                    <!--                    Notification Area-->

                        <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <!--                                <img src="/assets/images/users/1.jpg" alt="user" class="rounded-circle" width="31">-->
                            <div class="notification-area">
                                <label for="noti" v-if="count">
                                    <i class="mdi mdi-circle"></i>
                                </label>
                                <i id="noti" class="mdi mdi-bell-ring-outline" ></i>
                            </div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right user-dd animated" >
                            <a class="dropdown-item" href="javascript:void(0)" v-if="notifications" v-for="notification in notifications">
                                <i class="ti-user m-r-5 m-l-5"></i>
                                {{`${notification.companyname } - ${notification.firstname || ''} ${notification.lastname || ''}`}}
                            </a>

                            <a  v-if="count===0" class="dropdown-item" href="javascript:void(0)">
                                <h3>No new notification</h3>
                            </a>
                        </div>


                </div>



            </div>
            <!-- ============================================================== -->
            <!-- End Logo -->
            <!-- ============================================================== -->
            <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin5">
                <!-- ============================================================== -->
                <!-- toggle and nav items -->
                <!-- ============================================================== -->
                <ul class="navbar-nav float-left mr-auto">
                    <!-- ============================================================== -->
                    <!-- Search -->
                    <!-- ============================================================== -->
<!--                    <li class="nav-item search-box"> <a class="nav-link waves-effect waves-dark" href="javascript:void(0)"><i class="ti-search"></i></a>-->
<!--                        <form class="app-search position-absolute">-->
<!--                            <input type="text" class="form-control" placeholder="Search &amp; enter"> <a class="srh-btn"><i class="ti-close"></i></a>-->
<!--                        </form>-->
<!--                    </li>-->
                </ul>
                <!-- ============================================================== -->
                <!-- Right side toggle and nav items -->
                <!-- ============================================================== -->
                <ul class="navbar-nav float-right">
                    <!-- ============================================================== -->
                    <!-- User profile and search -->
                    <!-- ============================================================== -->
<!--                    <li class="nav-item dropdown">-->
<!--                        <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="/assets/images/users/1.jpg" alt="user" class="rounded-circle" width="31"></a>-->
<!--                        <div class="dropdown-menu dropdown-menu-right user-dd animated">-->
<!--                            <a class="dropdown-item" href="javascript:void(0)"><i class="ti-user m-r-5 m-l-5"></i> My Profile</a>-->
<!--                            <a class="dropdown-item" href="javascript:void(0)"><i class="ti-wallet m-r-5 m-l-5"></i> My Balance</a>-->
<!--                            <a class="dropdown-item" href="javascript:void(0)"><i class="ti-email m-r-5 m-l-5"></i> Inbox</a>-->
<!--                        </div>-->
<!--                    </li>-->

<!--                    Notification Area-->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
<!--                                <img src="/assets/images/users/1.jpg" alt="user" class="rounded-circle" width="31">-->
                                <div class="notification-area">
                                    <label for="noti" v-if="count">
                                        <i class="mdi mdi-circle"></i>
                                    </label>
                                    <i id="noti" class="mdi mdi-bell-ring-outline" ></i>
                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right user-dd animated" >
                                <a class="dropdown-item" href="javascript:void(0)" v-if="notifications" v-for="notification in notifications">
                                    <i class="ti-user m-r-5 m-l-5"></i>
                                    {{`${notification.companyname } - ${notification.firstname || ''} ${notification.lastname || ''}`}}
                                </a>

                                <a  v-if="count===0" class="dropdown-item" href="javascript:void(0)">
                                    <h5>No new notification</h5>
                                </a>
                            </div>


                        </li>
                    <!-- ============================================================== -->
                    <!-- User profile and search -->
                    <!-- ============================================================== -->
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    import {ROOT_API} from "../const";
    import {notifications,other} from "../Store/Type";

    export default {
        name: "Nav",
        data:()=>({
            // notifications:null,
            // count:0,
            interval:null
        }),
        mounted(){
            this.$nextTick(()=>{
                this.interval=setInterval(()=>{
                    if(this.$store.getters[other.token]){
                        this.$store.dispatch(notifications.refresh)
                    }
                },15000)
            })

        },
        computed:{
            notifications(){
                return this.$store.getters[notifications.notifications] || []
            },
            count(){
                return this.notifications.length
            }
        },
        created() {

            // this.sync_notification()
        },
        beforeDestroy(){
          clearInterval(this.interval)
        },
        methods:{
            sync_notification(){
                // this.$axios.get(`${ROOT_API}/notifications`)
                //     .then(res=>{
                //         let response=res.data
                //         this.notifications=response.notifications
                //         this.count=response.count
                //         console.log("resp",res)
                //     })
                this.$store.dispatch(notifications.refresh)
            }
        }
    }
</script>

<style lang="scss" scoped>
.notification-area{
    .mdi{
        color: var(--primary);
    }

    #noti {
        font-size: 20pt;
    }
    label{
        text-align: right;
        position: absolute;
        right: 3px;
        bottom: 5px;
        z-index: 1;
    }
    label span{
        background: red;
        color: white;
    }

}
.dropdown-item {
    background: var(--primary);

    h5{
        text-align: center;
    }
}
.navbar-right{
    display: flex;
    flex-direction: row;
    align-items: center;
}


</style>
