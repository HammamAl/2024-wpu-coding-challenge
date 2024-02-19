let uniqueInOrder = function (iterable) {
  let arr = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === iterable[i + 1]) {
      continue;
    }
    arr.push(iterable[i]);
  }
  return arr;
};

console.log(uniqueInOrder([1, 2, 2, 3, 3]));
