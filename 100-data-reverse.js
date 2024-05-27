function dataReverse(data) {
  let result = [];
  let total = [];
  let temp = [];
  let count = 0;
  for (const num of data) {
    count += 1;
    temp.push(num);
    if (count === 8) {
      total.push(temp);
      count = 0;
      temp = [];
    }
  }
  total.reverse();
  for (const arr of total) {
    result = result.concat(arr)
  }
  return result
}

console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]));
