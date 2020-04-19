import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from './views/HomeView.vue'
import AddNoteView from './views/AddNoteView.vue'
import EditNoteView from './views/EditNoteView.vue'
import OnboardingView from './views/OnboardingView.vue'
import SettingsView from './views/SettingsView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      component: OnboardingView,
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
    },
    {
      path: '/add-note',
      name: 'add-note',
      component: AddNoteView,
    },
    {
      path: '/edit-note/:id',
      name: 'edit-note',
      component: EditNoteView,
    },
  ],
})

// Redirect user to Onboarding if Airtable email not set
router.beforeEach((to, from, next) => {
  chrome.storage.sync.get(['airtableCredentials'], (res) => {
    if (to.name !== 'onboarding' && !res.airtableCredentials) {
      next({ name: 'onboarding' })
    } else {
      next()
    }
  })
})

export default router
