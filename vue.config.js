const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
     // НЕ РАБОТАЕТ
  },

  publicPath: process.env.NODE_ENV === "production" ? "/chat/" : "/",

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
