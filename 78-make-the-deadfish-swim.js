function parse(data) {
  let result = [];
  let temp = 0;
  for (const i of data) {
    if (i === "i") temp += 1;
    if (i === "s") temp = temp ** 2;
    if (i === "d") temp -= 1;
    if (i === "o") result.push(temp);
  }
  return result;
}

console.log(parse("iiisdoso"));
