function productArray(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let total = 1;
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        total *= numbers[j];
      }
    }
    result.push(total);
  }
  //   return numbers.map(x => numbers.reduce((a,b) => a*b))
}

console.log(productArray([60, 85, 8, 79, 9, 9, 46, 7]));
