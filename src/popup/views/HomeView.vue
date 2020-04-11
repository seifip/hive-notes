<template>
  <div>
    <div class="flex justify-between py-2 pb-4 px-2">
      <div>
        <h2 class="text-xl font-bold">Notes</h2>
      </div>
      <div>
        <t-button
          variant="primary"
          default-size-class="h-8 w-8 py-0 px-0 text-primary-dark"
          to="/add-note"
        >
          <font-awesome-icon :icon="['fas', 'plus']" />
        </t-button>
      </div>
    </div>
    <transition name="slide-up" appear>
      <Notes/>
    </transition>
  </div>
</template>

<script>
import Notes from '@/components/Notes'

export default {
  data () {
    return {}
  },
  methods: {
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
