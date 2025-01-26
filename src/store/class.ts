import { getClasses } from "@/http/classesAPI";
import { defineStore } from "pinia";

export interface ClassDTO {
  id: string;
  title: string;
  students: string[];
}

export interface ClassState {
    classes: ClassDTO[];
    error: Error | null;
}

export interface ClassActions {
  addClasses: (user: ClassDTO[]) => void;
  fetchClasses: () => Promise<void>;
}

export const useClasses = defineStore<'classes', ClassState, {}, ClassActions>('classes', {
    state: (): ClassState => ({
      classes: [],
      error: null,
    }),
    actions: {
      addClasses(clesses: ClassDTO[]) {
        this.classes.push(...clesses);
      },
      async fetchClasses() {
        try {
          const classes = await getClasses();
          this.classes = classes.map((c) => ({ ...c, id: c._id }));
        } catch (error) {
          console.error(error);
          if (error instanceof Error) {
            this.error = error;
          }
        }
      }
    }
});