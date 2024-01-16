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

function removeSmallest(arr) {
  if (!arr.length) {
    return [];
  }

  const minVal = Math.min(...arr);
  const minIndices = arr.reduce((indices, val, index) => {
    if (val === minVal) {
      indices.push(index);
    }
    return indices;
  }, []);

  // Create a new array without the element with the lowest value and the lowest index
  const newArr = arr.filter((_, index) => index !== minIndices[0]);

  return newArr;
}
// console.log(removeSmallest([5, 3, 2, 1, 4]));
