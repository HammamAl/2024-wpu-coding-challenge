function squareDigits(num) {
  const result = num
    .toString()
    .split("")
    .map((el) => Math.pow(parseInt(el), 2));
  return parseInt(result.join(""));
}

console.log(squareDigits(3212));
