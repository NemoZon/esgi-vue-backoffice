<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomInput',
  props: {
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Enter text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  emits: ['update:value']
});
</script>

<template>
  <div>
    <label for="input" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      id="input"
      type="text"
      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>