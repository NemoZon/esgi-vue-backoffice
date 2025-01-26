import { getAbsences } from "@/http/absenceAPI";
import { defineStore } from "pinia";

export interface AbsenceDTO {
  id: string;
  isJustified: boolean;
  justification?: string;
  lesson: string;
  student: string;
}

export interface AbsenceState {
    absences: AbsenceDTO[];
    error: Error | null;
}

export interface AbsenceActions {
  addAbsences: (absences: AbsenceDTO[]) => void;
  fetchAbsences: () => Promise<void>;
}

export const useAbsences = defineStore<'absences', AbsenceState, {}, AbsenceActions>('absences', {
    state: (): AbsenceState => ({
      absences: [],
      error: null,
    }),
    actions: {
      addAbsences(absences: AbsenceDTO[]) {
        this.absences.push(...absences);
      },
      async fetchAbsences() {
        try {
          const absences = await getAbsences();
          this.absences = absences.map((a) => ({ ...a, id: a._id }));
        } catch (error) {
          console.error(error);
          if (error instanceof Error) {
            this.error = error;
          }
        }
      }
    }
});