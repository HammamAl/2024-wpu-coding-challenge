function towerBuilder(nFloors) {
  let arr = [];
  for (let i = 1; i < nFloors * 2; i += 2) {
    let result = "";
    result += " ".repeat((nFloors * 2 - i) / 2);
    result += "*".repeat(i);
    result += " ".repeat((nFloors * 2 - i) / 2);
    arr.push(result);
  }

  return arr;
}

console.log(towerBuilder(6));
