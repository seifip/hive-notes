module.exports = {
  pages: {
    'popup/popup': {
      entry: 'src/popup/popup.js',
      title: 'Hive'
    },
    'options/options': {
      entry: 'src/options/options.js',
      title: 'Hive Options'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        },
        options: {
          entry: 'src/options.js'
        }
      },
      components: {
        popup: true,
        options: true
      },
      api: 'browser',
      usePolyfill: true,
      autoImportPolyfill: true
    }
  }
}
