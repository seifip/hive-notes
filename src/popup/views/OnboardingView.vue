<template>
  <div>
    <transition name="slide-up" appear>
      <div>
        <div class="flex justify-start py-2 pb-6 px-2">
          <div>
            <h2 class="text-xl font-bold">Hey there!</h2>
            <h3 class="text-lg font-bold text-primary-light pt-2">To start sharing notes with your team, please enter the email associated with your Airtable account.</h3>
          </div>
        </div>
        <div>
          <t-input v-model="fields.airtableEmail" name="note" placeholder="Airtable email"/>
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
        airtableEmail: ''
      }
    }
  },
  methods: {
    saveAccountSettings: function () {
      chrome.storage.sync.set(
        {
          userAirtableEmail: this.fields.airtableEmail
        }, () => {
          this.$router.push({ path: '/' })
        }
      )
    }
  }
}
</script>
