function upArray(arr) {
  if (
    arr.join("").includes("-") ||
    arr
      .map((el) => el.toString().length)
      .join("")
      .includes(2) ||
    arr.length === 0
  )
    return null;
  let key = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    key -= 1;
    const temp = (arr[i] + 1).toString();
    if (temp.length === 2) key += 1;
    arr[i] = parseInt(temp[temp.length - 1]);
    if (temp[temp.length - 1] != 0) break;
  }
  if (key === 1) arr.unshift(key);
  return arr; 
}

console.log(upArray([1, 33]));
