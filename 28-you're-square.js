let isSquare = function (n) {
  return Math.sqrt(n) % 2 === 1 || Math.sqrt(n) % 2 === 0;
};

console.log(isSquare());
