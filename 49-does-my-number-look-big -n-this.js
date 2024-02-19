function narcissistic(value) {
  const arr = value.toString().split("");
  const total = arr.map((el) => Math.pow(el, arr.length));
  const result = total.reduce((a, b) => a + b);
  return result === value;
}

console.log(narcissistic(153));
