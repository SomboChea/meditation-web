import {ROOT} from "~/const";

// import SettingIndex from "./../Pages/Settings/index"
// import SettingAccount from './../Pages/Settings/Account'

const requires = require.context('./../Pages', false, /.*\.vue$/);
const {
    Dashboard,

    TableV2,
    Settings,

    Error404
} = requires.keys().map(name => requires(name))
    .reduce((modules, module) => {
        return {...modules, [module.default.name]: module.default}
    }, {});



// import Services from '~/Pages/Services'
export default [
    {
        path: `${ROOT}/`,
        component: Dashboard,
        // When No dashboard , So set service as Index
        // redirect:{name:'table',params:{type:'services'}},
        name: "dashboard"
    },

    // {path: `${ROOT}/page/requests`, name: "request_table", component: RequestDemo},
    {path: `${ROOT}/page/:type`, name: "table", component: TableV2},
    // {path: `${ROOT}/settings`,name:"settings",component:SettingIndex,redirect: {name:'settings.index'},
    //     children:[
    //         {path:``,component:SettingAccount,name:'settings.index'}
    //     ]
    // },
    {path: `${ROOT}/settings`,name:"settings",component:Settings},

    {path: `${ROOT}/404`, component: Error404, name: "error404"},
    {path: "*/**", redirect: {name: "error404"}}

]
