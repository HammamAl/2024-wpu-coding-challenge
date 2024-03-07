let findMissing = function (list) {
  const diff = (list[list.length - 1] - list[0]) / list.length;
  const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
  const arr = range(list[0], list[list.length - 1], diff);
  for (const num of list) {
    arr.splice(arr.indexOf(num), 1);
  }
  return arr[0];
};
console.log(findMissing([1, 3, 5, 9, 11]));
