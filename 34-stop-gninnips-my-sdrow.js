function spinWords(string) {
  const arr = string.split(" ");
  const result = [];
  for (const i of arr) {
    if (i.length >= 5) {
      result.push(i.split("").reverse().join(""));
      continue;
    }
    result.push(i);
  }
  return result.join(" ");
}

console.log(spinWords("Seriously this is the last one"));
