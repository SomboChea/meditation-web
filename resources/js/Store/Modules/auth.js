import {auth,other} from '~/Store/Type'
import {ROOT_API} from "~/CONST";
import axios from "axios"
import Cookies from "js-cookie"
import store from '~/Store'


export const name="auth"

export const state={
    user:null,
    islogin:false
}

export const getters={
    [auth.user](state){
        return state.user
    },
    [auth.is_login]:state=>state.islogin
}

export const actions={
    async [auth.login]({state},{email,password}){
        store.dispatch(other.start_loading)
        await this.$axios.post(`${ROOT_API}/login`,{email,password})
            .then(res=>{
                state.islogin=true
                state.user=res.data.data
                Cookies.set('token',res.data.token)
                store.dispatch(other.close_loading)
            })
    },

    [auth.fetch]({state}){
        store.dispatch(other.start_loading)
        let token = Cookies.get("token")
        if(!token){
            store.dispatch(other.close_loading)
            return
        }
        return this.$axios.post(`${ROOT_API}/user`)
            .then(res=>{
                state.islogin=true
                state.user=res.data.data
                store.dispatch(other.close_loading)
            })
    },
    [auth.logout]({state}) {
        state.user = null
        state.islogin = false
        this.$axios.post(`${ROOT_API}/logout`)
        Cookies.remove("token")
    }
}
