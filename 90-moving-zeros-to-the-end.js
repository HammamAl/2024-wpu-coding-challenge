function moveZeros(arr) {
  return arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0));
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
