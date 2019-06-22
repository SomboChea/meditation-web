<template>
    <div class="card-cover">

        <div class="card">
            <div class="card-header">
                <h4>{{item.author || "Unknown"}}</h4>
                <h6>{{item.genre || "Unknown"}}</h6>
            </div>

            <div class="card-img-container" :style="{'background-image':`url(${item.cover || $_env.DEFAULT_COVER_IMAGE})`}"></div>

            <div class="card-body">
                <h5 class="card-title">{{item.name }}</h5>
                <h5 class="card-title text-right " style="color: green">{{item.duration || "0.00"}} s</h5>
            </div>


        </div>
        <div class="button-container">
            <button class="btn btn-circle btn-secondary" @click="DownloadMusic"><i class="mdi mdi-download"></i></button>
            <button class="btn btn-circle btn-secondary" @click="PlayMusic"><i class="mdi mdi-play" ></i></button>
            <button class="btn btn-circle btn-secondary" @click="ShareMusic"><i class="mdi mdi-share" ></i></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CoverCard",
        comp_name: "card-cover",
        data: () => ({
            media: null
        }),
        props: ['item'],
        created() {
            this.media = this.item
            this.media.author=this.media.author || "Unknown author"
            this.media.genre=this.media.genre || "Unknown genre"

        },
        methods: {
            PlayMusic() {
                this.$emit('play_click', this.media)
            },
            DownloadMusic(){
                let name=this.media.name
                let extension=this.media.extension || this.$_env.DEFAULT_EXTENSION
                let link=this.attachment

                let element=document.createElement('a')
                element.href=link
                element.target="_blank"
                element.download=name+"."+extension
                element.click()
            },
            ShareMusic(){
                alert("no implement")
            }
        }
    }
</script>

<style scoped>
    .card-cover{

        padding: 10px;
        box-shadow: 0 0 10px 0px rgba(0,0,0,.15);
        height: 100%;
    }

    .card-img-container {
        height: 150px;
        text-align: center;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .card-img{
        height: 100%;
        width: auto;
    }
    .card-header{
        min-height: 10px;
    }

    .button-container{
        bottom: 10px;
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        width: 80%;
    }
</style>