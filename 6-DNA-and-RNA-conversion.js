function DNAtoRNA(dna) {
  let result = "";
  for (const i of dna) {
    if (i === "T") {
      result += "U";
    } else {
      result += i;
    }
  }
  return result;
}

console.log(DNAtoRNA("TTTT"));
