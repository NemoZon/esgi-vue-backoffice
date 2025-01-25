<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Students List</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <StudentCard
        v-for="student in students"
        :key="student.id"
        :student="student"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StudentCard from './StudentCard.vue';
import type { StudentDTO } from '@/store/user';

export default defineComponent({
  name: 'StudentsList',
  components: {
    StudentCard
  },
  props: {
    students: {
      type: Array as () => StudentDTO[],
      required: true
    }
  }
});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>