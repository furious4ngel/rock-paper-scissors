let round = 1;
let playerPoints = 0;
let computerPoints = 0;
let playerSelection = '';

const buttonContainer = document.querySelector('#buttons');
const dialogButtons = document.querySelectorAll('#buttons *');
const consoleBody = document.querySelector('#console-body');
const inputContainer = document.querySelector('#input-container');

function computerPlay() {
  let computerSelection = '';
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerSelection = 'rock';
  } else if (randomNumber === 2) {
    computerSelection = 'paper';
  } else {
    computerSelection = 'scissors';
  }
  return computerSelection;
}

function playRound(playerSelection, computerSelection) {
  let roundResult = '';

  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    roundResult = 'You win! Rock crushes scissors!';
    playerPoints++;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    roundResult = 'You win! Paper covers rock!';
    playerPoints++;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    roundResult = 'You win! Scissors cuts paper!';
    playerPoints++;
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    roundResult = 'You lose! Rock crushes scissors!';
    computerPoints++;
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    roundResult = 'You lose! Paper covers rock!';
    computerPoints++;
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    roundResult = 'You lose! Scissors cuts paper!';
    computerPoints++;
  } else {
    roundResult = `Draw! You both chose ${computerSelection}!`;
  }
  return roundResult;
}

function displayRoundResult() {
  const roundResult = document.createElement('p');
  const roundNumber = document.createElement('p');
  const roundContainer = document.createElement('div');

  roundResult.classList.add('log', 'round-result');
  roundNumber.classList.add('log', 'round-number');
  roundContainer.classList.add('round-log-container');

  roundResult.textContent = `${playRound(playerSelection, computerPlay())}`;
  roundNumber.textContent = `round.js:${round}`;

  roundContainer.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('round-log-container--selected');
  });

  roundContainer.appendChild(roundResult);
  roundContainer.appendChild(roundNumber);
  consoleBody.prepend(roundContainer);

  round++;
}

function displayScores() {
  const playerScore = document.querySelector('#player-score');
  const computerScore = document.querySelector('#computer-score');

  playerScore.textContent = `You: ${playerPoints}`;
  computerScore.textContent = `Computer: ${computerPoints}`;
}

function endGame() {
  const replayButton = document.createElement('button');
  const endGameResult = document.createElement('p');
  const endGameResultContainer = document.createElement('div');

  endGameResult.classList.add('log', 'round-result');
  endGameResultContainer.classList.add('round-log-container');

  endGameResultContainer.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('round-log-container--selected');
  });

  replayButton.classList.add('button', 'blue');
  replayButton.textContent = 'Play Again';

  dialogButtons.forEach(button => {
    button.disabled = true;
    button.classList.add('button--disabled');
  });

  if (playerPoints > computerPoints) {
    endGameResult.textContent = 'Game over. You win!';
  } else {
    endGameResult.textContent = 'Game over. You lose!';
  }
  
  endGameResultContainer.appendChild(endGameResult);
  consoleBody.prepend(endGameResultContainer);
  buttonContainer.appendChild(replayButton);

  replayButton.addEventListener('click', () => {
    window.location.reload();
  });
}

function playGame() {
  dialogButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      if (e.currentTarget.id === 'rock') {
        playerSelection = 'rock';
      } else if (e.currentTarget.id === 'paper') {
        playerSelection = 'paper';
      } else {
        playerSelection = 'scissors';
      }

      displayRoundResult();
      displayScores();
      if (playerPoints === 5 || computerPoints === 5) {
        endGame();
      }
    });
  });
}

playGame();