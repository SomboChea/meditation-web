<template>
    <!-- Modal -->
    <div class="modal fade" id="MusicModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div
                            class="audio-container"
                            id="audio-container">

                        <audio id="player">
                            <source :src="dat.attachment" type="audio/mp3">
                        </audio>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "AudioComponent",
        comp_name: "audio-play",
        props: ['music'],
        data: () => ({
            dat: null,

            player:null,
            show:false
        }),
        created() {
            this.dat=this.music
        },
        mounted() {

            $("#MusicModal").on("hide.bs.modal", function () {
                // player.stop()
            })


            new Plyr('#player')
            // $("#MusicModal").modal("show")
            // $("#MusicModal").modal("hide")


            this.$root.$on("show_music", () => {
                $("#MusicModal").modal("show")
            })




        }

    }
</script>

<style scoped>
    .audio-container {
        position: relative;
        width: 100%;
    }

</style>