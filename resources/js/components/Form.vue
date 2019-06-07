<template>
    <form class="row">
        <div class="col-md-4 col-12" v-if="inputs.hasOwnProperty('icon')">
            <image-upload :src="temp_data[inputs.icon.column]"  :name="inputs.icon.name"/>
        </div>

        <div class="card col-md-8 col-12">
            <div class="card-body">
                <div class="form-horizontal form-material">

                    <div v-for="(item,key) in inputs">

                        <div v-if="item.type==='boolean'" class="form-group">
                            <label
                                    class="label"
                                    @click="active_click(key,temp_data)"
                                    :class="{'label-active':temp_data[key]}">{{temp_data[key]?(item.active || "active"):(item.inactive || "inactive")}}
                            </label>
                            <input type="hidden" :name="item.name" :value="temp_data[key]?1:0">
                        </div>

                        <div v-else-if="item.type==='textarea'" class="form-group">
                            <label class="col-md-12">{{item.label}}</label>
                            <div class="col-md-12">
                                <textarea :rows="item.rows"
                                          :placeholder="item.placeholder"
                                          :value="temp_data[key]"
                                          :name="key"
                                          class="form-control form-control-line"></textarea>
                            </div>
                        </div>

                        <div v-else-if="item.type==='multiple'">
                            <div class="form-group row align-items-end">
                                <label class="col-sm-4">{{item.label || capitalize(key)}} :</label>
                                <div class="col-sm-8">
                                    <select class="form-control form-control-line" :name="key">
                                        <option v-for="(text,index) in item.texts" :selected="index===1" :value="index">{{text}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div v-else-if="item.type==='textarea'" class="form-group">
                            <label class="col-md-12">{{item.label}}</label>
                            <div class="col-md-12">
                                <textarea :rows="item.rows"
                                          :placeholder="item.placeholder"
                                          :value="temp_data[key]"
                                          :name="key"
                                          class="form-control form-control-line"></textarea>
                            </div>
                        </div>

                        <div v-else-if="key==='icon'"></div>

                        <div v-else-if="item.type==='password'" class="form-group" >
                            <label class="col-md-12">{{item.label}}</label>
                            <div class="col-md-12">
                                <input class="form-control form-control-line"
                                       :value="temp_data[key]"
                                       :name="key"
                                       :placeholder="item.placeholder"
                                       type="password">
                            </div>
                        </div>

                        <div v-else class="form-group" >
                            <label class="col-md-12">{{item.label}}</label>
                            <div class="col-md-12">
                                <input class="form-control form-control-line"
                                       :value="temp_data[key]"
                                       :name="key"
                                       :placeholder="item.placeholder"
                                       type="text">
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </form>

</template>

<script>
    export default {
        name: "Form",
        comp_name:"form-generate",
        props:["inputs","data"],
        data:()=>({
            temp_data:null
        }),
        methods:{
            active_click(key,item){
                this.$set(item,key,!item[key])
            }
        },
        created() {
            this.temp_data={...this.data}
        }
    }
</script>

<style scoped>
    .label {
        background: gray;
        color: white;
        cursor: pointer;
    }

    .label-active{
        background: #2CC3E9;
        color: white;
    }

</style>
