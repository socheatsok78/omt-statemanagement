module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config.module
      .rule('sharedworker-loader')
      .test(/\.sharedworker\.(js|ts)$/i)
        .use('sharedworker-loader')
        .loader('@socheatsok78/sharedworker-loader')
        .end()
  },
  configureWebpack: {
    plugins: []
  }
}
