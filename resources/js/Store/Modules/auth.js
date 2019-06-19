import {auth} from '~/Store/Type'
import {ROOT_API} from "~/CONST";
import axios from "axios"
import Cookies from "js-cookie"


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
        console.log("login")
        await this.$axios.post(`${ROOT_API}/login`,{email,password})
            .then(res=>{
                state.islogin=true
                state.user=res.data.data
                console.log(res)
            })
    },

    [auth.fetch]({state}){
        let token = Cookies.get("token")
        if(!token){
            return
        }
        return this.$axios.post(`${ROOT_API}/user`)
            .then(res=>{
                state.islogin=true
                state.user=res.data.data
                console.log(res)
            })
    },
    [auth.logout]({state}) {
        state.user = null
        state.islogin = false
        this.$axios.post(`${ROOT_API}/logout`)
        Cookies.remove("token")
    }
}
