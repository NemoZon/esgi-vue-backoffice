<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Student Detail</h1>
    <div v-if="student">
      <img :src="student.avatar" alt="Student Avatar" class="w-32 h-32 rounded-full mb-4">
      <p><strong>Name:</strong> {{ student.firstName }} {{ student.lastName }}</p>
      <p><strong>Email:</strong> {{ student.email }}</p>

      <div v-if="student.evaluations && student.evaluations.length">
        <h2 class="text-xl font-bold mt-4">Evaluations</h2>
        <ul>

          <li v-for="evaluation in evaluations" :key="evaluation.id">
            <Evaluation :evaluation="evaluation" />
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Loading student details...</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUsers } from '@/store/user';
import { useAbsences } from '@/store/absence';
import { useEvaluations } from '@/store/evaluation';
import type { StudentDTO } from '@/store/user';
import Evaluation from '@/components/Evaluation.vue';
import { useLessons } from '@/store/lesson';

export default defineComponent({
  name: 'StudentPage',
  components: {
    Evaluation
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const usersStore = useUsers();
    const absencesStore = useAbsences();
    const lessonsStore = useLessons();
    const evaluationsStore = useEvaluations();
    const student = ref<StudentDTO | null>(null);

    if (!absencesStore.absences.length) {
      absencesStore.fetchAbsences();
    }
    if (!lessonsStore.lessons.length) {
      lessonsStore.fetchLessons();
    }
    if (!evaluationsStore.evaluations.length) {
      evaluationsStore.fetchEvaluations();
    }

    onMounted(() => {
      const studentId = route.params.id;
      student.value = usersStore.students.find(s => s.id === studentId) || null;
      if (!student.value) {
        router.push({ name: '/' });
      }
    });

    const evaluations = computed(() => {
      return evaluationsStore.evaluations.filter(e => e.student === student.value?.id);
    });

    return { student, evaluations };
  }
});
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>