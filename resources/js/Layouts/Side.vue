<template>
    <aside class="left-sidebar" data-sidebarbg="skin6">
        <!-- Sidebar scroll-->
        <div class="scroll-sidebar">
            <!-- Sidebar navigation-->
            <nav class="sidebar-nav">
                <ul id="sidebarnav">
                    <!-- User Profile-->
                    <li>
                        <!-- User Profile-->
                        <div class="user-profile d-flex no-block dropdown m-t-20">
                            <div class="user-pic">
                                <Avatar v-if="user.photoUrl" :src="user.photoUrl" alt="users" class="rounded-circle" width="40" />
<!--                                <Avatar src="/assets/images/users/1.jpg" alt="users" class="rounded-circle" width="40" />-->
                                <Avatar v-else :username="user.displayName || 'U S E R'"/>
                            </div>
                            <div class="user-content hide-menu m-l-10">
                                <a href="javascript:void(0)" class="" id="Userdd" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <h5 class="m-b-0 user-name gt-medium">{{user.displayName}}
                                        <i class="fa fa-angle-down" ></i></h5>
                                    <span class="op-5 user-email gt">{{user.email}}</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="Userdd">
<!--                                    <a class="dropdown-item" href="javascript:void(0)"><i class="ti-user m-r-5 m-l-5"></i> My Profile</a>-->
<!--                                    <a class="dropdown-item" href="javascript:void(0)"><i class="ti-wallet m-r-5 m-l-5"></i> My Balance</a>-->
<!--                                    <a class="dropdown-item" href="javascript:void(0)"><i class="ti-email m-r-5 m-l-5"></i> Inbox</a>-->
<!--                                    <div class="dropdown-divider"></div>-->
                                    <router-link :to="{name:'setting.index'}" class="dropdown-item" href="javascript:void(0)">
                                        <i class="ti-settings m-r-5 m-l-5"></i> Account Setting
                                    </router-link>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" @click="logout" href="javascript:void(0)"><i class="fa fa-power-off m-r-5 m-l-5"></i> Logout</a>
                                </div>
                            </div>
                        </div>
                        <!-- End User Profile-->
                    </li>
                     <!-- User Profile-->

                    <li class="p-15 mt-2"  v-for="item in items" v-if="!item.type">
                        <router-link
                                exact
                                class="btn btn-block no-block d-flex align-items-center"
                                :to="item.to"
                                style="color: #707070;"
                                aria-expanded="false">
                            <i class="mdi" :class="item.icon_class"></i>
                            <span class="hide-menu ml-3">{{item.text}}</span>
                        </router-link>
                    </li>


<!--                    <li class="sidebar-item" v-for="item in items" v-if="!item.type">-->
<!--                        <router-link-->
<!--                                exact-->
<!--                                class="sidebar-link waves-effect waves-dark sidebar-link"-->
<!--                                :to="item.to"-->
<!--                                aria-expanded="false">-->
<!--                            <i class="mdi" :class="item.icon_class"></i>-->
<!--                            <span class="hide-menu">{{item.text}}</span>-->
<!--                        </router-link>-->
<!--                    </li>-->

                </ul>

            </nav>
            <!-- End Sidebar navigation -->
        </div>
        <!-- End Sidebar scroll-->
    </aside>
</template>

<script>
    import {auth} from "../Store/Type";
    import Avatar from "vue-avatar"

    export default {
        name: "Side",
        components:{Avatar},
        computed:{
            user(){
                return this.$store.getters[auth.user]
            }
        },
        methods:{
          logout(){
              this.$store.dispatch(auth.logout)
          }
        },
        data:()=>({
            items:[
                {
                    text:"Dashboard",
                    to:{name:"dashboard"},
                    icon_class:"mdi-view-dashboard-outline"
                },
                {
                    text:"Storages",
                    to:{name:"storages"},
                    icon_class:"mdi-view-dashboard-outline"
                },



            ]
        }),
    }
</script>

<style scoped>
    .btn{
        color: black;
        font-size: 1rem;
    }
    .router-link-active{
        color: white !important;
        background: var(--primary);
    }

    #Userdd{
        line-height: 2.5;
    }


</style>
