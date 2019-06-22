<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="card-title">{{media.name}}</div>
                <img :src="media.cover" alt="" class="img-fluid">
                <div>{{media.author}}</div>
                <div>{{media.genre}}</div>
                <div>
                    <a :href="media.attachment" target="_blank" class="btn btn-primary">Download Attachment</a>
                </div>
                <a href="#" class="btn btn-primary" @click="Playmusic">Play</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cover",
        comp_name: "file-cover",
        data:()=>({
            media:null
        }),
        props: ['item',"uploading"],
        created(){
            this.media=this.item
            console.log("media",this.media)
        },
        methods:{
            Playmusic(){
                console.log({...this.media})
                this.$emit('play_click',this.media)

            }
        }
    }
</script>

<style scoped>

</style>
