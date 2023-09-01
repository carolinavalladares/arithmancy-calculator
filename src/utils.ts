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

  let lifePathNumber;
  if (dateSum != 11 && dateSum != 22 && dateSum != 33) {
    lifePathNumber = reduceNumbers(dateSum);
  } else {
    lifePathNumber = dateSum;
  }

  // Character Number
  const nameArr = name.toLowerCase().split(" ");
  let nameSum = 0;
  for (let i = 0; i < nameArr.length; i++) {
    nameSum += calculateLetterNumbers(nameArr[i]);
  }

  let characterNumber;
  if (nameSum != 11 && nameSum != 22 && nameSum != 33) {
    characterNumber = reduceNumbers(nameSum);
  } else {
    characterNumber = nameSum;
  }

  // Heart Number
  const nameArrVowels = name
    .toLowerCase()
    .replace(/[^aeiou]/gi, "")
    .split(" ");

  let nameVowelsSum = 0;
  for (let i = 0; i < nameArrVowels.length; i++) {
    nameVowelsSum += calculateLetterNumbers(nameArrVowels[i]);
  }

  let heartNumber;
  if (nameVowelsSum != 11 && nameVowelsSum != 22 && nameVowelsSum != 33) {
    heartNumber = reduceNumbers(nameVowelsSum);
  } else {
    heartNumber = nameSum;
  }

  // Social Number
  const nameArrConsonants = name
    .toLowerCase()
    .replace(/[aeiou]/gi, "")
    .split(" ");

  let nameConsonantsSum = 0;
  for (let i = 0; i < nameArrConsonants.length; i++) {
    nameConsonantsSum += calculateLetterNumbers(nameArrConsonants[i]);
  }

  let socialNumber;
  if (
    nameConsonantsSum != 11 &&
    nameConsonantsSum != 22 &&
    nameConsonantsSum != 33
  ) {
    socialNumber = reduceNumbers(nameConsonantsSum);
  } else {
    socialNumber = nameSum;
  }

  return { lifePathNumber, characterNumber, socialNumber, heartNumber };
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
