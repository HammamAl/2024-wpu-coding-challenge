function digitalRoot(n) {
  while (true) {
    if (n.toString().length === 1) return n;
    let arr = n.toString().split("");
    n = arr.map((el) => parseInt(el)).reduce((a, b) => a + b);
  }
}

console.log(digitalRoot(456));
