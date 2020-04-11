<template>
  <div class="container px-4 py-4 h-full bg-primary-dark text-white font-sans">
    <router-view class="h-full"></router-view>
  </div>
</template>

<script>
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap")

html
  width: 400px
  line-height: 1.15
  min-height: 550px
  max-height: 550px

body
  min-height: 100vh

.container
  min-height: 100vh

/* Router transitions */
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
