<template>

    <div class="table-responsive" >
        <div class="btn-create text-right p-3" v-if="creatable">
            <a href="#" class="btn btn-primary" @click="create_click">Create</a>
        </div>

        <table class="table v-middle" v-if="rows">

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
                <tr v-for="(row,row_index) in rows" :key="row_index">
                    <td v-for="column in columns" v-if="headers(column).type!=='hidden'">

                        <div class="d-flex align-items-center" v-if="headers(column).type==='icon'">
                            <div class="m-r-10">
                                <img :src="row[column]"  width="50" alt="">
                            </div>
                        </div>

                        <div v-else-if="headers(column).type==='avatar'">
                            <Avatar v-if="row[column]" :src="row[column]" />
                            <Avatar v-else :username="row[headers(column).name]" />


                        </div>

                        <label
                                v-else-if="headers(column).type==='boolean'"
                                class="label"
                                @click="active_click(column,row)"
                                :class="{'label-active':row[column]}">{{row[column]?(headers(column).active || 'active'):(headers(column).inactive || "inactive")}}
                        </label>

                        <h5 v-else-if="headers(column).type==='bold'" class="m-b-0">{{row[column]}}</h5>

                        <span v-else>{{row[column]}}</span>

                    </td>


                    <td v-if="editable || deletable">
                        <i class="mdi mdi-pencil" v-if="editable" @click="edit_click(row)"></i>
                        <i class="mdi mdi-delete" v-if="deletable" @click="delete_click(row)"></i>
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
        comp_name: "data-table",
        components:{Avatar},
        props: ["rows", "columns", "rules", "editable", "deletable", "creatable"],
        computed: {},
        methods: {
            headers(column) {
                return ((this.rules.columns || {})[column] || {})
            },
            active_click(column,row) {
                if(column==='status'){
                    this.$emit("OnActiveChange",row)
                }
            },
            edit_click(row) {
                this.$emit("OnEdit", row)
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

    .label-active{
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
        tbody{
            td {
                max-width: 150px;
            }
        }
    }

    .no-data{
        text-align: center;
    }
</style>
