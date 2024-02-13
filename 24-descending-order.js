// function descendingOrder(n) {
//   n = n.toString().split("");
//   n.sort((a, b) => a - b);
//   n.reverse();
//   return parseInt(n.join(""));
// }

function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}
console.log(descendingOrder(1021));
