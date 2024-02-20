function findEvenIndex(arr) {
  let result = -1;
  for (let i = 1; i < arr.length; i++) {
    const left = arr.slice(0, i);
    const right = arr.slice(i + 1);
    if (left === right) {
      result = i;
    }
  }
  return result;
}

console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]));
