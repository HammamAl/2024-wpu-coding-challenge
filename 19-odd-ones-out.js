function oddOnesOut(nums) {
  let result = [];
  for (const i of nums) {
    const arr = nums.filter((num) => num === i);
    if (arr.length % 2 === 0) {
      result.push(i);
    }
  }
  return result;
}
console.log(oddOnesOut([1, 2, 3, 1, 3, 3]));
