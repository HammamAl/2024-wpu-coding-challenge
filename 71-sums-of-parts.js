function partsSums(ls) {
  let result = [0];
  for (const i in ls.reverse()) {
    result.push(ls[i] + result[i]);
  }
  return result.reverse();
}

console.log(partsSums([0, 1, 3, 6, 10]));
