module.exports = {
  pages: {
    'popup/popup': {
      entry: 'src/popup/popup.js',
      title: 'Hive'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        }
      },
      components: {
        popup: true
      },
      api: 'browser',
      usePolyfill: true,
      autoImportPolyfill: true
    }
  }
}
