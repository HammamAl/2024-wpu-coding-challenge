function toCamelCase(str) {
  str = str.replace(/-/g, " ");
  str = str.replace(/_/g, " ");
  const arr = str.split(" ");
  const sliceArr = arr.slice(1, arr.length);
  const result = sliceArr.map((el) => el[0].toUpperCase() + el.slice(1, el.lenght)).join("");
  return arr[0] + result;
}

console.log(toCamelCase("the_stealth_warrior"));
