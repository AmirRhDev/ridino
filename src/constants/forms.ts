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

export const PROVINCES = [
  { id: "Alborz", label: "البرز" },
  { id: "Ardabil", label: "اردبیل" },
  { id: "East Azerbaijan", label: "آذربایجان شرقی" },
  { id: "West Azerbaijan", label: "آذربایجان غربی" },
  { id: "Bushehr", label: "بوشهر" },
  { id: "Chaharmahal and Bakhtiari", label: "چهارمحال و بختیاری" },
  { id: "Fars", label: "فارس" },
  { id: "Gilan", label: "گیلان" },
  { id: "Golestan", label: "گلستان" },
  { id: "Hamadan", label: "همدان" },
  { id: "Hormozgan", label: "هرمزگان" },
  { id: "Ilam", label: "ایلام" },
  { id: "Isfahan", label: "اصفهان" },
  { id: "Kerman", label: "کرمان" },
  { id: "Kermanshah", label: "کرمانشاه" },
  { id: "Khuzestan", label: "خوزستان" },
  { id: "Kohgiluyeh and Boyer-Ahmad", label: "کهگیلویه و بویراحمد" },
  { id: "Kurdistan", label: "کردستان" },
  { id: "Lorestan", label: "لرستان" },
  { id: "Markazi", label: "مرکزی" },
  { id: "Mazandaran", label: "مازندران" },
  { id: "North Khorasan", label: "خراسان شمالی" },
  { id: "Razavi Khorasan", label: "خراسان رضوی" },
  { id: "South Khorasan", label: "خراسان جنوبی" },
  { id: "Qazvin", label: "قزوین" },
  { id: "Qom", label: "قم" },
  { id: "Semnan", label: "سمنان" },
  { id: "Sistan and Baluchestan", label: "سیستان و بلوچستان" },
  { id: "Tehran", label: "تهران" },
  { id: "Yazd", label: "یزد" },
  { id: "Zanjan", label: "زنجان" },
];

export const GASTYPE = [
  {
    id: "gasoline",
    label: "بنزینی",
  },
  {
    id: "electric",
    label: "برقی",
  },
  {
    id: "hybrid",
    label: "هیبریدی",
  },
];

export const DIFFERENTIAL = [
  {
    id: "front",
    label: "محور جلو",
  },
  {
    id: "back",
    label: "محور عقب",
  },
  {
    id: "both",
    label: "دو دیفرانسیل",
  },
];

export const DEFAULT_VALUES = {
  images: [],
  title: "",
  year: "",
  notDriven: false,
  kilometers: undefined,
  gearbox: "",
  location: "",
  negotiated: false,
  price: undefined,
  clearBody: false,
  bodyStatus: "",
  gasType: "",
  color: "",
  insideColor: "",
  motor: undefined,
  acceleration: undefined,
  power: undefined,
  fuelConsumption: undefined,
  differential: "",
  description: "",
  phone: "",
};
