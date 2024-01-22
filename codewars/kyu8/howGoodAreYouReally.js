/**
 * Is your number greater than the average in the array
 * @param {*} classPoints array of numbers
 * @param {*} yourPoints your number
 * @returns true or false
 */
// function betterThanAverage(classPoints, yourPoints) {
//   let sum = 0;
//   for (const el of classPoints) {
//     sum += el;
//   }
//   const result = sum / classPoints.length;

//   return yourPoints > result;
// }
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 9));
//---------------------------------------------

// var 2//
const betterThanAverage = (classPoints, yourPoints) => {
  const result = classPoints.reduce((a, b) => (a += b) / yourPoints);
  return result < yourPoints;
};
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 9));
//---------------------------------------------
