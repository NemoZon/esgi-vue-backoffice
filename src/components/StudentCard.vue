<template>
  <div class="container mx-auto p-4">
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full" :src="student.avatar" alt="Student Avatar">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ student.firstName }} {{ student.lastName }}</div>
        <p class="text-gray-700 text-base">{{ student.email }}</p>
        <p class="text-gray-700 text-base">Role: {{ student.role }}</p>
        <p class="text-gray-700 text-base">Evaluation: {{ student.evaluations }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { StudentDTO } from '@/store/user';

export default defineComponent({
  name: 'StudentCard',
  props: {
    student: {
      type: Object as () => StudentDTO,
      required: true
    }
  },
});
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>