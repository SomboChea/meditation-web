<template>
    <div class="card-cover">

        <div class="card">
<!--            <div class="card-img-container trans-hori-center" v-bind:style="{'background-image':`url(${item.cover})`}">-->
<!--                &lt;!&ndash;            <img class="card-img-top img-fluid" :src="item.cover" alt="Card image cap">&ndash;&gt;-->
<!--            </div>-->
            <div class="card-header">
                <h4>{{item.author}}</h4>
                <h6>{{item.genre}}</h6>
            </div>

            <div class="card-img-container" :style="{'background-image':`url(${item.cover || $_env.DEFAULT_COVER_IMAGE})`}">
<!--                <img class="card-img" :src="item.cover" alt="Card image cap">-->
            </div>


            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>


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
            console.log("media", this.media)
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

    .button-container{
        bottom: 10px;
        position: absolute;
        display: flex;
        justify-content: space-evenly;
        width: 80%;
    }
</style>