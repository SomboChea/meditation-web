<template>

    <div class="table-responsive">
        <div class="btn-create text-right p-3" v-if="creatable">
            <a @click="create_click" class="btn btn-primary" href="#">Create</a>
        </div>

        <td colspan="100" id="temp-cell" v-show="false">
            <component :is="edit_component"
                       :key="new Date().toLocaleString()"
                       :row="row"
                       v-on:OnSave="SendToDataTable"
            ></component>
        </td>

        <table class="table v-middle" id="data_table" ref="table" v-if="rows">

            <thead>
                <tr class="bg-light">
                    <th class="border-top-0"
                        v-for="column in columns" v-if="headers(column).type!=='hidden'">
                        {{headers(column).text || capitalize(column)}}
                        <i
                                @click="sort(column)"
                                class="mdi mdi-sort"
                        ></i>
                    </th>

                    <th v-if="deletable || editable">
                        Action
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr
                        :id="`row-${row_index}`"
                        :key="row_index"
                        v-for="(row,row_index) in rows">
                    <td
                            @click="edit_click(row,row_index)"
                            v-for="column in columns" v-if="headers(column).type!=='hidden'">

                        <div class="d-flex align-items-center" v-if="headers(column).type==='icon'">
                            <div class="m-r-10">
                                <img :src="row[column]" alt="" width="50">
                            </div>
                        </div>

                        <div v-else-if="headers(column).type==='avatar'">
                            <Avatar :src="row[column]" v-if="row[column]"/>
                            <Avatar :username="row[headers(column).name]" v-else/>


                        </div>

                        <div v-else-if="headers(column).type==='multiple'">
                            <label
                                    :class="`multiple-${status}`"
                                    class="label"
                                    v-for="(status,key) in headers(column).statuses"
                                    v-if="row[column]==key"
                            >
                                {{status}}
                            </label>
                        </div>

                        <label
                                :class="{'label-active':row[column]}"
                                @click="active_click(column,row)"
                                class="label"
                                v-else-if="headers(column).type==='boolean'"
                        >
                            {{row[column]?(headers(column).active ||
                            'active'):(headers(column).inactive ||
                            "inactive")}}
                        </label>

                        <h5 class="m-b-0" v-else-if="headers(column).type==='bold'">{{row[column]}}</h5>

                        <span v-else>{{row[column]}}</span>

                    </td>


                    <td v-if="editable || deletable">
                        <i @click="edit_click(row,row_index)" class="mdi mdi-pencil " v-if="editable"></i>
                        <i @click="delete_click(row)" class="mdi mdi-delete action-delete" v-if="deletable"></i>
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
</template>

<script>
    import Avatar from "vue-avatar";

    export default {
        name: "DataTable",
        comp_name: "data-table-v2",
        components: {Avatar},
        props: ["rows", "columns", "rules", "editable", "deletable", "creatable"],
        computed: {},
        created() {
            let type = this.$route.params.type
            try {
                this.edit_component = require(`../Pages/EditForm/${type}`).default
            } catch (e) {
                this.edit_component = require(`../Pages/EditForm/Default`).default
            }
        },
        mounted() {
            this.temp_cell = document.getElementById("temp-cell")


        },
        data: () => ({
            edit_component: null,
            row: {},

            temp_cell: null,
            sort_archor: 1
        }),
        updated() {
            // console.log("Update : ",this.count++)
            //
            // let table = this.$refs.table
            //
            // if (table && this.rows.length>-1){
            //     console.log("delete",this.rows.length)
            // $("#data_table").DataTable().destroy()

            // setTimeout(()=>{
            //     $("#data_table").DataTable().destroy()
            //
            //     console.log("init",$("#data_table"))
            //     // $("#data_table").DataTable({
            //     //     paging:false,
            //     //     searching:false,
            //     //     info:false
            //     // })
            // },1000)

            // }


        },
        methods: {
            headers(column) {
                return ((this.rules.columns || {})[column] || {})
            },
            active_click(column, row) {
                if (column === 'status') {
                    this.$emit("OnActiveChange", row)
                }
            },
            edit_click(row, index) {
                // Use for set which row is edited to Outside
                this.$emit('OnEdit', row)

                let table = this.$refs.table
                let editrow = document.getElementById(`edit-${index}`)
                // $('.row-active').attr('class','')

                if (editrow) {
                    table.deleteRow(editrow.rowIndex)
                }
                // config for Vue component
                // console.log('row',row)
                this.row = row
                // let temp_component=require(`./../Pages/Form/${type}`).default
                // this.edit_component=null

                this.$nextTick(() => {
                    // this.edit_component=temp_component
                    // config cell
                    let cell = this.temp_cell
                    // let cell = temp_cell.cloneNode(true)

                    cell.style.display = "table-cell"

                    // config row
                    let current = document.getElementById(`row-${index}`)
                    editrow = table.insertRow(current.rowIndex + 1)
                    // current.classList.add('row-active')
                    editrow.id = `edit-${index}`
                    editrow.append(cell)


                })
            },

            sort(column) {
                let vm = this
                this.rows.sort(function (a, b) {
                    // console.log('row',a[column]>b[column])
                    return a[column] > b[column] ? 1 * (vm.sort_archor) : -1 * (vm.sort_archor)
                })
                vm.sort_archor = vm.sort_archor * (-1)

                console.log("sort", this.rows)
            },
            SendToDataTable(row) {
                this.$emit("OnSave", row);
                $('tr[id^="edit-"]').remove()
            },
            create_click() {
                this.$emit("OnCreate")
            },
            delete_click(row) {
                this.$emit("OnDelete", row)
            }
        }
    }
</script>

<style lang="scss" scoped>

    .label {
        background: gray;
        color: white;
        cursor: pointer;
    }

    .label-active {
        background: #2CC3E9;
        color: white;
    }

    .action-delete {
        z-index: 9999;
    }

    .mdi {
        font-size: 15pt;
        cursor: pointer;
    }
    .mdi-sort {
        font-size: 12pt;

        &:before {
            color: gray;
            width: 50px;
            text-align: right;
        }

    }

    .mdi-delete {
        color: red;
    }

    .mdi-pencil {
        color: var(--primary);
    }

    table {
        &.no-footer {
            border-bottom: none;
        }

        tbody {
            tr {
                cursor: pointer;

                /*&:nth-child(odd){*/
                /*    background: white;*/
                /*}*/
                /*&:nth-child(even){*/
                /*    background: #9b9b9b1a;*/
                /*}*/
                /*&.row-active , &:hover{*/
                /*    background: var(--primary);*/
                /*    color: white;*/
                /*}*/
            }

            td {
                max-width: 150px;
            }
        }
    }

    .multiple-Pending {
        background: #ECB107;
    }

    .multiple-Contacted {
        background: var(--primary);
    }

    .no-data {
        text-align: center;
    }
</style>
