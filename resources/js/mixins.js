import Vue from 'vue'

let Mixins=Vue.mixin({
    methods:{
        capitalize(text){
            return text.charAt(0).toUpperCase()+text.slice(1)
        },

        file_to_image(file){
            return new Promise((resolve, reject) => {
                let imgsrc = new FileReader();
                imgsrc.onload = (result) => resolve(result.target.result)
                imgsrc.readAsDataURL(file)
            })
        }
    },
})

export default Mixins
