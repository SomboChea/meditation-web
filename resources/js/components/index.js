import Vue from 'vue'

const requires=require.context('~/components',false,/.*\.vue/)
const modules=requires.keys().map(name=> {
        let module = requires(name)
        Vue.component(module.default.comp_name || module.default.name,module.default)
}
)


