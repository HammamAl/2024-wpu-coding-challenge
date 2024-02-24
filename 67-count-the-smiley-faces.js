function countSmileys(arr) {
  return arr.filter((el) => {
    if (el.length === 2) {
      return ")D".includes(el[el.length - 1]) && ":;".includes(el[0]);
    }
    return ")D".includes(el[2]) && "-~".includes(el[1]) && ":;".includes(el[0]);
  }).length;
}

console.log(countSmileys([":D", ":~)", ";~D", ":)"]));
