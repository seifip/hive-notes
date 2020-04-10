<template>
  <span>
    <div class="container px-4 py-4 h-full bg-primary-dark text-white font-sans">
      <router-view class="h-full"></router-view>
    </div>
  </span>
</template>

<script>
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");

html {
  width: 400px;
  line-height: 1.15;
  /* min-height: 400px; */
  max-height: 500px;
}

body {
  height: 100%;
}
</style>
