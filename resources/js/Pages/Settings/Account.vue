<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Change Password</h3>

                <form-generate
                        :data="{}"
                        :inputs="inputs"
                        ref="form"
                />

                <div class="card-footer">
                    <a @click="Save" class="btn btn-primary" href="#">Save</a>
                </div>

            </div>

            <!--                <div class="card-body">-->
            <!--                    <h3 class="card-title">Change Avatar</h3>-->
            <!--                    <form action="#" ref="avatarform">-->
            <!--                        <image-upload name="avatar" :src="user.avatar" v-on:afterChange="afterUploadAvatar"/>-->
            <!--                    </form>-->
            <!--                    <div class="card-footer" v-if="avatar_uploaded">-->
            <!--                        <a href="#" @click="updateAvatar" class="btn btn-primary">Update Avatar</a>-->
            <!--                    </div>-->
            <!--                </div>-->

            <div class="card-body">
                <h3 class="card-title">Change Profiles</h3>
                <!--                    <form action="#" ref="avatarform">-->
                <!--                        <image-upload name="avatar" :src="user.avatar" v-on:afterChange="afterUploadAvatar"/>-->
                <!--                    </form>-->
                <form-generate-v2 :data="user" :inputs="profiles_inputs" :savebtn="false" ref="profile_form"/>
                <div class="card-footer" v-if="true">
                    <a @click="UpdateProfile" class="btn btn-primary" href="#">Update Profile</a>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import {ROOT_API} from "../../const";
    import {auth} from "../../Store/Type";

    export default {
        name: "Account",
        computed: {
            user() {
                return this.$store.getters[auth.user]
            }
        },
        data: () => ({
            avatar_uploaded: false,
            inputs: {
                "old_password": {
                    type: "password",
                    label: "Old Password : "
                },
                "password": {
                    type: "password",
                    label: "New Password : "
                },
                "password_confirmation": {
                    type: "password",
                    label: "Confirm Password : "
                }
            },
            profiles_inputs: {
                "avatar": {
                    type: "icon",
                    name:'avatar'
                },
                "name": {
                    label: "Username"
                },
                "email": {
                    label: "Email"
                }
            }
        }),
        methods: {
            updateAvatar() {
                let form = this.$refs.avatarform
                // console.log()
                this.$axios
                    .patch(`${ROOT_API}/user`, {avatar: form.avatar.value})
                    .then(res => {
                        this.$store.dispatch(auth.fetch)
                        this.$swal.fire({
                            title: "Update Success",
                            type: "success"
                        })
                    })
            },
            UpdateProfile() {
                let form = this.$refs.profile_form.$el

                this.$axios
                    .patch(`${ROOT_API}/user`,
                        {
                            avatar: form.avatar.value,
                            name:form.name.value,
                            email:form.email.value
                        })
                    .then(res => {
                        // this.$store.dispatch(auth.fetch)
                        this.$swal.fire({
                            title: "Update Success",
                            text:"Please Login Again",
                            type: "success"
                        })
                            .then(()=>{
                                this.$store.dispatch(auth.logout)
                            })
                    })
            },
            Save() {
                let f = this.$refs.form.$el
                let formdata = Object.keys(this.inputs).reduce((result, el) => {
                    return {...result, [el]: f[el].value}
                }, {})
                this
                    .$axios
                    .put(`${ROOT_API}/user`, formdata)
                    .then(res => {   this.$swal.fire({
                        title: "Update Success",
                        text:"Please Login Again",
                        type: "success"
                    })
                        .then(()=>{
                            this.$store.dispatch(auth.logout)
                        })
                    })
            },
            afterUploadAvatar() {
                this.avatar_uploaded = true
            }
        }

    }
</script>

<style scoped>
    .card-title {
        border-top: solid 1px;
        border-bottom: solid 1px;
        padding: 10px;
    }

    .card-footer {
        text-align: right;
    }
</style>
