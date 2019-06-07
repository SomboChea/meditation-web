<template>
    <div>
        <!--        <data-table-->
        <!--                :columns="columns"-->
        <!--                :creatable="actions.creatable"-->
        <!--                :deletable="actions.deletable"-->
        <!--                :editable="actions.editable"-->
        <!--                :rows="rows"-->
        <!--                :rules="rules"-->
        <!--                v-on:OnActiveChange="row_activechange"-->
        <!--                v-on:OnCreate="row_create"-->
        <!--                v-on:OnDelete="row_delete"-->
        <!--                v-on:OnEdit="row_edit"-->
        <!--        />-->

            <td id="fakerow" colspan="100" v-show="false">
<!--                <h1>Hello World</h1> -->
                <component  v-bind:is="edit_component" :row="row"/>
<!--                <component :is="edit_component" />-->
            </td>

        <button aria-controls="collapseExample" aria-expanded="false" class="btn btn-primary"
                data-target="#collapseExample"
                data-toggle="collapse" type="button">
            Button with data-target
        </button>
        <div class="table-responsive">
            <div class="btn-create text-right p-3" v-if="creatable">
                <a @click="create_click" class="btn btn-primary" href="#">Create</a>
            </div>

            <table class="table v-middle" id="table-data" v-if="rows" >

                <thead>
                    <tr class="bg-light">
                        <th class="border-top-0"
                            v-for="column in columns" v-if="headers(column).type!=='hidden'">
                            {{headers(column).text || capitalize(column)}}
                        </th>


                        <th v-if="deletable || editable">
                            Action
                        </th>
                    </tr>


                </thead>

                <tbody>
                    <tr :key="row_index" v-for="(row,row_index) in rows" :id="`row-${row_index}`">
                        <td v-for="column in columns" v-if="headers(column).type!=='hidden'">

                            <div class="d-flex align-items-center" v-if="headers(column).type==='icon'">
                                <div class="m-r-10">
                                    <img :src="row[column]" alt="" width="50">
                                </div>
                            </div>

                            <div v-else-if="headers(column).type==='avatar'">
                                <Avatar :src="row[column]" v-if="row[column]"/>
                                <Avatar :username="row[headers(column).name]" v-else/>


                            </div>

                            <label
                                    :class="{'label-active':row[column]}"
                                    @click="active_click(column,row)"
                                    class="label"
                                    v-else-if="headers(column).type==='boolean'">{{row[column]?(headers(column).active
                                ||
                                'active'):(headers(column).inactive || "inactive")}}
                            </label>

                            <h5 class="m-b-0" v-else-if="headers(column).type==='bold'">{{row[column]}}</h5>

                            <span v-else>{{row[column]}}</span>

                        </td>

                        <td v-if="editable || deletable">
                            <i @click="edit_click(row,row_index)" class="mdi mdi-pencil" v-if="editable"></i>
                            <i @click="delete_click(row)" class="mdi mdi-delete" v-if="deletable"></i>
                        </td>


                    </tr>

                    <tr v-if="!rows.length">
                        <td colspan="100">
                            <h3 class="no-data">No Data Found</h3>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>

    </div>
</template>

<script>
    import {ROOT_API} from "../const";
    import Table from './Table'
    import Vue from 'vue'
    import ImageComponents from "~/components/ImageUpload"

    export default {
        name: "RequestDemo",
        components:{'image-upload':ImageComponents},
        data: () => ({
            // rerender:true,
            edit_component:null,
            test:null,

            form_component: null,
            row: null,

            rows: null,
            columns: null,
            rules: null,
            actions: {},

            creatable: false,
            editable: true,
            deletable: false
        }),
        props: ["title"],
        methods: {
            // Open Modal
            row_edit(row) {
                // let type = 'requests';
                // this.form_component = null;
                // try {
                //     let temp = require(`./CreateForm`);
                //     this.$nextTick(() => {
                //         this.form_component = temp.default
                //     });
                //     this.row = row
                // } catch (e) {
                //     let temp = require(`./CreateForm`);
                //     this.form_component = temp.default
                // }
                // this.$refs.show_modal.click()
            },

            row_activechange(row) {
                this.row = row;
                row.status = !row.status;

                this.OnSubmitSave(row)
            },

            row_create() {
                this.row_edit({icon: null})
            },


            OnSubmitSave(data) {
                let type = 'requests';

                this.$axios
                    .post(`${ROOT_API}/${type}/${this.row.id || ''}`, data)
                    .then(res => {
                        this.initialize();
                        this.$swal.fire({
                            text: "Update Succeed!",
                            type: "success"
                        });
                        // this.$refs.editModal.click()
                    })
            },

            headers(column) {
                return ((this.rules.columns || {})[column] || {})
            },
            active_click(column, row) {
                if (column === 'status') {
                    this.row_activechange(row)
                }
            },
            edit_click(row,index,e) {
                let rowindex=document.getElementById(`row-${index}`).rowIndex
                let table=document.getElementById("table-data")
                let exist=document.getElementById(`edit-${index}`)
                let fake=document.getElementById('fakerow')
                let comp=require('./CreateForm/requests.vue')
                let vm=this
                vm.row=row

                if(exist){
                    table.deleteRow(exist.rowIndex)
                }else{
                    this.$nextTick(()=>{

                        vm.edit_component=comp.default
                        // edit_component
                        // console.log("edit",vm.edit_component)
                        let temp=fake.cloneNode(true)
                        temp.style.display="table-cell"
                        let r=table.insertRow(rowindex+1)
                        r.id=`edit-${index}`
                        r.append(temp)
                    })
                }

            },
            create_click() {
                this.$emit("OnCreate")
            },
            delete_click(row) {
                this.$emit("OnDelete", row)
            },

            initialize() {
                let type = 'requests';
                this.$axios.get(`${ROOT_API}/${type}`)
                    .then(resp => {
                        if (!resp)
                            console.log('Wrong Page');

                        let response = resp.data;

                        this.rows = response.rows;
                        this.columns = response.columns;
                        this.rules = response.rules;
                        this.actions = response.rules.action || {}


                    })
            }
        },
        mounted() {
            this.initialize()
setTimeout(()=>{
    window.table=document.getElementById("table-data")
    window.fake=document.getElementById("fakerow")
    // this.edit_component=window.fake
},1000)

        },
        created() {
        }
    }
</script>

<style lang="scss" scoped>
    .label {
        background: #ECB107;
        color: white;
        cursor: pointer;
    }

    .label-active {
        background: #2CC3E9;
        color: white;
    }

    .mdi {
        font-size: 15pt;
        cursor: pointer;
    }

    .mdi-delete {
        color: red;
    }

    .mdi-pencil {
        color: var(--primary);
    }

    table {
        tbody {
            td {
                max-width: 150px;
            }
        }
    }

    .no-data {
        text-align: center;
    }
</style>
