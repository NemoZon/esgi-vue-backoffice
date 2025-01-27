import { addLeadingZero } from "./addLeadingZero";

export function getFormattedTime(date: Date): string {
  const hours = addLeadingZero(date.getHours());
  const minutes = addLeadingZero(date.getMinutes());

  return `${hours}:${minutes}`;
}