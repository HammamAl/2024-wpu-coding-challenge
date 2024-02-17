function createPhoneNumber(numbers) {
  const strVal = numbers.join("");
  return `(${strVal.slice(0, 3)}) ${strVal.slice(3, 6)}-${strVal.slice(6, 10)}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
