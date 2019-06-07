<template>
    <div class="row">
        <div class="card text-white  col-md-3 col-6 dashboard-card" v-for="(board,key) in boards">
            <div class="card-body" :style="{background:(rule(key).bgColor || 'var(--primary)')}">
                <h5 class="card-title gt">{{rule(key).text || capitalize(key)}}</h5>
                <div v-for="(value,name) in board" class="row gt-book">
                    <label class="col-6" :for="name">{{name}}</label>
                    <label class="col-6" style="font-weight: bold" :for="value">: {{value}}</label>
                </div>
                <router-link :to="rule(key).to" class="btn btn-primary w-75" v-if="rule(key).to"
                   :style="{background:(rule(key).bgColor || 'var(--primary)')}">
                   View Full List
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {ROOT_API} from "../const";

    export default {
        name: "Dashboard",
        data: () => ({
            boards: null,
            rules: {
                "requestdemo":{
                    text:"Request Demo",
                    to:{name:"table",params:{type:"requests"}},
                    bgColor:"#2CC3E9"
                },
                "services":{
                    to:{name:"table",params:{type:"services"}},
                    bgColor: "#EB6E3D"
                },
                "reasons":{
                    text:"Features",
                    to:{name:"table",params:{type:"reasons"}},
                    bgColor:"#AF79CE"
                },
                "reviews":{
                    to:{name:"table",params:{type:"reviews"}},
                    bgColor:"#6CC09F"
                },
                "solution":{
                    to:{name:"table",params:{type:"solutions"}},
                    text: "Solutions",
                    bgColor:"#ECB107"
                }
            }
        }),
        created() {
            let type = this.$route.params.type
            this.$axios.get(`${ROOT_API}/dashboard`)
                .then(resp => {
                    if (!resp)
                    {
                        return
                    }
                    let response = resp.data
                    this.boards = response.boards

                })
        },
        methods:{
            rule(key){
                return this.rules[key] || {}
            },
        }
    }
</script>

<style lang="scss" scoped>

    .dashboard-card{
        font-size: 1rem;

        & * {
            font-size: inherit;
        }
        .card-body {
            border-radius: 15px;

            *{
                padding-bottom: 5px;
                padding-top: 5px;
            }
        }
        
        .btn{
            border: white solid 1.5px !important;
            transform: translateX(-50%);
            position: relative;
            left: 50%;
            min-width: fit-content;
        }
    }
</style>
