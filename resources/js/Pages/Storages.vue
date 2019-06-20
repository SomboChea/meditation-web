<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-light">
            <a href="#" class="navbar-brand"></a>
            <a href="#" class="btn btn-primary right" @click="upload_click">Upload</a>
        </nav>

        <div v-if="medias" class="row">
            <div v-for="(media,key) of medias" class="col-12 col-sm-6 col-md-3" :key="key">
                <file-cover
                        :item="media"
                        v-on:play_click="PlayMusic"
                ></file-cover>
            </div>
        </div>


        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
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

        <audio-component
                :key="JSON.stringify(music)"
                :music="music"
        ></audio-component>
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
            music:{},
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
            this.$axios.get(`${ROOT_API}/medias`)
                .then(res => {
                    // console.log(res);
                    this.medias = res.data
                })
        },
        methods: {
            PlayMusic(item){
                this.music=item
                this.$root.$emit('show_music')
            },
            submit_info(){
              let form=this.$refs.form.$el
                let data=new FormData(form)
                data.append('attachment',this.selected.file)
                this.$axios.post(`${ROOT_API}/media`,data)
                    .then(res=>{
                        console.log("response",res)
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
                $(".modal").modal('show')
                console.log('file', this.selected)
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
