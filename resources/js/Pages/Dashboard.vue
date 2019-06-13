<template>
    <div>
        <div class="upload-area">
            <input type="file" name="file" @change="gotfile" value="Browse" ref="fileinput">
            <a href="#" class="btn btn-primary" @click="upload" >Upload file</a>
            <img :src="img" alt="">
        </div>
    </div>
</template>

<script>
    import {ROOT_API} from '~/CONST'

    export default {
        name: "Dashboard",
        data:()=>({
            img:undefined
        }),
        methods:{
            gotfile(){
                console.log("file i sgot")
            },
            uploadfile(file){
                if(!this.checkfile(file)){
                    return 1
                }
                let data=new FormData();
                data.append('file',file)
                this.$axios.post(`${ROOT_API}/media`,data)
                    .then(res=>{
                        console.log('response',res)
                    })
            },

             async upload(){
                  let input=this.$refs.fileinput;
                  console.log(input.files)
                  for(let file of input.files){
                      let fr=new FileReader();

                      let result= await  fr.readAsDataURL(file)
                      console.log("fr",fr.result)
                      fr.onload=data=>{
                          this.img=data.target.result
                      }

                      this.img="";
                      this.uploadfile(file)
                  }
            },
            checkfile(file){
                return true;
            }
        }
    }
</script>

<style scoped>

</style>
