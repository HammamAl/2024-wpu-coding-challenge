function persistence(num) {
  let count = 0;
  while (true) {
    if (num.toString().length === 1) break;
    const arr = num
      .toString()
      .split("")
      .map((n) => parseInt(n));
    num = arr.reduce((a, b) => a * b);
    count += 1;
  }
  return count;
}

console.log(persistence(25));
