// let min = function (list) {
//   let initial = list[0];
//   for (const i of list) {
//     if (initial >= i) {
//       initial = i;
//     }
//   }
//   return initial;
// };

// let max = function (list) {
//   let initial = list[0];
//   for (const i of list) {
//     if (initial <= i) {
//       initial = i;
//     }
//   }
//   return initial;
// };

// const min = (list) => list.sort((a, b) => a - b)[0];
// const max = (list) => list.sort((a, b) => b - a)[0];

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
