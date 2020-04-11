<template>
  <div>
    <div class="flex justify-between py-2 pb-4 px-2">
      <div>
        <h2 class="text-xl font-bold">Edit note</h2>
      </div>
      <div>
        <t-button
          variant="primary"
          default-size-class="h-8 w-8 py-0 px-0"
          to="/"
        >
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </t-button>
      </div>
    </div>
    <transition name="slide-up" appear>
      <NoteForm v-if="!loading" action="edit" :currentFields="currentFields"/>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'

import NoteForm from '@/components/NoteForm'

export default {
  data () {
    return {
      currentFields: {},
      loading: true
    }
  },
  methods: {
    openLinkInNewTab: function (url) {
      chrome.tabs.create({ url })
    },
    fetchNote: function (noteId) {
      axios.get(
        'https://api.airtable.com/v0/' + process.env.VUE_APP_AIRTABLE_BASE + '/Notes/' + noteId,
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + process.env.VUE_APP_AIRTABLE_API_KEY
          }
        }
      )
        .then(res => {
          this.currentFields = res.data.fields
          this.loading = false
        }).catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted () {
    this.fetchNote(this.$route.params.id)
  },
  components: {
    NoteForm
  }
}
</script>
