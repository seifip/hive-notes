<template>
  <div class="grid grid-cols-1">
    <div class="grid grid-cols-2 gap-4 py-2 px-4">
      <div>
        <h2 class="text-xl font-bold">Notes</h2>
      </div>
      <div>
        <t-button variant="primary" class="h-8 w-8 py-0 px-0 flex justify-center">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </t-button>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4">
      <t-card class="border-l-4 border-red-500">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sit perspiciatis laboriosam doloribus, aliquam, porro quasi reiciendis.</p>
      </t-card>
      <t-card class="border-l-4 border-orange-500">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sit perspiciatis laboriosam doloribus, aliquam, porro quasi reiciendis.</p>
      </t-card>
      <t-card class="border-l-4 border-primary-light">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sit perspiciatis laboriosam doloribus, aliquam, porro quasi reiciendis.</p>
      </t-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
