// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  productionSourceMap: false,
  devServer: {
    open: true, // 是否自动打开浏览器页面
    host: "0.0.0.0", // 指定使用一个 host。默认是 localhost
    port: 7513, // 端口地址
    https: false, // 使用https提供服务
    proxy: null // string | Object 代理设置
    // 提供在服务器内部的其他中间件之前执行自定义中间件的能力
    // before: app => {
    //   // `app` 是一个 express 实例
    // },
  }
  // todo 把 Gzip 打开
  // configureWebpack: () => {
  //   if (process.env.NODE_ENV === 'production') {
  //     return {
  //       plugins: [
  //         new CompressionWebpackPlugin({
  //           // 目标文件名称。[path] 被替换为原始文件的路径和 [query] 查询
  //           asset: '[path].gz[query]',
  //           // 使用 gzip 压缩
  //           algorithm: 'gzip',
  //           // 处理与此正则相匹配的所有文件
  //           test: new RegExp('\\.(js|css)$'),
  //           // 只处理大于此大小的文件
  //           threshold: 10240,
  //           // 最小压缩比达到 0.8 时才会被压缩
  //           minRatio: 0.8,
  //         }),
  //       ],
  //     };
  //   }
  //   return null;
  // },
  // css: {
  //   loaderOptions: {
  //     // 给 sass-loader 传递选项
  //     sass: {
  //       // @/ 是 src/ 的别名
  //       // 所以这里假设你有 `src/variables.scss` 这个文件
  //       data: '@import "@/assets/css/variables.scss";',
  //     },
  //   },
  // },
  // configureWebpack: {
  //   externals: {
  //     // key 为文件中引入的库名称，value 为 html 中引入库后的全局变量名称
  //     vue: 'Vue',
  //     'vue-router': 'VueRouter',
  //     axios: 'axios',
  //     'element-ui': 'ELEMENT',
  //     lodash: '_',
  //     jquery: '$',
  //     moment: 'moment',
  //   },
  // },
};
