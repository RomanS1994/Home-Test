var humanYearsCatYearsDogYears = function (humanYears) {
  let arr = [1, 15, 15];
  arr[0] = humanYears;
  if (humanYears === 2) {
    arr[1] += 9;
    arr[2] += 9;
  } else if (humanYears > 2) {
    arr[1] = arr[1] + 9 + 4 * (humanYears - 2);
    arr[2] = arr[2] + 9 + 5 * (humanYears - 2);
  }
  return arr;
};
console.log(humanYearsCatYearsDogYears(2));
