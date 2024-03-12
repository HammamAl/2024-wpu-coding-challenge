function pyramid(n) {
  return Array(n)
    .fill("")
    .map((el, i) => Array(i + 1).fill(1));
}

console.log(pyramid(3));
