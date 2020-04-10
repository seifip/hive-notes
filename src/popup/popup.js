import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'
import './css/tailwind.css'
import VueTailwind from 'vue-tailwind'
import TailwindTheme from '../tailwindTheme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueTailwind, {
  theme: TailwindTheme
})

library.add(faPlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
