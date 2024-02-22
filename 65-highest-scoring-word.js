function high(x) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const arr = x.split(" ");
  const value = arr.map((el) =>
    el
      .split("")
      .map((n) => alphabet.indexOf(n) + 1)
      .reduce((a, b) => a + b, 0)
  );
  return arr[value.indexOf(Math.max(...value))];
}

console.log(high("man i need a taxi up to ubud"));
