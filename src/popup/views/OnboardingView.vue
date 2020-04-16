<template>
  <div>
    <transition name="slide-up" appear>
      <div>
        <div class="flex justify-start py-2 pb-6 px-2">
          <div>
            <h2 class="text-xl font-bold">Enter the Hive</h2>
            <h3 class="text-lg font-bold text-primary-light pt-2">To share website notes with your team, set your Airtable details below.</h3>
          </div>
        </div>
        <SettingsForm action="add"/>
      </div>
    </transition>
  </div>
</template>

<script>
import SettingsForm from '@/components/SettingsForm'

export default {
  components: {
    SettingsForm
  }
}
</script>
