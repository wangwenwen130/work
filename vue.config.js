module.exports = {
  //额外的webpack配置使用一个回调函数来返回新的config
  configureWebpack: config => {
    //console.log("webpack",config)
  },
  devServer: {
    port: 8089,
    proxy: {
      "/api": {
        target: "http://10.215.137.135",
        ws: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  }
}
