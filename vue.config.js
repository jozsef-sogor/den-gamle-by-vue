module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: '@import "~@/styles/variables.module.scss";'
            }
        }
    },
    transpileDependencies: ['vuetify']
};
