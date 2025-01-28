<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Student Detail</h1>
    <div v-if="student">
      <img :src="student.avatar" alt="Student Avatar" class="w-32 h-32 rounded-full mb-4">
      <p><strong>Name:</strong> {{ student.firstName }} {{ student.lastName }} {{ isMe && "(you)" }}</p>
      <p><strong>Email:</strong> {{ student.email }}</p>
      <div v-if="student.evaluations && student.evaluations.length">
        <h2 class="text-xl font-bold mt-4">Evaluations</h2>
        <div>
          <EvaluationCard
            v-for="evaluation in studentEvaluations"
            :key="evaluation.id"
            :evaluation="evaluation"
          />
        </div>
      </div>
      <AddButton v-if="canEvaluate" @click="addEvaluation" />
    </div>
    <div v-else>
      <p>Loading student details...</p>
    </div>
    <AddEvaluationModal
      v-if="showModal"
      :lessons="lessons"
      @close="closeModal"
      @submit="submitEvaluation"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useUsers } from '@/store/user';
import { useAbsences } from '@/store/absence';
import { useEvaluations } from '@/store/evaluation';
import type { StudentDTO } from '@/store/user';
import EvaluationCard from '@/components/EvaluationCard.vue';
import { useLessons } from '@/store/lesson';
import { useObjects } from '@/store/object';
import { useSession } from '@/store/session';
import AddButton from '@/components/AddButton.vue';
import AddEvaluationModal from '@/components/AddEvaluationModal.vue';

export default defineComponent({
  name: 'StudentPage',
  components: {
    EvaluationCard,
    AddButton,
    AddEvaluationModal
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const session = useSession();

    const usersStore = useUsers();
    const absencesStore = useAbsences();
    const lessonsStore = useLessons();
    const evaluationsStore = useEvaluations();
    const objectsStore = useObjects();

    const student = ref<StudentDTO | null>(null);
    const showModal = ref(false);

    if (!usersStore.students.length) {
      usersStore.fetchUsers();
    }
    if (!absencesStore.absences.length) {
      absencesStore.fetchAbsences();
    }
    if (!lessonsStore.lessons.length) {
      lessonsStore.fetchLessons();
    }
    if (!evaluationsStore.evaluations.length) {
      evaluationsStore.fetchEvaluations();
    }
    if (!objectsStore.objects.length) {
      objectsStore.fetchObjects();
    }

    onMounted(() => {
      const studentId = route.params.id;
      student.value = usersStore.students.find(s => s.id === studentId) || null;
      if (!student.value) {
        router.push({ name: 'Home' });
      }
    });

    const studentEvaluations = computed(() => {
      if (student.value) {
        return student.value.evaluations
          .map(evaluationId => evaluationsStore.evaluations.find(e => e.id === evaluationId))
          .filter(evaluation => evaluation !== undefined);
      }
      return [];
    });

    const lessons = computed(() => lessonsStore.lessons);

    const addEvaluation = () => {
      showModal.value = true;
    };

    const closeModal = () => {
      showModal.value = false;
    };

    const submitEvaluation = (evaluation: { lesson: string; grade: number }) => {
      // Handle the submission of the new evaluation
      console.log('New Evaluation:', evaluation);
      // Add the new evaluation to the student's evaluations
      if (student.value) {
        evaluationsStore.addEvaluations([{
          id: Date.now().toString(),
          value: evaluation.grade,
          lesson: evaluation.lesson,
          student: student.value.id
        }]);
        student.value.evaluations.push(Date.now().toString());
      }
    };

    const isMe = computed(() => {
      return session.user?.id === student.value?.id;
    });

    const canEvaluate = computed(() => {
      return session.user?.role === 'Admin' || session.user?.role === 'Speaker';
    });

    return { isMe, canEvaluate, student, studentEvaluations, lessons, showModal, addEvaluation, closeModal, submitEvaluation };
  }
});
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>