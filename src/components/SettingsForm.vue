<template>
  <div>
    <div>
      <div>
        <div v-if="tab" class="py-3 mt-6">
          <h2 class="text-xl font-bold">STEP 1</h2>
          <h3 class="text-lg pt-2">
            Open a free <a href="https://airtable.com/" target="_blank" class="underline">Airtable</a> account, and enter your email below.
          </h3>
        </div>
        <h3 class="font-bold pb-2 px-2 text-primary-light">Airtable email</h3>
        <t-input
          v-model="fields.airtableCredentials.email"
          name="note"
          placeholder="Airtable email"
          type="email"
        />
      </div>
      <div v-if="!envApiKey">
        <div v-if="tab" class="pt-6 mt-6">
          <h2 class="text-xl font-bold">STEP 2</h2>
          <h3 class="text-lg pt-2">
            Go to <a href="https://airtable.com/account" target="_blank" class="underline">airtable.com/account</a>, get your API Key, and enter it below.
          </h3>
        </div>
        <h3 class="font-bold pt-4 pb-2 px-2 text-primary-light">API Key</h3>
        <t-input
          v-model="fields.airtableCredentials.apiKey"
          name="note"
          placeholder="keyXXXXXXXXXXXXXX"
          type="password"
        />
      </div>
      <div v-if="tab && !envBaseId" class="pt-6 mt-6">
        <h2 class="text-xl font-bold">STEP 3</h2>
        <h3 class="text-lg pt-2">
          Copy the <a href="https://airtable.com/shr1dxKNQusW47dRP" target="_blank" class="underline">Hive Template</a> base to your Airtable account, or get invited to your team's existing copy.
        </h3>
        <a href="https://airtable.com/shr1dxKNQusW47dRP" target="_blank"><img class="my-4" src="@/assets/img/onboarding/airtable.png"></a>
      </div>
      <div v-if="!envBaseId">
        <div v-if="tab" class="py-3 mt-6">
          <h2 class="text-xl font-bold">STEP 4</h2>
          <h3 class="text-lg pt-2">
            Go to <a href="https://airtable.com/api" target="_blank" class="underline">airtable.com/api</a>, click your Hive Template base, find its Base ID, and enter it below.
          </h3>
        </div>
        <h3 class="font-bold pt-4 pb-2 px-2 text-primary-light">Base ID</h3>
        <t-input
          v-model="fields.airtableCredentials.baseId"
          name="note"
          placeholder="appXXXXXXXXXXXXXX"
        />
      </div>
    </div>
    <div class="flex justify-end pt-5 pb-4 px-2 mt-6">
      <div>
        <t-button v-if="action === 'add'"
          variant="primary"
          size="sm"
          @click="saveAccountSettings"
        >
          Let's Hive!
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
    },
    tab: {
      type: Boolean,
      default: false
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
          if (this.tab) {
            chrome.tabs.create({ url: 'https://www.google.com/' })
            window.close()
          } else {
            this.$router.push({ path: '/' })
          }
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
