function validate(n) {
  let arr = n
    .toString()
    .split("")
    .map((el) => Number(el));
  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 === 1 && i % 2 === 1) arr[i] = arr[i] * 2;
    if (arr.length % 2 === 0 && i % 2 === 0) arr[i] = arr[i] * 2;
    if (arr[i].toString().length === 2) arr[i] = arr[i] - 9;
  }

  return arr.reduce((a, b) => a + b, 0) % 10 === 0;
}

console.log(validate(2121));
