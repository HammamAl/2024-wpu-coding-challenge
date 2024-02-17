function arrayDiff(a, b) {
  //   return a.filter(function (x) {
  //     return b.indexOf(x) == -1;
  //   });

  const filterArr = (num) => {
    for (let i = 0; i < b.length; i++) {
      if (num === b[i]) {
        return false;
      }
    }
    return true;
  };
  return a.filter(filterArr);
}

console.log(arrayDiff([1, 2, 2], [2]));
