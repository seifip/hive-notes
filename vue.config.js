module.exports = {
  pages: {
    'popup/popup': {
      entry: 'src/popup/popup.js',
      title: 'Alice'
    }
  },
  pluginOptions: {
    browserExtension: {
      components: {
        popup: true
      },
      api: 'browser',
      usePolyfill: true,
      autoImportPolyfill: true
    }
  }
}
