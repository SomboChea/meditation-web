<template>
    <div>
        <DataTable
                :columns="columns"
                :creatable="actions.creatable"
                :deletable="actions.deletable"
                :editable="actions.editable"
                :rows="rows"
                :rules="rules"
                v-on:OnCreate="row_create"
                v-on:OnDelete="row_delete"
                v-on:OnEdit="row_edit"
                v-on:OnSave="OnSubmitSave"
        />

        <button class="btn btn-primary" data-target="#editmodal" data-toggle="modal" ref="show_modal" type="button"
                v-show="false">
            (Lauch Modal Not Showing)
        </button>

        <button class="btn btn-secondary" data-dismiss="modal" ref="close_modal" type="button" v-show="false">
            (Use to Close Modal)
        </button>


        <!-- Modal -->
        <div aria-hidden="true" aria-labelledby="exampleModalLabel" class="modal fade" id="editmodal" ref="editModal"
             role="dialog" tabindex="-1">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <component :is="form_component" :row="row" v-on:OnSave="OnSubmitSave"></component>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {ROOT, ROOT_API} from "../const";
    import DataTable from '../components/DataTableV2'

    export default {
        name: "TableV2",
        components: {DataTable},
        data: () => ({
            form_component: null,
            row: null,

            rows: null,
            columns: null,
            rules: null,
            actions: {}
        }),
        methods: {

            // Open Modal
            row_edit(row) {
                let type = this.$route.params.type;
                this.row = row

            },

            row_activechange(row) {
                this.row = row;
                row.status = !row.status;

                this.OnSubmitSave(row)
            },

            row_create() {
                let type = this.$route.params.type;

                try {
                    let temp = require(`./CreateForm/${type}`);
                    this.$nextTick(() => {
                        this.form_component = temp.default
                    });
                    this.row = {icon: null}
                } catch (e) {
                    let temp = require(`./CreateForm/Default`);
                    this.form_component = temp.default
                }
                this.$refs.show_modal.click()
                // this.row_edit({icon: null})
            },

            row_delete(row) {
                let type = this.$route.params.type;

                this.$swal
                    .fire({
                        html: `do you want to delete <br /><h3></h3><b>${row.title || "this row"}</b></h3>?`,
                        title: "Deletion",
                        type: "question",
                    })
                    .then(({value}) => {
                        if (value) {
                            return this.$axios
                                .delete(`${ROOT_API}/${type}/${row.id}`)
                        }
                        return Promise.reject(value)
                    })
                    .then(resp => {
                        this.$swal.fire({
                            text: "Deleted Succeed!",
                            type: "success"
                        });
                        this.initialize()
                    })
            },

            OnSubmitSave(data) {
                let type = this.$route.params.type;

                this.$axios
                    .post(`${ROOT_API}/${type}/${this.row.id || ''}`, data)
                    .then(res => {
                        this.initialize();
                        this.$swal.fire({
                            text: "Update Succeed!",
                            type: "success"
                        });
                        this.$refs.editModal.click()
                    })
            },

            initialize() {
                let type = this.$route.params.type;
                this.$axios.get(`${ROOT_API}/${type}`)
                    .then(resp => {
                        if (!resp)
                        {
                            console.log('Wrong Page');
                            return
                        }

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
        },
        created() {

        }
    }
</script>

<style scoped>

</style>
