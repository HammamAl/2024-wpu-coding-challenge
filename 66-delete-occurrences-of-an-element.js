function deleteNth(arr, n) {
  const data = {};
  for (const i of new Set(arr)) {
    data[i] = arr.filter((el) => el === i).length;
  }
  for (const key of Object.keys(data)) {
    count = data[key];
    while (count > n) {
      arr.splice(arr.lastIndexOf(parseInt(key)), 1);
      count -= 1;
    }
  }
  return arr;
}

console.log(deleteNth([12, 39, 19, 39, 39, 19, 12], 1));
