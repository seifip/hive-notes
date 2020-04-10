<template>
  <div>
    <div class="flex justify-between py-2 pb-4 px-4">
      <div>
        <h2 class="text-xl font-bold">Notes</h2>
      </div>
      <div>
        <t-button
          variant="primary"
          default-size-class="h-8 w-8 py-0 px-0"
          @click="openAirtableForm"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
        </t-button>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-3">
      <Notes/>
    </div>
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
    }
  },
  components: {
    Notes
  }
}
</script>
