<template>
  <div>
    <div class="flex justify-between py-2 pb-4 px-4">
      <div>
        <h2 class="text-xl font-bold">Notes</h2>
      </div>
      <div>
        <t-button
          variant="primary"
          default-size-class="h-8 w-8 py-0 px-0 text-primary-dark"
          @click="openAirtableForm"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
        </t-button>
      </div>
    </div>
    <Notes/>
    <div class="text-primary text-right pt-4 px-4">{{ getExtensionVersion() }}</div>
  </div>
</template>

<script>
import Notes from '@/components/Notes'

export default {
  data () {
    return {}
  },
  methods: {
    openAirtableForm: function () {
      this.openLinkInNewTab('https://airtable.com/shrxoO3qg17glldAf')
    },
    openLinkInNewTab: function (url) {
      chrome.tabs.create({ url })
    },
    getExtensionVersion: function () {
      console.log(chrome.runtime.getManifest())
      return chrome.runtime.getManifest().version
    }
  },
  components: {
    Notes
  }
}
</script>
