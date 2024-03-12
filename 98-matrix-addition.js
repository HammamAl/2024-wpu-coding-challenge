function matrixAddition(a, b) {
  return Array(a.length)
    .fill("")
    .map((element, index) =>
      Array(a.length)
        .fill("")
        .map((el, i) => a[index][i] + b[index][i])
    );
}

console.log(
  matrixAddition(
    [
      [1, 2],
      [1, 2],
    ],
    [
      [2, 3],
      [2, 3],
    ]
  )
);
