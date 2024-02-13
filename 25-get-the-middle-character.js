function getMiddle(s) {
  return s.length % 2 === 1 ? s[Math.round((s.length - 1) / 2)] : s.slice(s.length / 2 - 1, s.length / 2 + 1);
}
console.log(getMiddle("tesst"));
