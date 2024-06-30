function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let right = 0;
    let left = 0;

    for (let j = 0; j < i; j++) {
      left += arr[j];
    }
    for (let k = i + 1; k < arr.length; k++) {
      right += arr[k];
    }
    if (right === left) return i;
  }
  return -1;
}

console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));
