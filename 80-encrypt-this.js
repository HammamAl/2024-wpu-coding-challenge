let encryptThis = function (text) {
  let result = [];
  for (const i of text.split(" ")) {
    let temp = i.split("");
    let n = temp[1];
    temp[1] = temp[i.length - 1];
    temp[i.length - 1] = n;
    result.push(i.charCodeAt().toString() + temp.join("").slice(1));
  }
  return result.join(" ");
};

console.log(encryptThis("The more he saw the less he spoke"));
