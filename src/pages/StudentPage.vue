<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Student Detail</h1>
    <div v-if="student">
      <img :src="student.avatar" alt="Student Avatar" class="w-32 h-32 rounded-full mb-4">
      <p><strong>Name:</strong> {{ student.firstName }} {{ student.lastName }}</p>
      <p><strong>Email:</strong> {{ student.email }}</p>
      <p><strong>Evaluation:</strong> {{ student.evaluations }}</p>
    </div>
    <div v-else>
      <p>Loading student details...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useUsers, type StudentDTO } from '@/store/user';

export default defineComponent({
  name: 'StudentDetailPage',
  setup() {
    const route = useRoute();
    const usersStore = useUsers();
    const student = ref<StudentDTO>();

    onMounted(() => {
      const studentId = route.params.id;
      student.value = usersStore.students.find(s => s.id === studentId);
    });

    return { student };
  }
});
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>