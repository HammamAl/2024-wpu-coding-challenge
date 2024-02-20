function solution(str) {
  const iter = str.length % 2 === 0 ? str.length : str.length + 1;
  let arr = [];
  let temp = "";
  for (let i = 0; i < iter; i++) {
    if (i === str.length) {
      temp += "_";
    } else {
      temp += str[i];
    }
    if (temp.length == 2) {
      arr.push(temp);
      temp = "";
    }
  }
  return arr;
}

console.log(solution(""));
