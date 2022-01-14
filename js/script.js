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
    //playerScore++;
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
  } else if (computerSelection === 'Rock' && playerSelection === 'Scissors' ||
  computerSelection === 'Paper' && playerSelection === 'Rock' ||
  computerSelection === 'Scissors' && playerSelection === 'Paper') {
    //computerScore++;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
  } else {
    console.log(`Draw! You both chose ${computerSelection}!`);
  }
}