function digPow(n, p) {
  const result = [...n.toString()].map((el, i) => Math.pow(parseInt(el), p + i)).reduce((a, b) => a + b) / n;
  return result % 1 === 0 ? result : -1;
}

console.log(digPow(89, 1));
