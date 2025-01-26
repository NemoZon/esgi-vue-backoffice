import type { Class } from "@/data/entities/Class";
import { classes } from "@/data/mocks/classes";

export async function getClasses(): Promise<Class[]> {
  return classes;
}