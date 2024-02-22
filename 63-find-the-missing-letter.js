function findMissingLetter(array) {
  const str = array.join("").toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const start = alphabet.indexOf(str[0]);
  const finish = start + array.length;
  const result = alphabet
    .slice(start, finish)
    .split("")
    .filter((el) => !str.includes(el));
  return /^[A-Z]*$/.test(array[0]) ? result[0].toUpperCase() : result[0];
}

console.log(findMissingLetter(["O", "Q", "R", "S"]));
