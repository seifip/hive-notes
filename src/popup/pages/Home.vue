<template>
  <div>
    <div class="flex justify-between py-2 px-4">
      <div>
        <h2 class="text-xl font-bold">Notes</h2>
      </div>
      <div>
        <t-button
          variant="primary"
          class="h-8 w-8 py-0 px-0 flex justify-center"
          @click="openAirtableForm"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
        </t-button>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4">
      <t-card class="border-l-4 border-red-500">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sit perspiciatis laboriosam doloribus, aliquam, porro quasi reiciendis.</p>
        <div class="pt-2 text-primary-light flex justify-between">
          <div>Sabina</div>
          <div>2 weeks ago</div>
        </div>
      </t-card>
      <t-card class="border-l-4 border-orange-500">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sit perspiciatis laboriosam doloribus, aliquam, porro quasi reiciendis.</p>
        <div class="pt-2 text-primary-light flex justify-between">
          <div>Sabina</div>
          <div>2 weeks ago</div>
        </div>
      </t-card>
      <t-card class="border-l-4 border-primary-light">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sit perspiciatis laboriosam doloribus, aliquam, porro quasi reiciendis.</p>
        <div class="pt-2 text-primary-light flex justify-between">
          <div>Sabina</div>
          <div>2 weeks ago</div>
        </div>
      </t-card>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>
