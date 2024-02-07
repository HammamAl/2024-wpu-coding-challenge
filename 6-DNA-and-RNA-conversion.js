// function DNAtoRNA(dna) {
//   let result = "";
//   for (const i of dna) {
//     if (i === "T") {
//       result += "U";
//     } else {
//       result += i;
//     }
//   }
//   return result;
// }

// function DNAtoRNA(dna) {
//   let result = "";
//   for (const i of dna) {
//     i === "T" ? (result += "U") : (result += i);
//   }
//   return result;
// }

function DNAtoRNA(dna) {
  return dna
    .split("")
    .map((val) => (val === "T" ? (val = "U") : val))
    .join("");
}
console.log(DNAtoRNA("GCAT"));
