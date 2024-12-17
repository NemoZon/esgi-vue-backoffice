<script setup>
defineProps({
  msg: {
    type: String,
    default: "Hello"
  },
})
</script>

<template>
      <h1 class="text-green-900">{{ msg }}</h1>
</template>

<style scoped>
</style>
