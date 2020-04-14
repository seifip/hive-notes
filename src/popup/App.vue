<template>
  <div class="container px-4 py-4 h-full bg-primary-dark text-white font-sans">
    <router-view class="h-full"></router-view>
  </div>
</template>

<script>
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap")

html
  width: 400px
  line-height: 1.15
  min-height: 550px
  max-height: 550px

body
  min-height: 100vh

.container
  min-height: 100vh

/* MARKDOWN */
/* Global */
.markdown-body
  @apply leading-relaxed

/* Headers */
.markdown-body h1
  @apply text-lg mt-3 font-bold
.markdown-body h2
  @apply mt-2 uppercase font-bold

/* Links */
.markdown-body a
  @apply underline
.markdown-body a:hover
  @apply font-bold

/* Paragraph */
.markdown-body p
  @apply mb-4

/* Lists */
.markdown-body ul,
.markdown-body ol
  @apply my-1 ml-4
.markdown-body li > p,
.markdown-body li > ul,
.markdown-body li > ol
  @apply mb-0
.markdown-body ol
  @apply list-decimal
.markdown-body ul
  @apply list-disc

/* Blockquotes */
.markdown-body blockquote
  @apply italic border-l-2 pl-2 my-1
.markdown-body blockquote > p
  @apply mb-0

/* TRANSITIONS */
.fade-enter-active, .fade-leave-active
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0

.slide-up-enter-active
  transition: all .3s ease
.slide-up-enter
  transform: translateY(30px)
  opacity: 0

.slide-right-enter-active
  transition: all .3s ease
.slide-right-enter
  transform: translatex(20px)
  opacity: 0
</style>
