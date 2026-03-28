export const getAssetPath = (path: string): string => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
};

export function getTodayKey(timeZone: string) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

const monthToNumber: Record<string, string> = {
  JAN: "01",
  FEB: "02",
  MAR: "03",
  APR: "04",
  MAY: "05",
  JUN: "06",
  JUL: "07",
  AUG: "08",
  SEP: "09",
  OCT: "10",
  NOV: "11",
  DEC: "12",
};

export function getMilestoneKey(date: string, year: string) {
  const firstDate = date.split(/[–-]/)[0].trim();
  const [monthLabel, day] = firstDate.split(/\s+/);
  const month = monthToNumber[monthLabel.toUpperCase()];

  if (!month || !day) {
    return null;
  }

  return `${year}-${month}-${day.padStart(2, "0")}`;
}
