<template>
  <div>
    <t-card
      v-if="!deleting"
      class="border-l-4"
      :class="[
        ...(this.priority === 1 ? ['border-red-500'] : []),
        ...(this.priority === 2 ? ['border-orange-500'] : []),
        ...(this.priority >= 3 ? ['border-primary-light'] : []),
      ]"
    >
      <p class="note-text relative">
        <t-dropdown
          variant="primary"
          trigger="hover"
          visible-arrow="false"
          class="note-menu"
          :button-props="{
            baseClass: 'bg-primary text-primary-light hover:bg-primary hover:text-white',
            defaultSizeClass: 'h-5 w-5 py-0 px-0 absolute top-0 right-0'
          }"
        >
          <template v-slot:button-content>
            <font-awesome-icon :icon="['fas', 'ellipsis-v']" />
          </template>
          <ul>
            <li>
              <router-link
                href="#"
                class="block no-underline px-4 py-2 hover:bg-primary-dark hover:font-bold"
                :to="'/edit-note/' + this.id"
              >
                Edit
              </router-link>
            </li>
            <li>
              <a
                href="#"
                class="block no-underline px-4 py-2 hover:bg-primary-dark hover:font-bold"
                @click="deleteNote()"
              >
                Delete
              </a>
            </li>
          </ul>
        </t-dropdown>
        <markdown-it-vue :content="getFirstEmoji(type) + ' ' + note" />
      </p>
      <div class="pt-3 text-primary-light flex justify-between">
        <div><a @click="openLinkInNewTab('mailto:' + author.email)" href="#">{{ author.name }}</a></div>
        <div :title="modified">{{ modified | moment("from") }}</div>
      </div>
    </t-card>
    <div v-else>
      <SkeletonTheme color="#006064" highlight="#00686b">
        <div class="grid grid-cols-1 gap-3">
          <Skeleton height="25px"/>
        </div>
      </SkeletonTheme>
    </div>
  </div>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import { Skeleton, SkeletonTheme } from 'vue-loading-skeleton'

export default {
  props: {
    id: {
      type: String,
      default: ''
    },
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
    return {
      deleting: false
    }
  },
  methods: {
    openLinkInNewTab: function (url) {
      chrome.tabs.create({ url })
    },
    getFirstEmoji: function (str) {
      const firstEmoji = str.match('(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c\ude32-\ude3a]|[\ud83c\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])')[0]
      return firstEmoji
    },
    deleteNote: function () {
      this.deleting = true
      this.$emit('deleteNote')
    }
  },
  components: {
    MarkdownItVue,
    Skeleton,
    SkeletonTheme
  }
}
</script>

<style lang="sass" scoped>
  .note-text:before
    content: ' '
    width: 15px
    float: right
    height: 1em
  .note-menu
    position: relative
    margin-right: -10px
</style>
