<template>
    <div ref="image">

        <img
                v-if="temp_img"
                width="150"
                class="img-fluid"
                :src="temp_img"
                @click="ChooseImage"
                alt="">

        <img
                v-else
                @click="ChooseImage"
                class="rounded-circle img-fluid"
                width="150"
                :src="$_env['DEFAULT_NOIMAGE']"
                alt="">

        <!--<input type="hidden" name="img" :value="temp_img || '/assets/images/no-image.png'" :name="name">-->
        <br />
        <small>(click to change image)</small>
    </div>
</template>

<script>
    import {ROOT_API} from "~/CONST";

    export default {
        name: "Image",
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
                input.name=this.name
                input.style.display="none"
                input.accept="image/x-png,image/gif,image/jpeg"
                input.onchange=this.onChangelocal
                input.click()
            },
            onChangelocal(evt){
                let file=evt.target.files[0]
                this.file_to_image(file)
                    .then(result=>{
                        this.temp_img=result
                        this.$emit("afterChange")
                    })
                this.$refs.image.append(evt.target)

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
