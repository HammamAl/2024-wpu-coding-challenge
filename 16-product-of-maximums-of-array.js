function maxProduct(numbers, size) {
  numbers.sort((a, b) => b - a);
  let total = 1;
  for (let i = 0; i < size; i++) {
    total *= numbers[i];
  }
  return total;
}

console.log(maxProduct([13, 12, -27, -302, 25, 37, 133, 155, -14], 5));
