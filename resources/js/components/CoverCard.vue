<template>
    <div class="card-cover">
    <div class="card" >
        <div class="card-img">
            <img class="card-img-top" :src="item.cover" alt="Card image cap">
        </div>
        <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Author : {{item.author}}</li>
            <li class="list-group-item">Genre  : {{item.genre}}</li>
        </ul>

        <div class="card-footer">
            <a :href="item.attachment" class="btn btn-primary">Download</a>
            <a href="#" @click="play" class="btn btn-primary">Play</a>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "CoverCard",
        comp_name: "card-cover",
        data:()=>({
            media:null
        }),
        props: ['item'],
        created(){
            this.media=this.item
            console.log("media",this.media)
        },
        methods:{
            play(){
                console.log({...this.media})
                this.$emit('play_click',this.media)
            }
        }
    }
</script>

<style scoped>
.card-cover{
}
</style>