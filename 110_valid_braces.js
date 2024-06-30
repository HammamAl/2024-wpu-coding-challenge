function validBraces(braces) {
  const temp = [];
  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === "(" || braces[i] === "[" || braces[i] === "{") {
      temp.push(braces[i]);
    } else {
      if (temp.length === 0) return false;
      const lastVal = temp[temp.length - 1];
      if ((braces[i] === ")" && lastVal === "(") || (braces[i] === "]" && lastVal === "[") || (braces[i] === "}" && lastVal === "{")) {
        temp.pop();
      } else {
        break;
      }
    }
  }
  return temp.length === 0;
}

console.log(validBraces("({})[({})]"));
