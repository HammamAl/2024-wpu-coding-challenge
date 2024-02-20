function findUniq(arr) {
  let result = [];
  arr.forEach((el) => {
    result.push(Array.from(new Set(el.toLowerCase())).sort().join(""));
  });
  const key = result.filter((el) => result.indexOf(el) === result.lastIndexOf(el))[0];
  return arr[result.indexOf(key)];
}

console.log(findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"]));
