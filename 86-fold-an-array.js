function foldArray(array, runs) {
  for (let i = 0; i < runs; i++) {
    const arr = array.length % 2 ? array.slice(0, Math.ceil(array.length / 2)) : array.slice(0, array.length / 2);
    const arr2 = array.length % 2 ? array.slice(Math.ceil(array.length / 2)).reverse() : array.slice(array.length / 2).reverse();
    for (let i = 0; i < arr2.length; i++) {
      arr[i] += arr2[i];
    }
    array = arr;
  }

  return array;
}

console.log(foldArray([5], 1));
