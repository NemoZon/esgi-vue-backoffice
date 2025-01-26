import { getEvaluations } from "@/http/evaluationAPI";
import { getLessons } from "@/http/lessonAPI";
import { defineStore } from "pinia";

export interface LessonDTO {
  id: string;
  speaker: string;
  object: string;
  class: string;
  room: string;
  startDate: Date;
  endDate: Date;
}

export interface LessonState {
    lessons: LessonDTO[];
    error: Error | null;
}

export interface LessonActions {
  addLessons: (lessons: LessonDTO[]) => void;
  fetchLessons: () => Promise<void>;
}

export const useLessons = defineStore<'lessons', LessonState, {}, LessonActions>('lessons', {
    state: (): LessonState => ({
      lessons: [],
      error: null,
    }),
    actions: {
      addLessons(lessons: LessonDTO[]) {
        this.lessons.push(...lessons);
      },
      async fetchLessons() {
        try {
          const lessons = await getLessons();
          this.lessons = lessons.map((l) => ({ ...l, id: l._id }));          
        } catch (error) {
          console.error(error);
          if (error instanceof Error) {
            this.error = error;
          }
        }
      }
    }
});