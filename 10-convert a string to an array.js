function stringToArray(string) {
  let result = [];
  let temp = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      temp += string[i];
    }
    if (string[i] === " " || i + 1 === string.length) {
      result.push(temp);
      temp = "";
    }
  }
  return result;
}

console.log(stringToArray(""));
