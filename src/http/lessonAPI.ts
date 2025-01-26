import type { Lesson } from "@/data/entities/Lesson";
import { lessons } from "@/data/mocks/lessons";


export async function getLessons(): Promise<Lesson[]> {
  return lessons;
}