import {notifications} from "../Type";
import {ROOT_API} from "../../const";

export const name="notifications"

export const state={
    notifications:null
}

export const getters={
    [notifications.notifications]:(state)=>state.notifications
}

export const actions={
    [notifications.refresh]({state}){
        this.$axios.get(`${ROOT_API}/notifications`)
            .then(res=>{
                let response=res.data
                state.notifications=response.notifications
            })
    }
}
