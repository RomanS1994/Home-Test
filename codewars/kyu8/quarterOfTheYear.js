/****** Quarter of the year ******/
/****** var 1 ******/

const quarterOf = (month) => {
  let quarter = 0;
  if (month === 1 || month === 2 || month === 3) {
    quarter = 1;
  } else if (month === 4 || month === 5 || month === 6) {
    quarter = 2;
  } else if (month === 7 || month === 8 || month === 9) {
    quarter = 3;
  } else {
    quarter = 4;
  }
  return quarter;
};
// console.log(quarterOf(11));

/****** var2 ******/
// const quarterOf = (month) => {
//   return Math.ceil(month / 3);
// };
// // console.log(quarterOf(8));
