function findOutlier(integers) {
  const odd = integers.filter((num) => num % 2 === 0);
  const even = integers.filter((num) => Math.abs(num % 2) === 1);
  return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier([-65430526, 44234692, -6999888, 54996360, 104157644, -120198568, 145115338, 165127232, -20586096, -87212620, 29694542, -168790066, 28071406, -13601161, -34532234, -14900618]));
