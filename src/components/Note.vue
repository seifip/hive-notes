<template>
  <t-card class="border-l-4"
    :class="[
      ...(props.importance === 1 ? ['border-red-500'] : []),
      ...(props.importance === 2 ? ['border-orange-500'] : []),
      ...(props.importance >= 3 ? ['border-primary-light'] : []),
    ]"
  >
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sit perspiciatis laboriosam doloribus, aliquam, porro quasi reiciendis.</p>
    <div class="pt-2 text-primary-light flex justify-between">
      <div>Sabina</div>
      <div>2 weeks ago</div>
    </div>
  </t-card>
</template>

<script>
export default {
  name: 'Note',
  props: {
    importance: {
      type: Number,
      default: 3
    },
    type: {
      type: String,
      default: 'info'
    }
  },
  data () {
    return {}
  }
}
</script>
