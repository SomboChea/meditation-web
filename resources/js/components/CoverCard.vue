<template>
    <div class="card-cover">
        <div class="card">
            <div class="card-img-container trans-hori-center" v-bind:style="{'background-image':`url(${item.cover})`}">
                <!--            <img class="card-img-top img-fluid" :src="item.cover" alt="Card image cap">-->
            </div>
            <div class="card-body">
                <h5 class="card-title">{{item.name}}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Author : {{item.author}}</li>
                <li class="list-group-item">Genre : {{item.genre}}</li>
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
        data: () => ({
            media: null
        }),
        props: ['item'],
        created() {
            this.media = this.item
            console.log("media", this.media)
        },
        methods: {
            play() {
                console.log({...this.media})
                this.$emit('play_click', this.media)
            }
        }
    }
</script>

<style scoped>
    .card-img-container {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>