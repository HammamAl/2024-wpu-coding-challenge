function accum(s) {
  return s
    .split("")
    .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
    .join("-");
}

console.log(accum("ZpglnRxqenU"));
