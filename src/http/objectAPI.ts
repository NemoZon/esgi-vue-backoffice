import type { Object } from "@/data/entities/Object";
import { objects } from "@/data/mocks/objects";

export async function getObjects(): Promise<Object[]> {
  return objects;
}