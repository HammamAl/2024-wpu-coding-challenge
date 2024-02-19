function alphabetPosition(text) {
  const dict = "abcdefghijklmnopgrstuvwxyz";
  let regex = /^[a-zA-Z]+$/;
  const strText = text.toLowerCase().split("");
  let result = [];
  for (let i of strText) {
    if (regex.test(i)) {
      result.push(dict.indexOf(i) + 1);
    }
  }
  return result.join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
