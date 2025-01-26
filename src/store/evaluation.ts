import { getEvaluations } from "@/http/evaluationAPI";
import { defineStore } from "pinia";

export interface EvaluationDTO {
  id: string;
  value: number;
  lesson: string;
  student: string;
}

export interface EvaluationState {
    evaluations: EvaluationDTO[];
    error: Error | null;
}

export interface EvaluationActions {
  addEvaluations: (evaluations: EvaluationDTO[]) => void;
  fetchEvaluations: () => Promise<void>;
}

export const useEvaluations = defineStore<'evaluations', EvaluationState, {}, EvaluationActions>('evaluations', {
    state: (): EvaluationState => ({
      evaluations: [],
      error: null,
    }),
    actions: {
      addEvaluations(evaluations: EvaluationDTO[]) {
        this.evaluations.push(...evaluations);
      },
      async fetchEvaluations() {
        try {
          const evaluations = await getEvaluations();
          this.evaluations = evaluations.map((e) => ({ ...e, id: e._id }));
        } catch (error) {
          console.error(error);
          if (error instanceof Error) {
            this.error = error;
          }
        }
      }
    }
});