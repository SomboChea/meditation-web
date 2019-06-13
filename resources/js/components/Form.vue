<template>
    <form class="form-v2" v-bind:style="{'height':`${height || '250px'}`}">

        <span class="items" v-for="(rule,key) in inputs">
            <div v-if="rule.type==='hidden'">
                <input :name="rule.name" :value="temp_data[key]" type="hidden">
            </div>

            <div v-else-if="rule.type==='button'">
                <a href="#" @click="button_click(rule.name || key)" :id="rule.id" :class="rule.class">{{rule.text}}</a>
            </div>

            <div v-else-if="rule.type==='icon'" class="p-1" v-bind:style="{'height':`${height || '250px'}`}" :key="temp_data[rule.column || key]">
                <!--<img :src="temp_data[rule.column || key]" alt="" class="img-fluid">-->
                <image-upload :src="temp_data[rule.column || key]" :name="rule.name || key"></image-upload>
            </div>

            <div v-else-if="rule.type==='label'">
                   <div class="form-group row">
                        <label class="col-4">{{rule.label || key}} :</label>
                        <label class="col-8"> {{temp_data[key]}}</label>
                   </div>
            </div>

            <div v-else-if="rule.type==='boolean'">
                 <div class="form-group">
                            <label class="col-xs-6">{{rule.label || key}}</label>
                            <div class="col-xs-6">
                                             <label
                                                     :class="{'label-active':temp_data[key]}"
                                                     @click="active_click(key,temp_data)"
                                                     class="label">
                    {{temp_data[key]?(rule.active || "active"):(rule.inactive || "inactive")}}
                            </label>
                            <input :name="rule.name" :value="temp_data[key]?1:0" type="hidden"/>
                            </div>
                        </div>
            </div>

            <div v-else-if="rule.type==='multiple'">
                <div class="form-group row align-items-end">
                    <label class="col-sm-4">{{rule.label || capitalize(key)}} :</label>
                    <div class="col-sm-8">
                        <select :name="key" class="form-control form-control-line">
                            <option :selected="index==temp_data[key]" :value="index" v-for="(text,index) in rule.texts">{{text}}</option>
                        </select>
                    </div>
                </div>
            </div>

            <div v-else-if="rule.type==='textarea'">
                  <label class="col-md-12">{{rule.label || capitalize(key)}}</label>
                            <div class="col-md-12">
                                <textarea :name="key"
                                          :placeholder="rule.placeholder"
                                          :readonly="rule.readonly"
                                          :rows="rule.rows"
                                          :value="temp_data[key]"
                                          class="form-control form-control-line"></textarea>
                            </div>
            </div>

            <div v-else>
                <div class="form-group">
                            <label class="col-xs-6">{{rule.label || capitalize(key)}}</label>
                            <div class="col-xs-6">
                                <input :name="key"
                                       :placeholder="rule.placeholder"
                                       :value="temp_data[key]"
                                       class="form-control form-control-line"
                                       type="text">
                            </div>
                        </div>
            </div>
        </span>

        <div class="footer text-right" v-if="show_save">
            <a @click="Save" class="btn btn-primary" href="#">Save</a>
        </div>
    </form>
    <!--        <div class="col-4">-->
    <!--            <h1>Image Area</h1>-->
    <!--        </div>-->

    <!--        <div class="col-4">-->
    <!--            <h1>Form Area</h1>-->
    <!--        </div>-->

</template>

<script>
    export default {
        name: "FormGenerateV2",
        comp_name: "form-generate",
        props: ['inputs', 'data', "height", "savebtn"],
        data: () => ({
            temp_data: {},
            show_save: true
        }),
        created() {
            this.temp_data = this.data;
            if (this.savebtn !== undefined)
                this.show_save = this.savebtn
        },
        methods: {
            button_click(name){
              this.$emit(`${name}_click`);
            },
            active_click(key, item) {
                this.$set(item, key, !item[key])
            },
            Save() {
                // console.log("temp",{...this.temp_data})
                this.$emit('OnSave', this.temp_data)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .form-v2 {
        /*background-color: #EDF5F9;*/
        /*border-left: var(--primary) 3px solid;*/
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        padding: 20px;
        overflow-x: scroll;

        & label:first-child {
            font-weight: bold;
        }

        .items {
            max-width: 33%;
        }


    }


    .label {
        background: gray;
        color: white;
        cursor: pointer;
        min-width: fit-content;
    }

    .label-active {
        background: #2CC3E9;
        color: white;
    }

    div.footer {
        position: absolute;
        right: 0;
        bottom: 0;
    }

    @media screen and (max-width: 768px) {
        .form-v2 {
            height: fit-content !important;
        }
        .items {
            max-width: 100% !important;
        }


        div.footer {
            display: block;
            position: relative;
        }
    }
</style>
