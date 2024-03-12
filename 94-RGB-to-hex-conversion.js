function rgb(r, g, b) {
  const pad = (d) => {
    return d.length === 1 ? "0" + d.toString() : d.toString();
  };
  let result = "";
  for (let itr of arguments) {
    if (itr < 0) itr = 0;
    if (itr > 255) itr = 255;
    result += pad(itr.toString(16).toUpperCase());
  }
  return result;
}

console.log(rgb(260, 247, 15));
