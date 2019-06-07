const requires=require.context('./',false,/.*\.js/)
const modules=requires.keys().map(name=>requires(name))
