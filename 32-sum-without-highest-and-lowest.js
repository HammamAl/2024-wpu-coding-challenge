function sumArray(array) {
  if (!Array.isArray(array)) return 0;
  const arr = [...array];
  array.splice(array.indexOf(Math.max(...arr)), 1);
  array.splice(array.indexOf(Math.min(...arr)), 1);
  return array.length === 0 ? 0 : array.reduce((a, b) => a + b);
}

console.log(sumArray([-6, 20, -1, 10, -12]));
