import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '~/Router/routes'
import store from '~/Store'
import {notifications,other} from "../Store/Type";

Vue.use(VueRouter)

function before(to,from,next){
    store.dispatch(notifications.refresh)
    next()
}

function after(to,from){
    $("#main-wrapper").toggleClass("show-sidebar");
    $(".nav-toggler i").toggleClass("ti-menu");

    let title=to.params.type
    if(title==='reasons'){
        title="Features"
    }
    store.dispatch(other.set_title,title)
}

const router= new VueRouter({
    mode:'history',
    routes,
})

router.beforeEach(before)
router.afterEach(after)

export  default  router;
