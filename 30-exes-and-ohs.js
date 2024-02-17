function XO(str) {
  const arr = str.toLowerCase().split("");
  return arr.filter((n) => n === "x").length === arr.filter((n) => n === "o").length;
}

console.log(XO("xxOo"));
