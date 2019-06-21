<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-light">
            <a href="#" class="navbar-brand"></a>
            <a href="#" class="btn btn-primary right" @click="upload_click">Upload</a>
        </nav>

        <div v-if="medias" class="row">
            <div v-for="(media,key) of medias" class="col-12 col-sm-6 col-md-3" :key="key">
                <card-cover
                        :item="media"
                        v-on:play_click="PlayMusic"
                ></card-cover>
            </div>
        </div>


        <div class="modal fade" id="UploadModal" tabindex="-1" role="dialog"
             aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Upload Image</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form-generate
                                ref="form"
                                :key="JSON.stringify(selected).length"
                                :inputs="add_rule"
                                :data="selected"
                                :savebtn="false"
                                v-on:browse_click="browse_click"
                        ></form-generate>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button @click="submit_info" type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

        <audio-component />
    </div>
</template>

<script>
    import {ROOT_API} from "~/CONST";
    import AudioComponent from "../components/AudioComponent";

    export default {
        name: "Storages",
        components: {AudioComponent},
        data: () => ({
            medias: null,
            selected: {},
            add_rule: {
                // browse:{
                //     type:"button",
                //     text:"Browse",
                //     class:"btn btn-primary"
                // },
                cover:{
                    type:"icon",
                    column:"cover"
                },
                name: {
                    type: "text",
                    text: "Name",
                },
                genre: {
                    type: "text",
                    text: "Genre"
                },
                author: {
                    type: "text",
                    text: "Author"
                }
            }
        }),
        created() {
            this.initialize()
        },
        methods: {
            initialize(){
                this.medias=[{"name":"សបថនងអនសនយជមយគ-nam bunnarath new song 2014 non stop collection this month.mp3","author":"nam","genre":"roman","cover":"/assets/images/no-image.png","attachment":"https://www.googleapis.com/download/storage/v1/b/mediation-edd90.appspot.com/o/Cw1zwGXWlcVtA3Y1dZ8hVS5ALI0GaZGvaOvQgc2g.mpga?generation=1561089229726254&alt=media"},{"name":"not alone","author":"show lo","genre":"roman","cover":"https://www.googleapis.com/download/storage/v1/b/mediation-edd90.appspot.com/o/PXjybszh18NsuBAFApUjcs3uafWLI9LQcSK07yOw.jpeg?generation=1561088459416778&alt=media","attachment":"https://www.googleapis.com/download/storage/v1/b/mediation-edd90.appspot.com/o/SV3HvYbUV4EODUHu4HiDE6f4uUPYOXLncezoDbew.mpga?generation=1561088459000052&alt=media"},{"author":"Nam bun","genre":"roman","cover":"https://www.googleapis.com/download/storage/v1/b/mediation-edd90.appspot.com/o/k3MVjoCNibIG4UXnFvEJjVsmp6h6iBF1EvJwmCGc.jpeg?generation=1561088304478784&alt=media","attachment":"https://www.googleapis.com/download/storage/v1/b/mediation-edd90.appspot.com/o/2QqVn47koWLKTSdiUVVPTvWpObbIQJ4P0l7uuVsi.mpga?generation=1561088303887273&alt=media","name":"[ Town VCD Vol 22 ] Nam Bunnarath - Nov Kbae Ke Yu Yu Tov Oun Nerng Plich Bong (Khmer MV) 2012.mp3"}];
                // this.$axios.get(`${ROOT_API}/medias`)
                //     .then(res => {
                //         this.medias = res.data
                //     })
            },
            PlayMusic(item){
                this.$root.$emit('SHOW_MUSIC_MODAL',item)
            },
            submit_info(){
              let form=this.$refs.form.$el
                let data=new FormData(form)
                data.append('attachment',this.selected.file)
                this.$axios.post(`${ROOT_API}/media`,data)
                    .then(res=>{
                        this.initialize()
                        $("#UploadModal").modal('hide')
                    })
            },
            browse_click(){
                let input = document.createElement('input')
                input.type = "file"

                input.onchange = this.cover_change

                input.click()
            },
            async cover_change(evt){
                let file = evt.path[0].files[0]
                this.file_to_image(file)
                    .then(result=>{
                        // console.log('image',result)
                        this.selected={
                            ...this.selected,
                            cover:result
                        }
                    })
            },
            upload_file_changed(evt) {
                let file = evt.path[0].files[0]

                this.selected={
                    name:file.name,
                    file,
                    size:file.size,
                    cover:"/assets/images/no-image.png"
                }
                $("#UploadModal").modal('show')
            },
            upload_click() {
                let input = document.createElement('input')
                input.type = "file"
                input.accept="audio/*"

                input.onchange = this.upload_file_changed

                input.click()
            }

        }
    }
</script>

<style scoped>

</style>
