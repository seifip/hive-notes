import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    user: {
      airtableEmail: ''
    }
  },
  mutations: {
    updateUserAirtableEmail (state, email) {
      state.user.airtableEmail = email
    }
  }
})
