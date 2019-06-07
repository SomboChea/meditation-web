<template>
    <div style="position: relative">
        <form-generate-v2
                :inputs="inputs"
                :data="formdata"
                height="260px"
                v-on:OnSave="submit"
                ref="form"
        />
    </div>
</template>

<script>
    export default {
        name: "solutions",
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

                icon:{
                    type:'icon',

                    column:'icon',
                    name:'icon'
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
