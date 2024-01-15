/****** Descending Order ******/
/*Ваше завдання полягає в тому, щоб створити функцію, яка може приймати будь-яке невід’ємне ціле число як аргумент і повертати його разом із цифрами в порядку спадання. По суті, переставте цифри, щоб отримати найбільше можливе число.*/

function descendingOrder(n) {
  const arr = Array.from(String(n));
  const result = arr.sort((a, b) => b - a).join("");
  return Number(result);
}
// console.log(descendingOrder(1021));
