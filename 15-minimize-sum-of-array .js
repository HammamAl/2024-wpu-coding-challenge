function minSum(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let total = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    total += arr[i] * arr[arr.length - 1 - i];
  }
  return total;
}

console.log(minSum([12, 6, 10, 26, 3, 24]));
