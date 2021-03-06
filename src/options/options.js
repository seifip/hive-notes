import Vue from 'vue'
import App from './App.vue'
import '../assets/css/tailwind.css'
import VueTailwind from 'vue-tailwind'
import TailwindTheme from '../tailwindTheme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faCog, faArrowLeft, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueTailwind, {
  theme: TailwindTheme
})

library.add(faPlus, faCog, faArrowLeft, faEllipsisV)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(require('vue-moment'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
