function wave(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") continue;
    let temp = str.split("");
    temp[i] = temp[i].toUpperCase();
    arr.push(temp.join(""));
  }
  return arr;
}

console.log(wave("hello"));
