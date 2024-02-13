function repeats(arr) {
  let total = 0;
  for (const num of arr) {
    const countArr = arr.filter((n) => n == num);
    if (countArr.length === 1) {
      total += countArr[0];
    }
  }
  return total;
}

console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]));
