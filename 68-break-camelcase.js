function solution(string) {
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    if (i !== 0 && /^[A-Z]*$/.test(string[i])) {
      string.splice(i, 0, " ");
      i += 1;
    }
  }
  return string.join("");
}
console.log(solution("camelCasingTest"));
