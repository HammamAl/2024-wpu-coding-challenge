// function countBy(x, n) {
//   const result = [];
//   for (let i = 1; i < n + 1; i++) {
//     result.push(x * i);
//   }
//   return result;
// }

// function countBy(x, n) {
//   return Array(n).fill().map((el, i) => (i+1)*x)
// }

const countBy = (x, n) => [...Array(n)].map((el, i) => (i + 1) * x);

console.log(countBy(2, 5));
