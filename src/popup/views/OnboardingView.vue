<template>
  <div>
    <transition name="slide-up" appear>
      <div>
        <div class="flex justify-start py-2 pb-6 px-2">
          <div>
            <h2 class="text-xl font-bold">Enter the Hive</h2>
            <h3 class="text-lg font-bold text-primary-light pt-2">To share website notes with your team, set your Airtable details below.</h3>
          </div>
        </div>
        <div>
          <div>
            <h3 class="font-bold pt-2 pb-2 px-2 text-primary-light">Airtable email</h3>
            <t-input v-model="fields.airtableCredentials.email" name="note" placeholder="Airtable email"/>
          </div>
          <div v-if="!envApiKey">
            <h3 class="font-bold pt-2 pb-2 px-2 text-primary-light">API Key</h3>
            <t-input v-model="fields.airtableCredentials.apiKey" name="note" placeholder="keyXXXXXXXXXXXXXX"/>
          </div>
          <div v-if="!envBaseId">
            <h3 class="font-bold pt-2 pb-2 px-2 text-primary-light">Base ID</h3>
            <t-input v-model="fields.airtableCredentials.baseId" name="note" placeholder="appXXXXXXXXXXXXXX"/>
          </div>
        </div>
        <div class="flex justify-end pt-5 pb-4 px-2">
          <div>
            <t-button
              variant="primary"
              size="sm"
              @click="saveAccountSettings"
            >
              Continue
            </t-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
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
      envBaseId: process.env.VUE_APP_AIRTABLE_BASE
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
  }
}
</script>
