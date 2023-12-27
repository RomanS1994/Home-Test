/****** повернути новий масив із подвоєнням кожного значення******/
// function maps(x) {
//   return x.map((element) => element * 2);
// }
// console.log(maps([1, 2, 3]));

/******  Напишіть функцію, щоб розділити рядок і перетворити його на масив слів.******/
// function stringToArray(string) {
//   return string.split(" ");
// }

// console.log(stringToArray("Robin Singh"));

/****** Ви знайдете голку в стозі сіна? ******/
// function findNeedle(haystack) {
//   const value = haystack.indexOf("needle");
//   let indexArr = [];

//   for (let i = 0; i < haystack.length; i++) {
//     // console.log(haystack[i]);
//     if (haystack[i] === "needle") {
//       indexArr.push(haystack[i]);
//     }
//   }
//   const indexvalue = indexArr.join();

//   return `found the ${indexvalue} at position ${value}`;
// }

// console.log(
//   findNeedle([
//     "3",
//     "123124234",
//     undefined,
//     "needle",
//     "world",
//     "hay",
//     2,
//     "3",
//     true,
//     false,
//   ])
// );

/****** Унікальний ел Ізограма  ******/
// function isIsogram(str) {
//   const array = str.split("");
//   const value = [];

//   for (const arr of array) {
//     const lowerCase = arr.toLowerCase();

//     if (!value.includes(lowerCase)) {
//       value.push(lowerCase);
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isIsogram("sdsda"));

/****** функцію обчислює індекс маси тіла (bmi = вага / зріст 2 ). ******/
// function bmi(weight, height) {
//   const degrees = Math.pow(height, 2);
//   const value = weight / degrees;
//   if (value <= 18.5) {
//     return "Underweight";
//   } else if (value <= 25.0) {
//     return "Normal";
//   } else if (value <= 30.0) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

// console.log(bmi(80, 1.8));

// /****** swich ******/
// function bmi(weight, height) {
//   const degrees = Math.pow(height, 2);
//   const value = weight / degrees;
//   console.log(value);

//   switch (true) {
//     case value <= 18.5:
//       return "Underweight";
//     case value <= 25.0:
//       return "Normal";
//     case value <= 30.0:
//       return "Overweight";
//     default:
//       return "Obese";
//   }
// }

// console.log(bmi(80, 1.8));
