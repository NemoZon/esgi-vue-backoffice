export interface Absence {
  _id: string;
  isJustified: boolean;
  justification?: string;
  lesson: string;
  student: string;
}