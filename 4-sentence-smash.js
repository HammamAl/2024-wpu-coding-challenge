function smash(words) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if (i === words.length - 1) {
      break;
    }
    result += " ";
  }
  return result;
}

// const smash = (words) => words.join(" ");
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
