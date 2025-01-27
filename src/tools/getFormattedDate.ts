import { addLeadingZero } from "./addLeadingZero";

export function getFormattedDate(date: Date): string {
  const day = addLeadingZero(date.getDate());
  const month = addLeadingZero(date.getMonth() + 1);
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}