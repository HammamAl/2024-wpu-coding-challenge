function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) continue;
    for (let j = 0; j < array.length; j++) {
      if (i === j || array[j] % 2 === 0) continue;

      if (array[j] > array[i]) {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));
