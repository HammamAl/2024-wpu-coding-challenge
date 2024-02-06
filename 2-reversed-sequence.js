// const reverseSeq = (n) => {
//   const arr = [];
//   for (let i = n; i > 1; i--) {
//     arr.push(i);
//   }
//   return arr;
// };

// const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i);
const reverseSeq = (n) =>
  Array(5)
    .fill()
    .map((el, i) => n - i);

console.log(reverseSeq(5));
