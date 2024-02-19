function duplicateEncode(word) {
  const arr = word.toLowerCase().split("");
  let result = "";
  for (const i of arr) {
    if (arr.indexOf(i) === arr.lastIndexOf(i)) {
      result += "(";
    } else {
      result += ")";
    }
  }
  return result;
}

console.log(duplicateEncode("Success"));
