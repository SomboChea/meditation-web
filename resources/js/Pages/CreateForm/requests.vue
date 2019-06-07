<template>
    <div>
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{row?"Edit":"Create"}} {{row.firstname}}</h5>
            <button aria-label="Close" class="close" data-dismiss="modal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form-generate ref="form" :inputs="inputs" :data="formdata"/>
        </div>
        <div class="modal-footer">
            <button class="btn btn-secondary" data-dismiss="modal" type="button">Cancel</button>
            <button class="btn btn-primary" type="button" @click="submit">Save changes</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "requests",
        data: () => ({
            formdata: null,

            inputs:{

                note:{
                    type:"textarea",
                    label:"Note",
                    placeholder:"Note For this Request Demo",
                    rows:10
                }
            }
        }),
        props: ["row"],
        methods:{
            submit(){
                let requires=Object.keys(this.inputs)
                let form = this.$refs.form.$el

                let data=requires.reduce((result,el)=>{
                    return {...result,[el]:form[el].value}
                },{})

                this.$emit("OnSave",data)
            }
        },
        created() {
            this.formdata = this.row || {}
        }
    }
</script>

<style scoped>

</style>
