const startYear = 1387;
const currentYear = 1404;
export const YEARS = Array.from(
  { length: currentYear - startYear + 1 },
  (_, i) => {
    const year = (currentYear - i).toString();
    return { id: year, label: year };
  },
);

export const GEARBOX = [
  {
    id: "auto",
    label: "اتوماتیک",
  },
  {
    id: "manual",
    label: "دستی",
  },
];
