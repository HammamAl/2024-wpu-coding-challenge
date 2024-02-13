// function disemvowel(str) {
//   const temp = str.split('')
//   let result = ''
//   for(let i = 0; i < temp.length; i++){
//     if('aiueoAIUEO'.includes(temp[i])){
//         continue
//     }
//     result += temp[i]

//   }
//   return result
// }

function disemvowel(str) {
  return str
    .split("")
    .filter((letter) => !"aiueo".includes(letter.toLowerCase()))
    .join("");
}

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
