console.log('hi');
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("Error");
  }
}

const getComputerChoice = () => {
  let rockPaperScissors = ['rock','paper','scissors'];
  return rockPaperScissors[Math.floor(Math.random()*3)];
}

const results = (gameResult, userInput, computerChoice) => {
  return (gameResult === 'tie') ? console.log(`You chose ${userInput}.\nThe computer chose ${computerChoice}.\nIt\'s a tie!`)
  : (gameResult === 'win') ? console.log(`You chose ${userInput}.\nThe computer chose ${computerChoice}.\nYou win!`)
  : console.log(`You chose ${userInput}\nThe computer chose ${computerChoice}.\nYou lose!`);
}

const determineWinner = (userInput, computerChoice) => {
  if (userInput === 'bomb') {
    return results('win',userInput, computerChoice);
  } else if (userInput === computerChoice) {
      return results('tie',userInput, computerChoice);
  } else if (userInput === 'rock') {
      if (computerChoice === 'paper' ) {
        return results('loss',userInput, computerChoice);
      } else {
        return results('win',userInput, computerChoice);
      }
  } else if (userInput === 'paper') {
      if (computerChoice === 'scissors' ) {
        return results('loss',userInput, computerChoice);
      } else {
        return results('win',userInput, computerChoice);
      }
  } else {
      if (computerChoice === 'rock' ){
        return results('loss',userInput, computerChoice);
      } else {
        return results('win',userInput, computerChoice);
    }
  }
}

const getRandomChoice = () => {
  let rockPaperScissors = ['rock','paper','scissors','bomb'];
  return rockPaperScissors[Math.floor(Math.random()*4)];
}

let playGame = () => {
  let userChoice = getRandomChoice();
  let computerChoice = getComputerChoice();
  determineWinner(userChoice, computerChoice);
}

playGame();

