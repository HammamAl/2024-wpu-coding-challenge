function dnaStrand(dna) {
  objStr = {"A" : "T", 
            "T" : "A",
            "C" : "G",  
            "G" : "C"};
  return dna.split("").map((el) => objStr[el]).join("")
}

console.log(dnaStrand("ATTGC"));
