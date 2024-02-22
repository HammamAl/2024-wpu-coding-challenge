function multiply(number) {
  const len = number.toString().replace("-", "").length;
  return number * Math.pow(5, len);
}

console.log(multiply(2));
