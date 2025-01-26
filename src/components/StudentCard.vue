<template>
  <RouterLink :to="`/student/${student.id}`" class="container mx-auto p-4">
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img class="w-full" :src="student.avatar" alt="Student Avatar">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ student.firstName }} {{ student.lastName }}</div>
        <p class="text-gray-700 text-base">{{ student.email }}</p>
        <p class="text-gray-700 text-base">{{ classes.find((c) => student.class === c.id)?.title || 'No class' }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { StudentDTO } from '@/store/user';
import { useClasses } from '@/store/class';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'StudentCard',
  setup() {
    const classesState = useClasses();
    const classes = classesState.classes;
    return { classes };
  },
  props: {
    student: {
      type: Object as () => StudentDTO,
      required: true
    }
  },
});
</script>