function flipNumber(n) {
  for (let i = 0; i < n.length; i++) {
    const arr = n.slice(0, i) + n.slice(i, n.length).split("").reverse().join("");
    n = arr;
  }
  return n;
}

console.log(flipNumber("0123456789"));
