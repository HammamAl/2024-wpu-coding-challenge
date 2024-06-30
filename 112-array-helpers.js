Array.prototype.square = function () {
  return this.map((el) => el ** 2);
};
Array.prototype.cube = function () {
  return this.map((el) => el ** 3);
};
Array.prototype.average = function () {
  return this.length === 0 ? NaN : this.reduce((acc, curr) => acc + curr) / this.length;
};
Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + curr, 0);
};
Array.prototype.even = function () {
  return this.filter((el) => el % 2 === 0);
};
Array.prototype.odd = function () {
  return this.filter((el) => el % 2 === 1);
};
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.even());
