module.exports = {
  pages: {
    'popup/popup': {
      entry: 'src/popup/popup.js',
      title: 'Popup',
    },
  },
  pluginOptions: {
    browserExtension: {
      components: {
        popup: true,
      },
      api: 'browser',
      usePolyfill: true,
      autoImportPolyfill: true,
    },
  },
};
