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
