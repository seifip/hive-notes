<template>
  <div>
    <div>
      <h3 class="font-bold pb-2 px-2 text-primary-light">Note</h3>
      <t-textarea v-model="fields.Note" name="note" placeholder="It's just your Hive talkin'" rows="7" id="notePriority"/>
      <h3 class="font-bold pt-4 pb-2 px-2 text-primary-light">Priority</h3>
      <t-select v-model="fields.Priority" :options="airtableMeta.notePriorities" />
    </div>
    <div class="flex justify-end pt-5 pb-4 px-2">
      <div>
        <t-button v-if="action === 'add'"
          variant="primary"
          size="sm"
          :disabled="loading"
          @click="addNote"
        >
          Add note
        </t-button>
        <t-button v-if="action === 'edit'"
          variant="primary"
          size="sm"
          :disabled="loading"
          @click="updateNote"
        >
          Update note
        </t-button>
      </div>
    </div>
  </div>
</template>

<script>
import psl from 'psl'
import axios from 'axios'

import airtableMeta from '../assets/json/airtable-meta'

export default {
  props: {
    action: {
      type: String,
      default: 'add'
    },
    currentFields: {
      type: Object,
      default: undefined
    }
  },
  data () {
    return {
      fields: {
        Note: '',
        Author: {
          email: ''
        },
        Priority: airtableMeta.notePriorities[0].value,
        Domain: ''
      },
      airtableCredentials: {},
      airtableMeta: airtableMeta,
      loading: true
    }
  },
  methods: {
    addNote: function () {
      if (this.fields.Domain === '' || this.fields.Note === '' || this.fields.Author.email === '') {
        return
      }
      axios.post(
        'https://api.airtable.com/v0/' + this.airtableCredentials.baseId + '/Notes',
        {
          records: [
            {
              fields: this.fields
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.airtableCredentials.apiKey
          }
        }
      )
        .then(res => {
          this.$router.push({ path: '/' })
        }).catch(function (error) {
          console.log(error)
        })
    },
    updateNote: function () {
      axios.patch(
        'https://api.airtable.com/v0/' + this.airtableCredentials.baseId + '/Notes/' + this.$route.params.id,
        {
          fields: {
            Note: this.fields.Note,
            Author: {
              email: this.airtableCredentials.email
            },
            Priority: this.fields.Priority
          }
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + this.airtableCredentials.apiKey
          }
        }
      )
        .then(res => {
          this.$router.push({ path: '/' })
        }).catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted () {
    chrome.storage.sync.get(['airtableCredentials'], (res) => {
      this.airtableCredentials = res.airtableCredentials
      if (this.action === 'add') {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
          const url = new URL(tabs[0].url)
          this.fields.Domain = psl.parse(url.hostname).domain
          this.fields.Author.email = this.airtableCredentials.email
          this.loading = false
        })
      } else {
        this.fields = this.currentFields
        this.loading = false
      }
      document.getElementById('notePriority').focus()
    })
  }
}
</script>

<style lang="sass">
select option
  background: #003033
</style>
