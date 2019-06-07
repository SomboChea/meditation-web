import Vue from 'vue'

import App from '~/Layouts/App'
import router from '~/Router'
import store from '~/Store'
import mixin from "./mixins"

import '~/Plugin'
import '~/components'
import axios from "axios";
import swal from "sweetalert2"

// window.$ = window.jQuery = require('jquery');

store.$axios=axios
Vue.prototype.$axios=axios
Vue.prototype.$swal=swal

Vue.prototype.$env_config=window.config
delete window["config"]

const vue=new Vue({
    mixin,
    ...App,
    router,
    store,
}).$mount("#app")

