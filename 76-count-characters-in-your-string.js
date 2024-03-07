function count(string) {
  const set = new Set(string);
  let result = {};
  for (const val of set) {
    result[val] = string.split("").filter((el) => el === val).length;
  }
  return result;
}
console.log(count("ABA"));
