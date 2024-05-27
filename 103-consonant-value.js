function solve(s) {
  const alphaVal = " abcdefghijklmnopqrstuvwxyz";
  const alphaFil = s.split(/[aiueo]/g);
  return Math.max(
    ...alphaFil.map((n) =>
      n
        .split("")
        .map((al) => alphaVal.indexOf(al))
        .reduce((a, b) => a + b, 0)
    )
  );
}

console.log(solve("strength"));
