/****** Задача If ******/
// function testSize(num) {
//   // Змініть код лише під цим рядком
//   if (num < 5) {
//     return "Tiny";
//   } else if (num < 10) {
//     return "Small";
//   } else if (num < 15) {
//     return "Madium";
//   } else if (num < 20) {
//     return "Large";
//   } else {
//     return huge;
//   }
//   // Змініть код лише над цим рядком
// }

// console.log(testSize(13));

/****** Задача Гольф ******/
// const names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];

// function golfScore(par, strokes) {
//   if (strokes === 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes === par - 1) {
//     return names[2];
//   } else if (strokes === par) {
//     return names[3];
//   } else if (strokes === par + 1) {
//     return names[4];
//   } else if (strokes === par + 2) {
//     return names[5];
//   } else if (strokes >= par + 3) {
//     return names[6];
//   }
// }

// console.log(golfScore(4, 4));

/****** Вибір із багатьох варіантів за допомогою інструкцій switch ******/
// function caseInSwitch(val) {
//   let answer = "";

//   switch (val) {
//     case 1:
//       answer += "alpha";
//       break;
//     case 2:
//       answer += "beta";
//       break;
//     case 3:
//       answer += "gamma";
//       break;
//     case 4:
//       answer += "delta";
//   }

//   return answer;
// }

// console.log(caseInSwitch(4));

/****** Додавання опції за замовчуванням у операторах Switch ******/
// function switchOfStuff(val) {
//   let answer = "";
//   // Only change code below this line
//   switch (val) {
//     case "a":
//       answer += "apple";
//       break;
//     case "b":
//       answer += "bird";
//       break;
//     case "c":
//       answer += "cat";
//       break;
//     default:
//       answer += "stuff";
//       break;
//   }

//   // Only change code above this line
//   return answer;
// }

// console.log(switchOfStuff("b"));

/******Обробка ідентичних параметрів в інструкціях switch ******/
// function sequentialSizes(val) {
//   let answer = "";
//   // Змініть код лише під цим рядком
//   switch (val) {
//     case 1:
//     case 2:
//     case 3:
//       answer = "Low";
//       break;
//     case 4:
//     case 5:
//     case 6:
//       answer = "Mid";
//       break;
//     case 7:
//     case 8:
//     case 9:
//       answer = "High";
//   }
//   // Змініть код лише над цим рядком
//   return answer;
// }
// console.log(sequentialSizes(1));

/****** Заміна ланцюжків if else на switch ******/
// function chainToSwitch(val) {
//   let answer = "";
//   // Змініть код лише під цим рядком
//   switch (val) {
//     case "bob":
//       answer = "Marley";
//       break;
//     case 42:
//       answer = "The Answer";
//       break;
//     case 1:
//       answer = "There is no #1";
//       break;
//     case 99:
//       answer = "Missed me by this much!";
//       break;
//     case 7:
//       answer = "Ate Nine";
//   }

//   // Змініть код лише над цим рядком
//   return answer;
// }

// console.log(chainToSwitch(99));

/****** Підрахунок карт ******/
// let count = 0;

// function cardCount(card) {
//   switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       break;
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//   }

//   let result = count + " ";
//   if (count > 0) {
//     result += "Bet";
//   } else {
//     result += "Hold";
//   }

//   return result;
// }

// console.log(cardCount(2));
// console.log(cardCount(7));
// console.log(cardCount("K"));
// console.log(cardCount(4));

// Налаштування
// function phoneticLookup(val) {
//   let result = "";

//   // Змініть код лише під цим рядком
//   const lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie: "Chicago",
//     delta: "Denver",
//     echo: "Easy",
//     foxtrot: "Frank",
//   };

//   // Змініть код лише над цим рядком
//   return lookup[val];
// }

// phoneticLookup("charlie");

// // Налаштування
// function phoneticLookup(val) {
//   let result = "";

//   // Змініть код лише під цим рядком
//   const lookup = {
//     alpha: "Adams",
//     bravo: "Boston",
//     charlie: "Chicago",
//     delta: "Denver",
//     echo: "Easy",
//     foxtrot: "Frank",
//   };
//   result = lookup["val"];
//   // Змініть код лише над цим рядком
//   return result;
// }

// phoneticLookup("charlie");

/****** Маніпулювання складними об’єктами ******/
// const myMusic = [
//   {
//     artist: "Billy Joel",
//     title: "Piano Man",
//     release_year: 1973,
//     formats: ["CD", "8T", "LP"],
//     gold: true,
//   },
// ];

/****** Доступ до вкладених масивів ******/
// const ourPets = [
//   {
//     animalType: "cat",
//     names: ["Meowzer", "Fluffy", "Kit-Cat"],
//   },
//   {
//     animalType: "dog",
//     names: ["Spot", "Bowser", "Frankie"],
//   },
// ];

// ourPets[0].names[1];
// ourPets[1].names[0];

// const myPlants = [
//   {
//     type: "flowers",
//     list: ["rose", "tulip", "dandelion"],
//   },
//   {
//     type: "trees",
//     list: ["fir", "pine", "birch"],
//   },
// ];

/****** Колекція музичних альбомів ******/
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// // Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//   if (value === "") {
//     delete records[id][prop];
//   } else if (prop !== "tracks" && value !== "") {
//     records[id][prop] = value;
//   } else if (prop === "tracks" && value !== "") {
//     if (!records[id].hasOwnProperty("tracks")) {
//       records[id]["tracks"] = [];
//     }
//     records[id]["tracks"].push(value);
//   }
//   return records;
// }

// console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

/****** дебагер ******/
// for (let i = 0; i <= 10; i++) {
//   debugger;
//   console.log(i);
// }

/****** Ітерація з циклами while у JavaScript ******/
// const myArray = [];
// let i = 0;
// while (i <= 5) {
//   myArray.unshift(i);
//   i++;
// }
// // Змініть код лише під цим рядком
// console.log(myArray);

/****** Ітерація з циклами for у JavaScript ******/
// const myArray = [];
// for (let i = 0; i < 5; i++) {
//   myArray.push(i);
// }
// // Змініть код лише під цим рядком
// console.log(myArray);

/****** Зворотний рахунок за допомогою циклу for ******/
// const myArray = [];
// for (let i = 9; i > 0; i -= 2) {
//   myArray.push(i);
// }
// Змініть код лише під цим рядком
// console.log(myArray);

// const arr = [10, 9, 8, 7, 6];

// for (let i = 0; i < arr.length; i++) {
//   //   console.log(arr[i]);
// }
// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i];
// }
// console.log(total);

/****** Вкладення циклів for ******/
// function multiplyAll(arr) {
//   let product = 1;
//   // Змініть код лише під цим рядком
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }
//   // Змініть код лише над цим рядком
//   return product;
// }

// console.log(multiplyAll([[1, 2], [3]]));

/****** Цикл while ******/
// let clientCounter = 2;
// const maxClients = 24;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

/****** Цикл do...while ******/
// let password = "";

// do {
//   password = prompt("Ведіть пароль довший 4 символів");
// } while (password.length < 5);
// console.log("ввели пароль: ", password);

/****** Заміна циклів за допомогою рекурсії ******/
// function sum(arr, n) {
//   // Змініть код лише під цим рядком
//   if (n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
//   // Змініть код лише над цим рядком
// }
// console.log(sum([1, 2, 4, 6, 3, 5], 3));

// Налаштування

/****** Пошук профілю ******/
// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++) {
//     if (contacts[i].firstName === name) {
//       // Знайдено контакт з ім'ям name
//       if (contacts[i][prop] !== undefined) {
//         // Знайдено властивість prop для знайденого контакту
//         return contacts[i][prop];
//       } else {
//         // Властивість prop не знайдено для контакту з ім'ям name
//         return "No such property";
//       }
//     }
//   }

//   // Контакт з ім'ям name не знайдено
//   return "No such contact";
// }

// console.log(lookUpProfile("Bob", "number"));

/****** Завершіть функцію суми квадратів, щоб вона звела в квадрат кожне передане їй число, а потім підсумувала результати.
 ******/
// function squareSum(numbers) {
//   let sum = 0;
//   numbers.map((number) => (sum += Math.pow(number, 2)));
//   return sum;
// }

// console.log(squareSum([1, 2]));

/****** Напишіть функцію, яка приймає рядок фігурних дужок і визначає, чи правильний порядок дужок. Він повинен повернути true, якщо рядок дійсний, а falseякщо він недійсний. ******/
// function isValidBrackets(s) {
//   const stack = [];
//   const openingBrackets = "({[";
//   const closingBrackets = ")}]";

//   for (let i = 0; i < s.length; i++) {
//     const currentBracket = s[i];
//     if (openingBrackets.includes(currentBracket)) {
//       stack.push(currentBracket);
//     } else if (closingBrackets.includes(currentBracket)) {
//       const lastOpeningBracket = stack.pop();
//       console.log(lastOpeningBracket);
//       if (
//         openingBrackets.indexOf(lastOpeningBracket) !==
//         closingBrackets.indexOf(currentBracket)
//       ) {
//         return false; // Неспівпадіння в парах
//       }
//     }
//   }

//   return stack.length === 0; // Перевірка, чи стек порожній
// }
// console.log(isValidBrackets("()))"));

/****** practic freCodeCamp ******/
// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"],
// };

// function makeList(arr) {
//   const failureItems = [];

//   for (const item of arr) {
//     failureItems.push(`<li class="text-warning">${item}</li>`);
//   }

//   return failureItems;
// }

// const failuresList = makeList(result.failure);
// console.log(failuresList);

/****** practic freCodeCamp2 ******/
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }
// // console.log(User);

// const userRoman = new User("Roman", "rssdf");
// const userMihal = new User("Mihal", "ef");
// console.log(userRoman);
// console.log(userMihal);

// class Book {
//   constructor(author) {
//     this._author = author;
//   }
//   // getter
//   get writer() {
//     return this._author;
//   }
//   // setter
//   set writer(updatedAuthor) {
//     this._author = updatedAuthor;
//   }
// }
// const novel = new Book("anonymous");
// console.log(novel.writer);
// novel.writer = "newAuthor";
// console.log(novel.writer);

/****** Гетери й сетери для управління доступом до об’єкта ******/
// class Thermostat {
//   constructor(fahrenheit) {
//     this._fahrenheit = fahrenheit;
//   }

//   get temperature() {
//     return (5 / 9) * (this._fahrenheit - 32);
//   }

//   set temperature(celsius) {
//     this._fahrenheit = (celsius * 9.0) / 5 + 32;
//   }
// }
// // Змініть код лише над цим рядком

// const thermos = new Thermostat(76); // Налаштування у шкалі Фаренгейта
// let temp = thermos.temperature; // 24.44 градусів за Цельсієм
// thermos.temperature = 20;
// temp = thermos.temperature; // 26 градусів за Цельсієм
// console.log(temp);

/****** Фільтрування списку ******/
// function filter_list(l) {
//   const array = [];
//   for (const value of l) {
//     if (typeof value === "number") {
//       array.push(value);
//     }
//   }
//   return array;
// }
// console.log(filter_list([1, 2, "a", "b"]));

/****** Фільтрування списку через Filter і стрілочну функцію******/
// const filter_list = (l) => l.filter((el) => typeof el === "number");
// console.log(filter_list([1, 2, "a", "b"]));

/****** Повернути Негативний ******/
// function makeNegative(num) {
//   return num > 0 ? -num : num;
// }
// console.log(makeNegative(1));
// console.log(makeNegative(-5));
// console.log(makeNegative(0));
// console.log(makeNegative(0.12));

function longest(s1, s2) {
  // Об'єднати унікальні літери з обох рядків
  const uniqueLetters = Array.from(new Set(s1 + s2));
  console.log(uniqueLetters);
  // Відсортувати літери
  const sortedLetters = uniqueLetters.sort();

  // З'єднати відсортовані літери в один рядок
  const result = sortedLetters.join("");

  return result;
}

// Приклад використання:
const s1 = "xyaabbbccccdefww";
const s2 = "xxxxyyyyabklmopq";

const result = longest(s1, s2);
console.log(result); // Виведе "abcdefklmopqwxy"
