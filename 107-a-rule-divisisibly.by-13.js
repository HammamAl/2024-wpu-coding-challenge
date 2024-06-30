function thirt(n) {
  const objNum = { 0: 1, 1: 10, 2: 9, 3: 12, 4: 3, 5: 4 };

  while (true) {
    let count = 0;
    let total = 0;
    for (const num of String(n).split("").reverse().join("")) {
      if (count === 6) count = 0;
      total += objNum[count] * Number(num);
      count += 1;
    }
    n = total;
    if (String(total).split("").length === 2) return n;
  }
}

console.log(thirt(8529));
