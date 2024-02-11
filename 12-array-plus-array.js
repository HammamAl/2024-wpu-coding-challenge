// function arrayPlusArray(arr1, arr2) {
//   let total1 = 0;
//   let total2 = 0;
//   arr1.map((el) => (total1 += el));
//   arr2.map((el) => (total2 += el));

//   return total1 + total2;
// }

// function arrayPlusArray(arr1, arr2) {
//   let total = 0;

//   for (let i = 0; i < arguments.length; i++) {
//     for (let j = 0; j < arguments[i].length; j++) {
//       total += arguments[i][j];
//     }
//   }
//   return total;
// }

function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, curr) => acc + curr);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
