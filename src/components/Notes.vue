<template>
  <div>
    <div v-if="!loading">
      <div class="grid grid-cols-1 gap-3">
        <Note v-for="note in notes" :key="note.id" :importance="1" :type="'info'"/>
      </div>
    </div>
    <div v-else>
      <SkeletonTheme color="#006064" highlight="#00686b">
        <div class="grid grid-cols-1 gap-3">
          <div v-for="n in 4" :key="n">
            <Skeleton height="125px"/>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Skeleton, SkeletonTheme } from 'vue-loading-skeleton'

import Note from '@/components/Note'

export default {
  data () {
    return {
      notes: [],
      loading: true
    }
  },
  components: {
    Note,
    Skeleton,
    SkeletonTheme
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
