function countBy(x, n) {
  const result = [];
  let increment = 0;
  for (let i = 0; i < n; i++) {
    increment += x;
    result.push(increment);
  }
  return result;
}

console.log(countBy(1, 10));
