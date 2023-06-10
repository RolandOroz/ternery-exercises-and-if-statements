let playGAme = confirm("Shall we play rock, paper, or scisors?");

if (playGAme) {
  let playerChoice = prompt("Please, enter rock, paper, or scisors.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLocaleLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let compValue = Math.floor(Math.random() * 3 + 1);
      let computerCh =
        compValue === 1 ? "rock" : compValue === 2 ? "paper" : "scissors";

      let result =
        playerOne === computerCh
          ? `playerOne: ${playerOne}\nComputer: ${computerCh}\nTie Game`
          : playerOne === "rock" && computerCh === "paper"
          ? `playerOne: ${playerOne}\nComputer: ${computerCh}\nComputer wins!`
          : playerOne === "paper" && computerCh === "scissors"
          ? `playerOne: ${playerOne}\nComputer: ${computerCh}\nPlayerOne wins!`
          : playerOne === "scissors" && computerCh === "rock"
          ? `playerOne: ${playerOne}\nComputer: ${computerCh}\nComputer wins!`
          : `playerOne: ${playerOne}\nComputer: ${computerCh}\nPlayerOne Wins!`;
      alert(result);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Thanks for playing");
    } else {
      alert("You didnt enter rock, paper, or scisors.");
    }
  } else {
    alert("I guess you changed your mind.");
  }
} else {
  alert("ok, maybe later.");
}

//playGAme ? playerChoice : alertMsg;
