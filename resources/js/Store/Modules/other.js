import Cookies from 'js-cookie'
import {other} from "../Type";


export const name='other'

export const state={
    loading_count:0,
    title:null
}

export const getters={

    [other.token](state) {
        return Cookies.get('token') || null
    },
    [other.title]:(state)=>state.title
}

export const actions={
    [other.start_loading]({}) {
        state.loading_count++
        $(".preloader").fadeIn();
    },
    [other.close_loading]({state},force=false){
        // if force close loading
        if(force){
            state.loading_count=0
            $(".preloader").fadeOut();
        }
        // If not force close
        else{
            state.loading_count--
            if(state.loading_count===0){
                $(".preloader").fadeOut();
            }
        }
    },
    [other.set_title]({state},title){
        state.title=title
    }
}
