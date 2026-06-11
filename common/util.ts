export const addCommasToNumber = (num): string => {
  const [integerPart, decimalPart] =
    num > 0 ? num.toString().split(".") : ["0", "0"];
  const formattedInteger = integerPart?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

export const DEFAULT_PHOTO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAtIIQOw5jWyYIJtRSN0hED8AAzrMNJQUz-kFxnu-HFPAmI49cwAZPLFrs1Dt79eiJWCj6fdXE1j5Gy-ZHdFpG3rmNy7Rof2mPAzqPqEonTiH38vKxbA5vD8J9DZa6M8sjKNquYo4FfIL3ygbiZ8fxgIVCWnDmQV9u82HV2v9znhyeY14J7_4vq5oeJIt1ACGSVonwLiLchPqk90oAtjG7iKBfBlUkh-6A9tTm0LI4l1s1NYBHNFyGkxD9V3tPUD0uWL6Z5CZCsM8o";

export const capitalizeFirstLetter = (str: string) => {
  if (!str) return str;

  return str.charAt(0).toUpperCase() + str.slice(1);
};
