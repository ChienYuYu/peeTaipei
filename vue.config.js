const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production'
    ? '/peeTaipei/'
    : '/',

  // 配置代理
  // devServer: {
  //   proxy: {
  //     '^/toilet': {
  //       target: 'https://quality.data.gov.tw/dq_download_json.php?nid=138798&md5_url=64e392a0fcb63fa9fb1f596bcb86e96b',
  //       ws: true,
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
