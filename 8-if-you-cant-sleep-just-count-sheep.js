let countSheep = function (num) {
  result = "";
  for (let i = 1; i < num + 1; i++) {
    result += i.toString() + " " + "sheep...";
  }
  return result;
};

console.log(countSheep(5));
