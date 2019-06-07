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
        name: "requests",
        data: () => ({
            formdata: null,

            inputs:{


                ip:{
                    label:'IP',
                    type: 'label',
                },
                email:{
                    label:"Email",
                    type:'label',
                },
                status:{
                    type:"multiple",
                    name:'status',
                    texts:{2:'Pending',1:"Contacted"}
                },
                note:{
                    type:"textarea",
                    label:"Notes",
                    placeholder:"Note For this Request Demo",
                    rows:6
                },
                about:{
                    type:'textarea',
                    readonly:true,
                    rows:6,
                    label:'Message'
                }
            }
        }),
        props: ["row"],
        methods:{
            submit(){

                let requires=["note",'status']
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
