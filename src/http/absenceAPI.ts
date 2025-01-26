import type { Absence } from "@/data/entities/Absence";
import { absences } from "@/data/mocks/absences";

export async function getAbsences(): Promise<Absence[]> {
  return absences;
}