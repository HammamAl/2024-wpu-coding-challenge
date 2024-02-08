// let countSheep = function (num) {
//   result = "";
//   for (let i = 1; i < num + 1; i++) {
//     result += `${i} sheep...`;
//   }
//   return result;
// };

let countSheep = function (num) {
  return [...Array(num)].map((el, i) => `${i + 1} sheep...`).join("");
};

console.log(countSheep(5));
