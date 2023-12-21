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
