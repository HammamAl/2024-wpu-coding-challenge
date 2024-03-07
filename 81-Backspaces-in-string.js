function cleanString(s) {
  let temp = [];
  for (const i of s) {
    if (i === "#") {
      temp.pop();
      continue;
    }
    temp.push(i);
  }
  return temp.join("");
}

console.log(cleanString("abc#d##c"));
