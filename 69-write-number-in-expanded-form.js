function expandedForm(num) {
  const arr = num.toString();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = "";
    if (arr[i] !== "0") {
      temp += arr[i] + "0".repeat(arr.length - 1 - i);
      result.push(temp);
    }
  }
  return result.join(" + ");
}

console.log(expandedForm(15436));
