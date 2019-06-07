import Vue from 'vue'
import axios from 'axios'
import store from '~/Store'
import {other,auth} from "../Store/Type";
import Router from "./../Router"
import swal from "sweetalert2"
import Cookie from 'js-cookie'

axios.interceptors.request.use(request=>{
    let token=Cookie.get('token')
    if (token){
        request.headers['authorization']="Bearer "+token
    }
    // request.headers['Accept']="application/json"

    return request
})


axios.interceptors.response.use(res=>res,error=>{
    let response=error.response
    switch (error.response.status) {
        case 400:
        case 401:
            store.dispatch(auth.logout)
            break
        case 404:
            Router.push({name:"error404"})
            break;
        case 406:
            swal.fire({
                title:"Operation Failed",
                text:response.data,
                type:"warning"
            })
            break;
        case 422:
            let errors=response.data.errors
            let msgs=Object.keys(errors)
                .reduce((result,el)=>{
                    return {...result,[el]:errors[el][0]}
                },{})
            let msg_html=Object.keys(errors)
                .reduce((result,el)=>{
                    return result.concat(`<br />${errors[el][0]}<br /> `)
                },"")
            swal.fire({
                title:"Validate Failed",
                html:`<div class="error">${msg_html}</div>`,
                type:"warning"
            })
            break
        default:
            break;
    }
    return Promise.reject(error)
})
