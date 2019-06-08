<template>
    <div>
        <!-- ============================================================== -->
        <!-- Preloader - style you can find in spinners.css -->
        <!-- ============================================================== -->


        <!--        When Login Success-->
        <loggedin-content v-if="is_login" />

<!--        When Not Login -->
        <Login v-else/>



    </div>
</template>

<script>

    import LoggedInContent from '~/Layouts/Content'
    import Login from "~/Pages/Login";
    import {auth} from "~/Store/Type"

    export default {
        name: "App",
        components:{Login,"loggedin-content":LoggedInContent},
        computed: {
            is_login() {
                return this.$store.getters[auth.is_login];
            }
        },

        async created(){
            await this.$store.dispatch(auth.fetch);
        },
        mounted() {
            // console.log("mounted")
            $(".preloader").fadeOut();
        }
    }
</script>

<style scoped>


</style>
