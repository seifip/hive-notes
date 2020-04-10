<template>
  <t-card class="border-l-4"
    :class="[
      ...(this.priority === 1 ? ['border-red-500'] : []),
      ...(this.priority === 2 ? ['border-orange-500'] : []),
      ...(this.priority >= 3 ? ['border-primary-light'] : []),
    ]"
  >
    <p><span class="font-bold">{{ getFirstEmoji(type) }}</span> {{ note }}</p>
    <div class="pt-3 text-primary-light flex justify-between">
      <div><a @click="openLinkInNewTab('mailto:' + author.email)" href="#">{{ author.name }}</a></div>
      <div>{{ modified | moment("from") }}</div>
    </div>
  </t-card>
</template>

<script>
export default {
  props: {
    priority: {
      type: Number,
      default: 3
    },
    type: {
      type: String,
      default: ''
    },
    note: {
      type: String,
      default: ''
    },
    author: {
      type: Object,
      default: undefined
    },
    modified: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  methods: {
    openLinkInNewTab: function (url) {
      chrome.tabs.create({ url })
    },
    getFirstEmoji: function (str) {
      const firstEmoji = str.match('(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c\ude32-\ude3a]|[\ud83c\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])')[0]
      return firstEmoji
    }
  }
}
</script>
