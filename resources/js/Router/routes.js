import {ROOT} from "~/CONST";

// import SettingIndex from "./../Pages/Settings/index"
// import SettingAccount from './../Pages/Settings/Account'

const requires = require.context('./../Pages', true, /.*\.vue$/);
const {
    Dashboard,

    Storages,
    SettingIndex,

    Error404
} = requires.keys().map(name => requires(name))
    .reduce((modules, module) => {
        console.log('module', module)
        return {...modules, [module.default.name]: module.default}
    }, {});


// import Services from '~/Pages/Services'
export default [
    {
        path: `${ROOT}/`, component: Dashboard, name: "dashboard"
    },

    {path: `${ROOT}/storage`, component: Storages, name: 'storages'},
    {
        path: `${ROOT}/settings`,component:SettingIndex, name:"setting",
        children: [
            {path:"/",name:"setting.index"}
        ]
    },

    {path: `${ROOT}/404`, component: Error404, name: "error404"},
    {path: "*/**", redirect: {name: "error404"}}

]
