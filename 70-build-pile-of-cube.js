function findNb(m) {
  let total = 0;
  for (let i = 1; i < Infinity; i++) {
    total += Math.pow(i, 3);
    if (total === m) {
      total = i;
      return total;
    }
    if (total > m) {
      return -1;
    }
  }
}

console.log(findNb(1000));
