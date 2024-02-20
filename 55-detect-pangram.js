function isPangram(string) {
  const filterStr = string
    .toLowerCase()
    .split("")
    .filter((el) => /[a-z]/i.test(el));
  const sortAlphabet = Array.from(new Set(filterStr)).sort();
  return sortAlphabet.join("") === "abcdefghijklmnopqrstuvwxyz";
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
