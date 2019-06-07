import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const requires=require.context('./Modules',false,/.*\.js/)
const modules=requires.keys().map(name=>requires(name))
    .reduce((modules,module)=>{
        return {...modules,[module.name]:module}
    },{})

const store=new Vuex.Store({
    modules
})

export default store
