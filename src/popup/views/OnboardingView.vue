<template>
  <div>
    <transition name="slide-up" appear>
      <div>
        <div class="flex justify-start py-2 pb-6 px-2">
          <div>
            <h2 class="text-xl font-bold">Enter the Hive</h2>
            <h3 class="text-lg font-bold text-primary-light pt-2">
              To share website notes with your team, set your Airtable details below.
              <a
                class="text-sm font-normal underline"
                href="#"
                @click="openOptionsTab()"
              >Detailed instructions</a>
            </h3>
          </div>
        </div>
        <SettingsForm action="add" />
      </div>
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
    openLinkInNewTab: function (url) {
      chrome.tabs.create({ url })
    },
    openOptionsTab: function (url) {
      chrome.runtime.openOptionsPage()
    }
  }
}
</script>
