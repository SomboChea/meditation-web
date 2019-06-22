<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-light">
            <a href="#" class="navbar-brand"></a>
            <a href="#" class="btn btn-primary right" @click="upload_click">Upload</a>
        </nav>

        <nav class="navbar navbar-expand-lg navbar-dark bg-light filter-area">
            <a class="btn btn-block" data-toggle="collapse" href="#filter-area" role="button" aria-expanded="false"
               aria-controls="collapseExample"> Filter </a>

            <a class="btn btn-block" data-toggle="collapse" href="#sort-area" role="button" aria-expanded="false"
               aria-controls="collapseExample"> Sorting </a>
        </nav>

        <div class="collapse" id="sort-area">
            <div class="card card-body">
                <div class="form-group">
                    <label class="col-sm-12">Sort By</label>
                    <div class="col-sm-12">
                        <select class="form-control form-control-line" v-model="sorting.column">
                            <option value="name">Name</option>
                            <option value="genre">Genre</option>
                            <option value="author">Author</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-12">Use</label>
                    <div class="col-sm-12">
                        <select class="form-control form-control-line" v-model="sorting.type">
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>


            </div>

            <button class="btn btn-outline-primary" @click="checking('sorting')">Apply</button>
            <button class="btn btn-outline-primary" @click="checking('sorting',true)">Apply with Filter</button>
        </div>

        <div class="collapse" id="filter-area">
            <div class="card card-body">
                <div class="form-group">
                    <label class="col-sm-12">Search By</label>
                    <div class="col-sm-12">
                        <select class="form-control form-control-line" v-model="filter.column">
                            <option value="name">Name</option>
                            <option value="genre">Genre</option>
                            <option value="author">Author</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-md-12">
                        <input type="text" placeholder="Search Text" class="form-control form-control-line" v-model="filter.search">
                    </div>
                </div>

            </div>
            <button class="btn btn-outline-primary" @click="checking('filter')">Apply</button>

        </div>

        <div v-if="loading">
            <h1>Loading...</h1>
        </div>

        <div v-else class="container">

            <div class="row">
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3" v-if="isUploading">
                    <div class="uploading-container ">
                        <div class="lds-ripple trans-center-middle">
                            <div class="lds-pos"></div>
                            <div class="lds-pos"></div>
                        </div>
                    </div>
                    <h3 class="pos-absolute trans-center-middle">Uploading</h3>
                </div>

                <div v-for="(media,key) of filtered_data" class="col-12 col-sm-6 col-md-4 col-lg-3 mt-3" :key="key">
                    <card-cover
                            :item="media"
                            :uploading="false"
                            v-on:play_click="PlayMusic"
                    ></card-cover>
                </div>
            </div>


            <div class="modal fade" id="UploadModal" tabindex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
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
                                    :key="JSON.stringify(selected)"
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

            <audio-component/>
        </div>
    </div>
</template>

<script>
    import {ROOT_API} from "~/CONST";
    import AudioComponent from "../components/AudioComponent";

    export default {
        name: "Storages",
        components: {AudioComponent},
        data: () => ({
            medias: [],
            isUploading: false,
            loading: false,
            selected: {},
            filtered_data:[],

            // Sorting Area
            sorting: {
                type: "asc",
                column: "name"
            },
            // Filtering
            filter: {
                column: "",
                search: "",
            },

            add_rule: {
                // browse:{
                //     type:"button",
                //     text:"Browse",
                //     class:"btn btn-primary"
                // },

                cover: {
                    type: "icon",
                    column: "cover"
                },
                duration: {
                    type: "label",
                    label: "Duration"
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
                },

            }
        }),
        created() {
            this.initialize()
        },
        computed: {

        },
        methods: {
            sorted(data) {
                let temp = [...data]
                temp.sort((a, b) => {
                    if (this.sorting.type === 'asc')
                        return a[this.sorting.column] > b[this.sorting.column] ? 1 : -1
                    else {
                        return a[this.sorting.column] > b[this.sorting.column] ? -1 : 1
                    }
                })

                return temp
            },
            filtered(data) {
                let temp = [...data];
                let temp_filter=temp.filter((value, index, array) => {
                    return value[this.filter.column].includes(this.filter.search)
                })
                return temp_filter
            },

            checking(type, link=false) {
                let temp=[...this.medias]
                let result=[]
                if(link){
                    let t1=this.filtered(temp)
                    result=this.sorted(t1)
                }else{
                    if(type==='sorting'){
                        result=this.sorted(temp)
                    }else{
                        result=this.filtered(temp)
                    }
                }
                this.filtered_data=result
            },


            initialize() {
                this.loading = true
                this.$axios.get(`${ROOT_API}/medias`)
                    .then(res => {
                        this.medias = res.data
                        this.loading = false
                        this.filtered_data=res.data
                    })
            },
            PlayMusic(item) {
                this.$root.$emit('SHOW_MUSIC_MODAL', item)
            },
            submit_info() {
                this.isUploading = true
                $("#UploadModal").modal('hide')
                let form = this.$refs.form.$el
                let data = new FormData(form)
                data.append('attachment', this.selected.file)
                data.append('duration', this.selected.duration)

                this.$axios.post(`${ROOT_API}/media`, data)
                    .then(res => {
                        this.isUploading = false
                        this.initialize()
                        this.$swal.fire({
                            type: "success",
                            title: "Success",
                            text: "Upload Success !"
                        })
                    })
            },

            browse_click() {
                let input = document.createElement('input')
                input.type = "file"

                input.onchange = this.cover_change

                input.click()
            },
            async cover_change(evt) {
                let file = evt.path[0].files[0]
                this.file_to_image(file)
                    .then(result => {
                        // console.log('image',result)
                        this.selected = {
                            ...this.selected,
                            cover: result
                        }
                    })
            },
            async upload_file_changed(evt) {
                let file = evt.path[0].files[0]

                let src = await this.file_to_image(file)
                let au = new Audio(src)
                await new Promise((resolve, reject) => {
                    au.onloadeddata = () => {
                        console.log(au)
                        resolve(au)
                    }
                    au.onerror = () => {
                        console.log("error", au)
                        resolve(au)
                    }
                })
                console.log(au.duration)
                if (isNaN(au.duration)) {
                    this.$swal.fire({
                        title: "Audio Failed!",
                        text: "Not Support Type , Please Upload Again",
                        type: "warning"
                    })
                    return
                }
                // console.log($(au))

                this.selected = {
                    duration: au.duration,
                    name: file.name,
                    file,
                    size: file.size,
                    cover: "/assets/images/no-image.png"
                }
                $("#UploadModal").modal('show')
            },
            upload_click() {
                let input = document.createElement('input')
                // input.onchange = this.upload_file_changed
                let vm = this
                input.type = "file"
                input.accept = "audio/*"
                input.onchange = (evt) => {
                    vm.upload_file_changed(evt)
                }

                input.click()
            }

        },
        mounted() {
            console.log("sorting", this.sorting)
            $(".collapse").on("show.bs.collapse",()=>{
                console.log("collapse togge")
                $(".collapse").collapse('hide')
            })
        }
    }
</script>

<style scoped>
    .container {
        margin-left: 0;
    }

    .uploading-container {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, .15);
        padding: 10px;
        height: 100%;
    }
</style>
