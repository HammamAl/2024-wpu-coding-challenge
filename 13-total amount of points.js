// function points(games) {
//   let total = 0;
//   for (const string of games) {
//     const temp = string.split(":");
//     const string1 = Number(temp[0]);
//     const string2 = Number(temp[1]);
//     if (string1 > string2) {
//       total += 3;
//     } else if (string1 === string2) {
//       total += 1;
//     }
//   }
//   return total;
// }

const points = (games) => games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0);

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
