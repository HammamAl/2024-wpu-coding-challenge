function toWeirdCase(string) {
  return Array(string.split(" ").length)
    .fill("")
    .map((element, index) =>
      Array(string.split(" ")[index].length)
        .fill("")
        .map((el, i) => (i % 2 ? string.split(" ")[index][i] : string.split(" ")[index][i].toUpperCase()))
        .join("")
    )
    .join(" ");
}

console.log(toWeirdCase("This"));
console.log(toWeirdCase("This is a test"));
console.log(toWeirdCase("is"));
