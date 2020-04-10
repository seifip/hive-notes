<template>
  <div>
    <div v-if="!loading">
      <div class="grid grid-cols-1 gap-3">
        <Note
          v-for="note in notes"
          :key="note.id"
          :priority="Number(note.fields.Priority)"
          :type="note.fields.Type"
          :note="note.fields.Note"
          :author="note.fields.Author"
          :modified="note.fields.Modified"/>
      </div>
    </div>
    <div v-else>
      <SkeletonTheme color="#006064" highlight="#00686b">
        <div class="grid grid-cols-1 gap-3">
          <div v-for="n in 2" :key="n">
            <Skeleton height="125px"/>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  </div>
</template>

<script>
import psl from 'psl'
import axios from 'axios'
import { Skeleton, SkeletonTheme } from 'vue-loading-skeleton'

import Note from '@/components/Note'

export default {
  data () {
    return {
      domain: undefined,
      notes: [],
      loading: true
    }
  },
  methods: {
    fetchNotes: function () {
      axios.get(
        'https://api.airtable.com/v0/' + process.env.VUE_APP_AIRTABLE_BASE + '/Notes?view=Grid%20view',
        {
          headers: {
            Accept: 'application/json',
            Authorization: 'Bearer ' + process.env.VUE_APP_AIRTABLE_API_KEY
          }
        }
      )
        .then(res => {
          const allNotes = res.data.records
          const filteredNotes = allNotes.filter(note => note.fields.Domain[0] === this.domain)
          this.notes = filteredNotes.sort(function (a, b) {
            if (a.fields.Priority < b.fields.Priority) {
              return -1
            }
            if (a.fields.Priority > b.fields.Priority) {
              return 1
            }
            return 0
          })
          this.loading = false
        }).catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted () {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      const url = new URL(tabs[0].url)
      this.domain = psl.parse(url.hostname).domain
      this.fetchNotes()
    })
  },
  components: {
    Note,
    Skeleton,
    SkeletonTheme
  }
}
</script>
