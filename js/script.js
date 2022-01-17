let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  
  if (randomNumber <= (1/3) * 100) {
    return 'Rock';
  } else if (randomNumber <= (2/3) * 100) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);

  if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
  playerSelection === 'Paper' && computerSelection === 'Rock' ||
  playerSelection === 'Scissors' && computerSelection === 'Paper') {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  } else if (computerSelection === 'Rock' && playerSelection === 'Scissors' ||
  computerSelection === 'Paper' && playerSelection === 'Rock' ||
  computerSelection === 'Scissors' && playerSelection === 'Paper') {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}!`;
  } else {
    return `Draw! You both chose ${computerSelection}!`;
  }
}

function game() {
  console.clear();
  
  for (let roundNumber = 1; roundNumber <= 5; roundNumber++) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();

    let roundResult = playRound(playerSelection, computerSelection);

    console.log(`Round ${roundNumber}: ${roundResult}`);
  }

  if (playerScore > computerScore) {
    console.log(`You win with the score ${playerScore}-${computerScore}!`);
  } else if (computerScore > playerScore) {
    console.log(`You lost with the score ${playerScore}-${computerScore}!`);
  } else {
    console.log(`It's a draw with the score ${playerScore}-${computerScore}!`);
  }
}
game();


