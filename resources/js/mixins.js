import Vue from 'vue'

let Mixins=Vue.mixin({
    methods:{
        capitalize(text){
            return text.charAt(0).toUpperCase()+text.slice(1)
        },
    },
})

export default Mixins
