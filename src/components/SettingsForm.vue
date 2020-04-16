<template>
  <div>
    <div>
      <div>
        <h3 class="font-bold pb-2 px-2 text-primary-light">Airtable email</h3>
        <t-input
          v-model="fields.airtableCredentials.email"
          name="note"
          placeholder="Airtable email"
          type="email"
        />
      </div>
      <div v-if="!envApiKey">
        <h3 class="font-bold pt-4 pb-2 px-2 text-primary-light">API Key</h3>
        <t-input
          v-model="fields.airtableCredentials.apiKey"
          name="note"
          placeholder="keyXXXXXXXXXXXXXX"
          type="password"
        />
      </div>
      <div v-if="!envBaseId">
        <h3 class="font-bold pt-4 pb-2 px-2 text-primary-light">Base ID</h3>
        <t-input
          v-model="fields.airtableCredentials.baseId"
          name="note"
          placeholder="appXXXXXXXXXXXXXX"
        />
      </div>
    </div>
    <div class="flex justify-end pt-5 pb-4 px-2">
      <div>
        <t-button v-if="action === 'add'"
          variant="primary"
          size="sm"
          @click="saveAccountSettings"
        >
          Continue
        </t-button>
        <t-button v-if="action === 'edit'"
          variant="primary"
          size="sm"
          @click="saveAccountSettings"
        >
          Save settings
        </t-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    action: {
      type: String,
      default: 'add'
    }
  },
  data () {
    return {
      fields: {
        airtableCredentials: {
          email: '',
          apiKey: process.env.VUE_APP_AIRTABLE_API_KEY || '',
          baseId: process.env.VUE_APP_AIRTABLE_BASE || ''
        }
      },
      envApiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
      envBaseId: process.env.VUE_APP_AIRTABLE_BASE,
      loading: true
    }
  },
  methods: {
    saveAccountSettings: function () {
      chrome.storage.sync.set(
        {
          airtableCredentials: this.fields.airtableCredentials
        }, () => {
          this.$router.push({ path: '/' })
        }
      )
    }
  },
  mounted () {
    if (this.action === 'edit') {
      chrome.storage.sync.get(['airtableCredentials'], (res) => {
        this.fields.airtableCredentials = res.airtableCredentials
        this.loading = false
      })
    } else {
      this.loading = false
    }
  }
}
</script>

<style lang="sass">
select option
  background: #003033
</style>
