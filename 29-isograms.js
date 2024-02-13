function isIsogram(str) {
  const arr = str.toLowerCase().split("");
  return arr.map((el) => arr.filter((n) => n === el).length).filter((num) => num > 1).length === 0;
}
