import { alphabetNumbers } from "./CONSTS";
import { IAlphabetNumbers } from "./types";

export function calculate(name: string, date: string) {
  // Life Path
  const [year, month, day] = date.split("-");

  const y = reduceNumbers(Number(year));
  const m = month == "11" ? Number(month) : reduceNumbers(Number(month));
  const d =
    day == "11" || "22" || "33" ? Number(day) : reduceNumbers(Number(day));
  const dateSum = y + m + d;

  const lifePath = reduceNumbers(dateSum);

  // Character Number
  const nameArr = name.toLowerCase().split(" ");
  let nameSum = 0;
  for (let i = 0; i < nameArr.length; i++) {
    nameSum += calculateLetterNumbers(nameArr[i]);
  }

  const characterNumber = reduceNumbers(nameSum);

  // Heart Number
  const nameArrVowels = name
    .toLowerCase()
    .replace(/[^aeiou]/gi, "")
    .split(" ");

  let nameVowelsSum = 0;
  for (let i = 0; i < nameArrVowels.length; i++) {
    nameVowelsSum += calculateLetterNumbers(nameArrVowels[i]);
  }

  const heartNumber = reduceNumbers(nameVowelsSum);

  // Social Number
  const nameArrConsonants = name
    .toLowerCase()
    .replace(/[aeiou]/gi, "")
    .split(" ");

  let nameConsonantsSum = 0;
  for (let i = 0; i < nameArrConsonants.length; i++) {
    nameConsonantsSum += calculateLetterNumbers(nameArrConsonants[i]);
  }

  const socialNumber = reduceNumbers(nameConsonantsSum);

  return { lifePath, characterNumber, socialNumber, heartNumber };
}

export function reduceNumbers(number: number) {
  const numberStr = number.toString();

  let sum = 0;

  for (let i = 0; i < numberStr.length; i++) {
    sum += Number(numberStr[i]);
  }

  while (sum.toString().length > 1) {
    let temp = 0;
    const sumStr = sum.toString();
    for (let i = 0; i < sumStr.length; i++) {
      temp += Number(sumStr[i]);
    }

    sum = temp;
  }

  return sum;
}

export function calculateLetterNumbers(str: string) {
  const arr = str.toLowerCase().split("");
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i];
    const number = alphabetNumbers[letter as keyof IAlphabetNumbers];

    sum += number;
  }

  while (sum.toString().length > 1 && sum != 11 && sum != 22 && sum != 33) {
    let temp = 0;
    const sumStr = sum.toString();
    for (let i = 0; i < sumStr.length; i++) {
      temp += Number(sumStr[i]);
    }

    sum = temp;
  }

  return sum;
}
