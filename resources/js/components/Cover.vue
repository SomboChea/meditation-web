<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="card-title">{{media.name}}</div>
                <img :src="media.cover" alt="" class="img-fluid">
                <div>{{media.author}}</div>
                <div>{{media.genre}}</div>
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
        props: ['item'],
        created(){
            this.media=this.item
        }
    }
</script>

<style scoped>

</style>