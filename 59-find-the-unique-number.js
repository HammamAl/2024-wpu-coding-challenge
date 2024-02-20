function findUniq(arr) {
  return arr.filter((el) => arr.indexOf(el) === arr.lastIndexOf(el))[0];
}

console.log(findUniq([3, 10, 3, 3, 3]));
