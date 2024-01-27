function addBinary(a, b) {
  let sum = a + b;
  let str = "";

  while (sum > 0) {
    let remnant = sum % 2;
    str = remnant + str;
    sum = Math.floor(sum / 2);
  }
  return str;
}

// console.log(addBinary(5, 9));

//---------------------------------------------
//var 2
// function addBinary(a, b) {
//   return (a + b).toString(2);
// }
// метод toString(radix) -
// Метод toString у JavaScript може приймати один необов'язковий параметр
// - radix, який вказує систему числення, у яку необхідно перевести число.
