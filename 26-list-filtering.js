function filter_list(l) {
  return l.filter((n) => Number.isInteger(n));
}

console.log(filter_list([1, 2, "a", "b"]));
