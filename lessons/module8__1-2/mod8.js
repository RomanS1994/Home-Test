/**
  |============================
  | Lesson 15
  |============================
*/
/* --- ініціалізація НОДИ команда  npm init 
---   Одноразово
---   Встановлює файл package.json - для встановлення бібліотек.
*/

/****** Встановлення Babel ******/
/* для кросбраузерності (нові функції в старі)*/
/*
 *
 *
 *
 */
/**
  |============================
  | lesson 16
  |============================
*/ /****** Робота з локал сторедж ******/
// const LS_KEY = "Array of names";
// const names = ["Allice", "Kate", "Emma"];
// /****** Збереження в LocalStoreg ******/

// localStorage.setItem(LS_KEY, JSON.stringify(names));

/****** Читання з Ls ******/
// const value = localStorage.getItem(LS_KEY);
// console.log(value);
// console.log(JSON.parse(value));

/****** Видалення з лс ******/
// localStorage.removeItem(LS_KEY);

/******  Чому варто завжди використовувати json.stringify ******/
// const LS_KEY = "Array of names";
// const names = ["Allice", "Kate", "Emma"];

// localStorage.setItem(LS_KEY, names);
// const value = localStorage.getItem(LS_KEY);
// console.log(value);
// console.log(JSON.parse(value));

/****** try catch ******/
// try {
// } catch (error) {}

/*********** Практика ************/
// const LS_KEY = "Array of names";
// const LS_KEY2 = "Array 2";
// const name1 = ["Allice", "Kate", 5];
// const name2 = ["Ron", "Ron", "Ron"];

// localStorage.setItem(LS_KEY, name1);
// localStorage.setItem(LS_KEY2, JSON.stringify(name2));
// const values1 = localStorage.getItem(LS_KEY);
// const values2 = localStorage.getItem(LS_KEY2);
// console.log(values1);
// console.log(JSON.parse(values1));
// console.log(values2);
// console.log(JSON.parse(values2));

const dog = {
  names: "Mango",
  age: 3,
  isGoodBoy: true,
  bark() {
    // console.log("Woof!");
  },
};

const LS_KEY = "LS DOG";

localStorage.setItem(LS_KEY, JSON.stringify(dog));
const value = JSON.parse(localStorage.getItem(LS_KEY));

const { age, isGoodBoy, names } = value;
// console.log(toString(4));

// console.log(age);

const result = 5 - value.age;
// console.log(result);
