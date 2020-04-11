import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from './views/HomeView.vue'
import AddNoteView from './views/AddNoteView.vue'
import EditNoteView from './views/EditNoteView.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-note',
      name: 'add-note',
      component: AddNoteView
    },
    {
      path: '/edit-note/:id',
      name: 'edit-note',
      component: EditNoteView
    }
  ]
})

export default router
