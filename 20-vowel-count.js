function getCount(str) {
  //   const result = str.split("").filter((n) => n === "a" || n === "i" || n === "u" || n === "e" || n === "o");
  const result = str.split("").filter((n) => "aiueo".includes(n));

  return result;
}

console.log(getCount("abracadabra"));
