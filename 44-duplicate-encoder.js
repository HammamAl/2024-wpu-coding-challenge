function duplicateEncode(word) {
  const arr = word.toLowerCase().split("");
  let result = "";
  for (const i of arr) {
    if (arr.filter((el) => el === i).length === 1) {
      result += "(";
    } else {
      result += ")";
    }
  }
  return result;
}

console.log(duplicateEncode("(( @"));
