import { getObjects } from "@/http/objectAPI";
import { defineStore } from "pinia";

export interface ObjectDTO {
  id: string;
  title: string;
  logo: string;
}

export interface ObjectState {
    objects: ObjectDTO[];
    error: Error | null;
}

export interface ObjectActions {
  addObjects: (objects: ObjectDTO[]) => void;
  fetchObjects: () => Promise<void>;
}

export const useEvaluations = defineStore<'objects', ObjectState, {}, ObjectActions>('objects', {
    state: (): ObjectState => ({
      objects: [],
      error: null,
    }),
    actions: {
      addObjects(objects: ObjectDTO[]) {
        this.objects.push(...objects);
      },
      async fetchObjects() {
        try {
          const objects = await getObjects();
          this.objects = objects.map((o) => ({ ...o, id: o._id }));
        } catch (error) {
          console.error(error);
          if (error instanceof Error) {
            this.error = error;
          }
        }
      }
    }
});