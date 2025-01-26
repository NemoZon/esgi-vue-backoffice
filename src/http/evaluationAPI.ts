import type { Evaluation } from "@/data/entities/Evaluation";
import { evaluations } from "@/data/mocks/evaluations";

export async function getEvaluations(): Promise<Evaluation[]> {
  return evaluations;
}