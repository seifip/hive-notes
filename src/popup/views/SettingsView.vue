<template>
  <div>
    <div class="flex justify-between py-2 pb-4 px-2">
      <div>
        <h2 class="text-xl font-bold">Settings</h2>
        <h3 class="text-lg font-bold text-primary-light pt-2">
        <a
          class="text-sm font-normal underline"
          href="#"
          @click="openOptionsTab()"
        >Detailed instructions</a>
      </h3>
      </div>
      <div>
        <t-button
          variant="primary"
          default-size-class="h-8 w-8 py-0 px-0 bg-primary border-primary"
          to="/"
        >
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </t-button>
      </div>
    </div>
    <transition name="slide-up" appear>
      <SettingsForm action="edit"/>
    </transition>
  </div>
</template>

<script>
import SettingsForm from '@/components/SettingsForm'

export default {
  components: {
    SettingsForm
  },
  methods: {
    openOptionsTab: function (url) {
      chrome.runtime.openOptionsPage()
    }
  }
}
</script>
