function computerPlay() {
  let randomNum = Math.floor(Math.random() * 100) + 1;

  if (randomNum <= (1/3) * 100) {
    return 'rock';
  } else if (randomNum <= (2/3) * 100) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection) {
  const roundResult = document.createElement('p');
  roundResult.setAttribute('class', 'log round-result');

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    roundResult.textContent = `You win! Rock crushes scissors!`;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    roundResult.textContent = `You win! Paper covers rock!`;
    playerScore++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    roundResult.textContent = `You win! Scissors cuts paper!`;
    playerScore++;
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    roundResult.textContent = `You lose! Rock crushes scissors!`;
    computerScore++;
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    roundResult.textContent = `You lose! Paper covers rock!`;
    computerScore++;
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    roundResult.textContent = `You lose! Scissors cuts paper!`;
    computerScore++;
  } else {
    roundResult.textContent = `Tie! You both chose ${computerSelection}!`;
  }
  game(roundResult);
}

function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

function game(roundResult) {
  const roundNumber = document.createElement('p');
  const endgameResult = document.createElement('p');
  const roundResultContainer = document.createElement('div');
  const endgameResultContainer = document.createElement('div');

  roundResultContainer.setAttribute('class', 'round-result-container');
  roundNumber.setAttribute('class', 'log round-number');

  roundResultContainer.addEventListener('click', e => {
    e.currentTarget.classList.toggle('round-result-container-selected');
  });

  endgameResultContainer.addEventListener('click', e => {
    e.currentTarget.classList.toggle('round-result-container-selected');
  });

  PLAYER_SCORE.textContent = `You: ${playerScore}`;
  COMPUTER_SCORE.textContent = `Computer: ${computerScore}`;

  roundNumber.textContent = `round.js:${i}`;
  roundResultContainer.appendChild(roundResult);
  roundResultContainer.appendChild(roundNumber);

  consoleBody.prepend(roundResultContainer);
  i++;

  if (playerScore === 5 || computerScore === 5) {
    endgameResult.setAttribute('class', 'log round-result');
    endgameResultContainer.setAttribute('class', 'round-result-container')
    
    disableButtons();

    btnContainer.appendChild(resetBtn);

    if (playerScore > computerScore) {
      endgameResult.textContent = 'Game over. You win!';
    } else {
      endgameResult.textContent = 'Game over. You lose!';
    }
    endgameResultContainer.appendChild(endgameResult);
    consoleBody.prepend(roundResultContainer);
    consoleBody.prepend(endgameResultContainer);
  }
}

let i = 1;
let playerScore = 0;
let computerScore = 0;

const btnContainer = document.querySelector('#buttons');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resetBtn = document.createElement('button');

const PLAYER_SCORE = document.querySelector('#player-score');
const COMPUTER_SCORE = document.querySelector('#computer-score');

const consoleBody = document.querySelector('#console-body');
const inputContainer = document.querySelector('#input-container');

resetBtn.setAttribute('class', 'button blue');
resetBtn.textContent = 'Play Again';

rockBtn.addEventListener('click', () => playRound('rock', computerPlay()));
paperBtn.addEventListener('click', () => playRound('paper', computerPlay()));
scissorsBtn.addEventListener('click', () => playRound('scissors', computerPlay()));
resetBtn.addEventListener('click', () => location.reload());