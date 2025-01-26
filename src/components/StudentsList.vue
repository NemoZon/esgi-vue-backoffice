<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Students List</h1>
    <div v-if="students.length === 0" class="text-center text-gray-500">
      No students available.
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <StudentCard
        v-for="student in students"
        :key="student.id"
        :student="student"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch } from 'vue';
import StudentCard from './StudentCard.vue';
import { useUsers } from '@/store/user';
import { useClasses } from '@/store/class';

export default defineComponent({
  name: 'StudentsList',
  components: {
    StudentCard
  },
  setup() {
    const usersState = useUsers();  
    const classesState = useClasses();    

    usersState.fetchUsers();
    classesState.fetchClasses();

    const students = computed(() => usersState.students);

    return { students };
  },
});
</script>