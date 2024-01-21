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
/************ Конспект ************/
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

/************ Приклад 4 Метод catch() ************/
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

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/************ Приклад 5 метод finally() ************/
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

// promise
//   .then((value) => console.log(value)) // "Success! Value passed to resolve function"
//   .catch((error) => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"

/************ Ланцюжки промісів ************/
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2);
//   }, 2000);
// });

// promise
//   .then((value) => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then((value) => {
//     console.log(value); // 30
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Final task");
//   });

/************ Промісифікація функцій ************/
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess("success value");
//     } else {
//       onError("error");
//     }
//   }, 2000);
// };

// const onFetchSuccess = (user) => {
//   console.log(user);
// };

// const onFetchError = (error) => {
//   console.error(error);
// };

// fetchUserFromServer("Mango", onFetchSuccess, onFetchError);

/************  Проміси lesson 1 ************/
/*
1. Асинхронний код завжди виконується після синхронного
2. У асинхронного коду є пріорітетність (різні черги виконнання задач)
МІКРОЗАДАЧІ: спосатку виконуються всі задачі з черги мікрозадач

МАКРОЗАДАЧІ: коли черга мікрозадач пуста виконуються всі макрозадачі
*/

/************ Мікро процеси ************/
// Promise;
// ResizeObserver;
// addEventListener;

/************ Макро процеси ************/
// setTimeout;
// setInterval;
// setImmediate;
// requestAnimationFrame;

/************ Практика ************/
/**** 1 ****/
// const promise = new Promise((resolve, reject) => {
//   const number = Math.random() > 0.5;
//   if (number) {
//     resolve("ok");
//   }
//   reject("error");
// });
// console.log(promise);
/**** 2 ****/
// const promise = new Promise((resolve, reject) => {
//   const number = Math.random() > 0.5;
//   setInterval(() => {
//     if (number) {
//       resolve("ok");
//     }
//     reject("error");
//   }, 2000);
// });

// setInterval(
//   promise.then(
//     (rezult) => console.log(rezult),
//     (error) => console.log(error)
//   ),
//   3000
// );

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

// promise
//   .then((value) => console.log(value)) // "Success! Value passed to resolve function"
//   .catch((error) => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log("Promise settled")); // "Promise settled"

// const promise = new Promise((res, rej) => {
//   const value = 5;
//   setTimeout(() => {
//     if (value) {
//       res(value + 5);
//     } else {
//       rej("error");
//     }
//   }, 2000);
// });

// promise.then((value) =>
//   setInterval(() => {
//     console.log(value);
//   }, 1000)
//
