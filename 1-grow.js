// WPU Coding Challenge 2024
// 1/366
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// function grow(x) {
//   total = 1;
//   for (const i of x) {
//     total *= i;
//   }
//   return total;
// }

// function grow(x) {
//   const total = x.reduce((acc, curr) => acc * curr, 1);
//   return total;
// }

const grow = (x) => x.reduce((acc, curr) => acc * curr);

console.log(grow([1, 2, 3, 4]));
