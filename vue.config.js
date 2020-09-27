module.exports = {
  assetsDir: 'static',
  css: {
    extract: true,
    sourceMap: false,
    requireModuleExtension: true,
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#1890ff', // 全局主色
            'link-color': '#1890ff', // 链接色
            'success-color': '#52c41a', // 成功色
            'warning-color': '#faad14', // 警告色
            'error-color': '#f5222d' // 错误色
          },
          javascriptEnabled: true
        }
      }
    }
  }
}
