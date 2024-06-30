function highestRank(arr) {
  let objArr = {};
  for (const set of new Set(arr)) {
    objArr[set] = arr.filter((n) => n === set).length;
  }
  const objVal = Object.values(objArr);
  const objEntries = Object.entries(objArr);
  const maxVal = Math.max(...objVal);
  if (objVal.filter((n) => n === maxVal).length > 1) {
    return Math.max(...[objEntries[objVal.indexOf(maxVal)][0], objEntries[objVal.lastIndexOf(maxVal)][0]]);
  } else {
    return Number(objEntries[objVal.indexOf(maxVal)][0]);
  }
}

console.log(highestRank([12, 8, 12, 7, 6, 4, 10, 10, 12]));
