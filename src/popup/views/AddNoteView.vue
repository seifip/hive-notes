<template>
  <div>
    <div class="flex justify-between py-2 pb-4 px-2">
      <div>
        <h2 class="text-xl font-bold">New note</h2>
      </div>
      <div>
        <t-button
          variant="primary"
          default-size-class="h-8 w-8 py-0 px-0"
          to="/"
        >
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </t-button>
      </div>
    </div>
    <transition name="slide-up" appear>
      <NoteForm action="add"/>
    </transition>
  </div>
</template>

<script>
import NoteForm from '@/components/NoteForm'

export default {
  data () {
    return {}
  },
  methods: {
    openLinkInNewTab: function (url) {
      chrome.tabs.create({ url })
    }
  },
  components: {
    NoteForm
  }
}
</script>
