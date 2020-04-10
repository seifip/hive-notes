# Browser Extension Popup Skeleton
This project is a skeleton for quickly building a browser extension using Vue and Tailwind. It is supposed to be a very simplistic beginning point for browser extensions of various complexity.
- It uses Vue because even the smallest extension gets very complex very quickly.
- It uses [Tailwind CSS](https://tailwindcss.com/) because it is a joy to work with it.
- It uses Webpack to build the project.
- It can semi-hot-reload the popup: meaning that re-opening the extension window would show you the changes.
- It uses [Vue Router](https://router.vuejs.org/) for multi-page extensions, can be easily removed by deleting the `router.js` file and removing the reference in `popup.js` file.
- It uses [Vuex](https://vuex.vuejs.org/) for state, can be easily removed by deleting the `store.js` file and removing the reference in `popup.js` file.
- It automatically builds the ZIP file that can be distributed under the `artifacts` directory.
- It automatically minifies all the resources.
- It automatically removes unused CSS by using [PurgeCSS](https://github.com/FullHuman/purgecss).

This is how it looks like when you load the unpacked extension after you run it:

<p align="center">
  <img width="428" alt="extension screenshot" src="https://user-images.githubusercontent.com/16530606/75059304-f9e08280-54dc-11ea-887f-f14238412b40.png">
</p>


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Install Unpacked Extensions
While developing, you'll need to install the extension as an "unpacked extension" to your browser. Here is the tutorial [for Google Chrome](https://developer.chrome.com/extensions/getstarted), and for Mozilla Firefox [please follow this link](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/).