function solution(number) {
  const romanNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";
  for (const key in romanNum) {
    let temp = Math.floor(number / romanNum[key]);
    console.log(number / romanNum[key]);
    console.log(temp);
    number -= temp * romanNum[key];
    result += key.repeat(temp);
  }
  return result;
}

console.log(solution(1234));
