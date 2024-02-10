// const rps = (p1, p2) => {
//   const playerWon = (n) => `Player ${n} won!`;
//   if (p1 === p2) {
//     return "Draw!";
//   } else if (p1 === "scissors" && p2 === "paper") {
//     return playerWon(1);
//   } else if (p1 === "paper" && p2 === "rock") {
//     return playerWon(1);
//   } else if (p1 === "rock" && p2 === "scissors") {
//     return playerWon(1);
//   } else {
//     return playerWon(2);
//   }
// };

const rps = (p1, p2) => {
  const rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };
  if (p1 === p2) {
    return "Draw!";
  } else {
    return `Player ${rules[p1] === p2 ? 1 : 2} won!`;
  }
};

console.log(rps("scissors", "paper"));
