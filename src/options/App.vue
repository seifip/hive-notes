<template>
  <div class="bg-primary-dark">
    <div class="container max-w-3xl mx-auto px-4 py-4 h-full text-white font-sans">
      <div class="flex justify-between py-2 pb-4 px-2">
        <div class="max-w-lg">
          <a href="https://github.com/seifip/hive-notes/" target="_blank"><img class="my-4 mb-10" src="@/assets/img/logo-light.png" width="250px"></a>
          <h3 class="text-xl text-primary-light">
            You’re almost ready to start sharing website notes with your team 🐝
          </h3>
        </div>
        <div>
        </div>
      </div>
      <transition name="slide-up" appear>
        <SettingsForm action="add" tab="true" class="px-2"/>
      </transition>
    </div>
  </div>
</template>

<script>
import SettingsForm from '@/components/SettingsForm'

export default {
  name: 'App',
  components: {
    SettingsForm
  }
}
</script>

<style lang="sass">
  @import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap")

  html
    width: 100%
    line-height: 1.15
    min-height: 550px
    max-height: 550px

  body
    min-height: 100vh

  .container
    min-height: 100vh
</style>
