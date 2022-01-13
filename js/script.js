function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  
  if (randomNumber <= (1/3) * 100) {
    return randomNumber + ' rock';
  } else if (randomNumber <= (2/3) * 100) {
    return randomNumber + ' paper';
  } else {
    return randomNumber + ' scissors';
  }
}