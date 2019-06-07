<template>
<div style="position: relative">
    <form-generate-v2
            :inputs="inputs"
            :data="formdata"
            height="250px"
            v-on:OnSave="submit"
            ref="form"

    />
</div>
</template>

<script>
    export default {
        name: "services",
        data: () => ({
            formdata: null,

            inputs:{
                // status:{
                //     type:"boolean",
                //     name:'status'
                // },
                title:{
                    type:"text",
                    placeholder:"Please Input Name",
                    label:"Title",
                },
                status:{
                    type:"multiple",
                    name:'status',
                    texts:['inActive',"Active"]
                },

                summary:{
                    type:"textarea",
                    placeholder: "Short Description",
                    label:"Summary",
                    rows:6
                },
                icon:{
                    type:'icon',
                    name:'icon',
                    column:'icon'
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
