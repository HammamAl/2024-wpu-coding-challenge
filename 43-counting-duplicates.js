function duplicateCount(text) {
  const set = new Set(text.toLowerCase().split(""));
  const arr = text.toLowerCase().split("");
  let total = 0;
  for (const i of set) {
    if (arr.filter((el) => el === i).length > 1) {
      total += 1;
    }
  }
  return total;
}

console.log(duplicateCount("aA11"));
