/**
  |============================
  |Таймери та час
  |============================
*/

/**
  |============================
  | N.2
  |============================
*/

/****** подивитись посилання ******/

// https://bool.dev/blog/detail/obyasnenie-event-loop-v-javascript-s-pomoshchyu-vizualizatsii

// https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

/****** setTimeout ******/
// console.log("before");

// const id = setTimeout(() => {
//   console.log("Time is over");
// }, 1000);

// console.log("after");

// console.time("for");
// for (let i = 0; i < 300; i++) {
//   console.log("i=>", i);
// }
// console.timeEnd("for");

/****** Видалення ******/
// clearTimeout(id)

/****** setInterval ******/
// const id = setInterval(() => {
//   console.log("setInterval");
// });

/****** Видалення ******/
// clearTimeout(id)

/**
  |============================
  | Проміси
  |============================
*/
/************ Практика ************/

// const date = new Date();
// console.log(date);

/************ Практика ************/
/*Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve(console.log("Success! Value passed to resolve function"));
    } else {
      reject(console.log("Error! Error passed to reject function"));
    }
  }, 2000);
});

console.log(promise);
promise.then();
*/

/************ Приклад 2 ************/
// Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Will run first
// console.log("Before promise.then()");
// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   (value) => {
//     console.log("onResolve call inside promise.then()");
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   (error) => {
//     console.log("onReject call inside promise.then()");
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log("After promise.then()");

/************ Приклад 3 метод .then()************/
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve(console.log("Success! Value passed to resolve function"));
//     } else {
//       reject(console.log("Error! Error passed to reject function"));
//     }
//   }, 2000);
// });

// promise.then(
//   (value) => console.log(value),
//   (error) => console.log(error)
// );

/************ Приклад 4 Метод  ************/
// Change value of isSuccess variable to call resolve or reject
const isSuccess = true;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
