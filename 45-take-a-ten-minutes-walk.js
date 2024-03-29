function isValidWalk(walk) {
  let northSouth = 0;
  let westEast = 0;

  for (const i of walk) {
    if (i === "n") northSouth += 1;
    if (i === "s") northSouth -= 1;
    if (i === "w") westEast += 1;
    if (i === "e") westEast -= 1;
  }
  return walk.length === 10 && northSouth === 0 && westEast === 0;
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
