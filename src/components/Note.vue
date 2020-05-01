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
          :visible-arrow="false"
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
        <markdown-it-vue :content="note" />
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

  .markdown-body
    /* These are technically the same, but use both */
    overflow-wrap: break-word
    word-wrap: break-word

    /* This is the dangerous one in WebKit, as it breaks things wherever */
    word-break: break-all
    /* Instead use this non-standard one: */
    word-break: break-word

    /* Adds a hyphen where the word breaks, if supported (No Blink) */
    hyphens: auto
</style>
