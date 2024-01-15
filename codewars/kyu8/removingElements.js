/****** Removing Elements ******/
function removeEveryOther(arr) {
  return arr.filter((value, index) => index % 2 === 0);
}
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
