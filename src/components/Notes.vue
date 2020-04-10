<template>
  <div class="grid grid-cols-1 gap-3">
    <Note v-for="note in notes" :key="note.id" :importance="1" :type="'info'"/>
  </div>
</template>

<script>
import axios from 'axios'

import Note from '@/components/Note'

export default {
  data () {
    return {
      notes: [],
      loading: true
    }
  },
  components: {
    Note
  },
  mounted () {
    axios.get(
      'https://api.airtable.com/v0/' + process.env.VUE_APP_AIRTABLE_BASE + '/Notes?view=Grid%20view',
      { headers: { Accept: 'application/json', Authorization: 'Bearer ' + process.env.VUE_APP_AIRTABLE_API_KEY } }
    )
      .then(res => {
        this.notes = res.data.records
        this.loading = false
        console.log(this.notes)
      }).catch(function (error) {
        console.log(error)
      })
  }
}
</script>
