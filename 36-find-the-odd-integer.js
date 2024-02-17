function findOdd(A) {
  return A.map((el) => A.filter((n) => n === el)).filter((x) => x.length % 2 === 1)[0][0];
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
