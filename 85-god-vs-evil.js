function goodVsEvil(good, evil) {
  const goodVal = [1, 2, 3, 3, 4, 10];
  const evilVal = [1, 2, 2, 2, 3, 5, 10];
  let goodScore = 0;
  let evilScore = 0;
  for (let i = 0; i < goodVal.length; i++) {
    goodScore += goodVal[i] * good.split(" ").map((el) => Number(el))[i];
  }
  for (let i = 0; i < evilVal.length; i++) {
    evilScore += evilVal[i] * evil.split(" ").map((el) => Number(el))[i];
  }
  if (goodScore === evilScore) {
    return "Battle Result: No victor on this battle field";
  } else if (goodScore > evilScore) {
    return "Battle Result: Good triumphs over Evil";
  } else {
    return "Battle Result: Evil eradicates all trace of Good";
  }
}

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
