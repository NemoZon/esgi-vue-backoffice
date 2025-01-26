import type { Lesson } from "../entities/Lesson";

export const lessons: Lesson[] = [
  {
    _id: "1",
    speaker: "2",
    object: "1",
    class: "1",
    room: "A11",
    startDate: new Date("2025-01-01T08:00:00Z"),
    endDate: new Date("2025-01-01T10:00:00Z"),
  },
  {
    _id: "2",
    speaker: "5",
    object: "3",
    class: "1",
    room: "A11",
    startDate: new Date("2025-01-01T10:15:00Z"),
    endDate: new Date("2025-01-01T12:15:00Z"),
  }
];