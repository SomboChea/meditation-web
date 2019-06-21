<template>
    <!-- Modal -->
    <div class="modal fade" id="MusicModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
         aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">{{dat.name }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="audio-container" id="audio-container">

                        <audio id="player">
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
    import Plyr from 'plyr'

    export default {
        name: "AudioComponent",
        comp_name: "audio-play",
        props: ['music'],
        data: () => ({
            dat: {},
        }),
        created() {
        },
        mounted() {
            let vm=this

            let player=new Plyr("#player")

            this.$root.$on("SHOW_MUSIC_MODAL", (music) => {
                vm.dat = music

                $("#MusicModal").modal('show')

                player.media.src=music.attachment
            })

            $("#MusicModal").on("hide.bs.modal",function () {
                console.log("hide")
                player.stop()
            })
        }

    }
</script>

<style scoped lang="scss">

    .audio-container {
        position: relative;
        width: 100%;
    }

</style>