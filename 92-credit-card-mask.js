function maskify(cc) {
  return cc
    .split("")
    .map((el, i) => (i > cc.length - 5 ? el : "#"))
    .join("");
}

console.log(maskify("4556364607935616"));
