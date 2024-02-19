function order(words) {
  let temp = {};
  let result = [];
  words.split(" ").map((n) => {
    const int = n
      .split("")
      .filter((el) => "1234567890".includes(el))
      .join("");
    temp[int] = n;
  });
  for (const key in temp) {
    result.push(temp[key]);
  }
  return result.join(" ");
}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
