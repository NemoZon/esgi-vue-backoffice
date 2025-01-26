<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 mb-4">
    <div class="font-bold text-xl mb-2">Evaluation</div>
    <p><strong>Value:</strong> {{ evaluation.value }}</p>
    <p><strong>Lesson:</strong> {{ lessonTitle }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { EvaluationDTO } from '@/store/evaluation';
import { useLessons } from '@/store/lesson';

export default defineComponent({
  name: 'EvaluationCard',
  props: {
    evaluation: {
      type: Object as () => EvaluationDTO,
      required: true
    }
  },
  setup(props) {
    const lessonsStore = useLessons();

    const lesson = computed(() => lessonsStore.lessons.find(l => l.id === props.evaluation.lesson));

    const lessonTitle = computed(() => lesson.value ? `Lesson ${lesson.value.id}` : 'Unknown Lesson');

    return {
      lessonTitle
    };
  }
});
</script>

<style scoped>
</style>