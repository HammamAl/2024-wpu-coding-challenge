function playPass(s, n) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const num = "0123456789";
  console.log(alphabet.indexOf("Z"));
  const shift = s.split("").map((el) => {
    if (!alphabet.includes(el) && !num.includes(el)) {
      return el;
    } else if (!alphabet.includes(el)) {
      return num[num.length - 1 - num.indexOf(el)];
    } else if (alphabet.indexOf(el) + n > alphabet.length - 1) {
      return alphabet[alphabet.indexOf(el) + n - alphabet.length];
    } else {
      return alphabet[alphabet.indexOf(el) + n];
    }
  });
  const letterCase = shift.map((el, i) => (i % 2 ? el.toLowerCase() : el.toUpperCase()));
  return letterCase.reverse().join("");
}

console.log(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2));
