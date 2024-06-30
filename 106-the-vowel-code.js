function encode(string) {
  const objStr = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return string
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((el) => ("aiueo".includes(el.toLowerCase()) ? objStr[el] : el))
        .join("")
    )
    .join(" ");
}

function decode(string) {
  const objNum = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u",
  };
  return string
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((el, i) => ("12345".includes(el) ? objNum[el] : el))
        .join("")
    )
    .join(" ");
}

console.log(decode("h2ll4"));
