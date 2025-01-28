<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-6 rounded shadow-lg w-96">
      <h2 class="text-xl font-bold mb-4">Add Evaluation</h2>
      <form @submit.prevent="submitEvaluation">
        <div class="mb-4">
          <label for="lesson" class="block text-sm font-medium text-gray-700">Lesson</label>
          <select id="lesson" v-model="selectedLesson" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option v-for="lesson in lessons" :key="lesson.id" :value="lesson.id">{{ objects.find(o => o.id === lesson.object)?.title }}</option>
          </select>
        </div>
        <div class="mb-4">
          <label for="grade" class="block text-sm font-medium text-gray-700">Grade</label>
          <input type="number" id="grade" v-model="grade" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
        </div>
        <div class="flex justify-end">
          <button type="button" @click="closeModal" class="mr-2 bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useLessons, type LessonDTO } from '@/store/lesson';
import { useObjects } from '@/store/object';

export default defineComponent({
  name: 'AddEvaluationModal',
  props: {
    onClose: {
      type: Function,
      required: true
    },
    onSubmit: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const lessonsStore = useLessons();
    const objectsStore = useObjects();

    if(!objectsStore.objects.length) {
      objectsStore.fetchObjects();
    }
    if (!lessonsStore.lessons.length) {
      lessonsStore.fetchLessons();
    }

    const selectedLesson = ref<string | null>(null);
    const grade = ref<number | null>(null);

    const closeModal = () => {
      props.onClose();
    };

    const submitEvaluation = () => {
      if (selectedLesson.value && grade.value !== null) {
        props.onSubmit({ lesson: selectedLesson.value, grade: grade.value });
        closeModal();
      }
    };

    const objects = objectsStore.objects;
    const lessons = lessonsStore.lessons;

    return {
      lessons,
      objects,
      selectedLesson,
      grade,
      closeModal,
      submitEvaluation
    };
  }
});
</script>

<style scoped>
</style>