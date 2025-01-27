<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 mb-4">
    <p><strong>Value:</strong> {{ evaluation.value }}</p>
    <p><strong>Lesson:</strong> {{ lessonTitle }}</p>
    <p><strong>Day:</strong> {{ day }}</p>
    <p><strong>Time:</strong> {{ startDate }} - {{ endDate }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { EvaluationDTO } from '@/store/evaluation';
import { useLessons } from '@/store/lesson';
import { useObjects } from '@/store/object';
import { getFormattedTime } from '@/tools/getFormattedTime';
import { getFormattedDate } from '@/tools/getFormattedDate';

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
    const objectsStore = useObjects();

    const lesson = computed(() => lessonsStore.lessons.find(l => l.id === props.evaluation.lesson));
    const object = computed(() => objectsStore.objects.find(o => o.id === lesson.value?.object));

    const lessonTitle = computed(() => object.value ? object.value.title : 'Unknown Lesson');
    
    return {
      lessonTitle,
      day: lesson.value ? getFormattedDate(lesson.value.startDate || lesson.value.endDate) : 'Unknown',
      startDate: lesson.value ? getFormattedTime(lesson.value.startDate): 'Unknown',
      endDate: lesson.value ? getFormattedTime(lesson.value.endDate) : 'Unknown',
    };
  }
});
</script>

<style scoped>
</style>