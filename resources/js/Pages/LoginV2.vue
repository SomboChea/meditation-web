<template>
    <div class="limiter">
        <div class="container-login100">
            <div class="wrap-login100">
                <form class="login100-form validate-form">
                      <span class="login100-form-title p-b-48">
                        <img :src="$env_config.APP_LOGO_BLACK" width="180" alt="">
                          <!--						<i class="zmdi zmdi-font"></i>-->
					</span>
<!--					<span class="login100-form-title p-b-26">-->
<!--						Welcome-->
<!--					</span>-->


                    <div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                        <label for="email">Email</label>
                        <input class="input100"  id="email" type="text" name="email" v-model="form.email">
                    </div>

                    <div class="wrap-input100 validate-input" data-validate="Enter password">
<!--						<span class="btn-show-pass">-->
<!--							<i class="zmdi zmdi-eye"></i>-->
<!--						</span>-->
                        <label for="password">Password</label>
                        <input class="input100" id="password" type="password" name="pass" v-model="form.password">
                    </div>

                    <div class="container-login100-form-btn">
                        <div class="wrap-login100-form-btn">
                            <div class="login100-form-bgbtn"></div>
                            <button class="login100-form-btn" type="button" @click="submit">
                                Login
                            </button>
                        </div>
                    </div>

<!--                    <div class="text-center p-t-115">-->
<!--						<span class="txt1">-->
<!--							Don’t have an account?-->
<!--						</span>-->

<!--                        <a class="txt2" href="#">-->
<!--                            Sign Up-->
<!--                        </a>-->
<!--                    </div>-->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions,mapGetters} from "vuex"
    import {auth} from "../Store/Type";

    export default {
        name: "LoginV2",
        data:()=>({
            form:{
                email:"",
                password:"",
                // email:"admin@gmail.com",
                // password:"123456"
            }
        }),
        methods:{
            ...mapActions({
                "login":auth.login
            }),
            submit(){
                this.login(this.form)
            }
        },
        mounted() {
            let vm=this;
            (function ($) {
                "use strict";


                /*==================================================================
                [ Focus input ]*/
                $('.input100').each(function(){
                    $(this).on('blur', function(){
                        if($(this).val().trim() != "") {
                            $(this).addClass('has-val');
                        }
                        else {
                            $(this).removeClass('has-val');
                        }
                    })
                })


                /*==================================================================
                [ Validate ]*/
                var input = $('.validate-input .input100');

                $('.validate-form').on('submit',function(){
                    var check = true;

                    for(var i=0; i<input.length; i++) {
                        if(validate(input[i]) == false){
                            showValidate(input[i]);
                            check=false;
                        }
                    }

                    return check;
                });


                $('.validate-form .input100').each(function(){
                    $(this).focus(function(){
                        hideValidate(this);
                    });
                });

                function validate (input) {
                    if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
                        if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                            return false;
                        }
                    }
                    else {
                        if($(input).val().trim() == ''){
                            return false;
                        }
                    }
                }

                function showValidate(input) {
                    var thisAlert = $(input).parent();

                    $(thisAlert).addClass('alert-validate');
                }

                function hideValidate(input) {
                    var thisAlert = $(input).parent();

                    $(thisAlert).removeClass('alert-validate');
                }

                /*==================================================================
                [ Show pass ]*/
                var showPass = 0;
                $('.btn-show-pass').on('click', function(){
                    if(showPass == 0) {
                        $(this).next('input').attr('type','text');
                        $(this).find('i').removeClass('zmdi-eye');
                        $(this).find('i').addClass('zmdi-eye-off');
                        showPass = 1;
                    }
                    else {
                        $(this).next('input').attr('type','password');
                        $(this).find('i').addClass('zmdi-eye');
                        $(this).find('i').removeClass('zmdi-eye-off');
                        showPass = 0;
                    }


                });


            })(jQuery);

            $(".login100-form").find('input').keypress(function(e) {
                // Enter pressed?
                if(e.which === 10 || e.which === 13) {
                    vm.login(vm.form)
                }
            });



        }
    }
</script>

<style scoped>
    @import "../../sass/LoginV2/util.css";
    @import "../../sass/LoginV2/main.css";

    .has-val.input100 + .focus-input100::after{
        top: -25px;
    }

    .alert-validate::after{
        content: none;
    }
</style>
