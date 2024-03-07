multiplicationTable = function (size) {
  return Array(size)
    .fill("")
    .map((element, index) =>
      Array(size)
        .fill("")
        .map((el, i) => (index + 1) * (i + 1))
    );
};

console.log(multiplicationTable(3));
