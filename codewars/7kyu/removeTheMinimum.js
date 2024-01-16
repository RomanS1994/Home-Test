// function removeSmallest(numbers) {
//   const minNumber = Math.min(...numbers);
//   const arrResult = [];
//   for (const el of numbers) {
//     if (el !== minNumber || el) {
//       arrResult.push(el);
//     }
//   }
//   return arrResult;
// }

/****** var 2 ******/
function removeLowest(arr) {
  if (!arr.length) {
    return [];
  }

  const minVal = Math.min(...arr);
  const minIndices = arr.reduce((indices, val, index) => {
    console.log(indices, val, index);
    if (val === minVal) {
      indices.push(index);
    }
    return indices;
  }, []);

  // Remove the element with the lowest value and the lowest index
  arr.splice(minIndices[0], 1);

  return arr;
}
console.log(removeLowest([5, 3, 2, 1, 4]));
