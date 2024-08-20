const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  chainWebpack: config => {
    // Add file-loader for .pdf files
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .tap(options => ({
        name: 'pdf/[name].[ext]', // Optional: Customize the output path and filename
        ...options
      }));

    // Add html-loader for .html files
    config.module
      .rule('html')
      .test(/\.html$/)
      .use('html-loader')
      .loader('html-loader')
      .options({
        // Options for html-loader if needed
      });
  },
  transpileDependencies: true,
  publicPath: '/'
});
