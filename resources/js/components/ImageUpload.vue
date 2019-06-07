<template>
    <div>

        <img
                v-if="temp_img"
                width="150"
                :src="temp_img"
                @click="ChooseImage"
                alt="">

        <img
                v-else
                @click="ChooseImage"
                class="rounded-circle"
                width="150"
                src="/assets/images/no-image.png"
                alt="">
        
        <input type="hidden" name="img" :value="temp_img || '/assets/images/no-image.png'" :name="name">
        <br />
        <small>(click to change image)</small>
    </div>
</template>

<script>
    import {ROOT_API} from "../const";

    export default {
        name: "ImageUpload",
        comp_name:"image-upload",
        props:['src',"name"],
        data:()=>({
           temp_img:null
        }),
        created(){
            this.temp_img=this.src
        },
        methods:{
            ChooseImage(){
                let input=document.createElement("input")
                input.type="file"
                input.name="file"
                input.accept="image/x-png,image/gif,image/jpeg"
                input.onchange=this.onChange
                input.click()
            },
            onChange(evt){
                let formData=new FormData()
                formData.append("file",evt.target.files[0])
                this.$axios
                    .post(`${ROOT_API}/media/save`,formData)
                    .then(res=>{
                        this.temp_img=res.data.location
                        this.$emit("afterChange")
                    })
            }
        }
    }
</script>

<style scoped>

</style>
