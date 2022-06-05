let winners = [];
const selection = ['rock', 'paper', 'scissors'];

function resetGame() {
    winners = []; // resets winners array
    document.querySelector('.playerScore').textContent = 'Score: 0';
    document.querySelector('.computerScore').textContent = 'Score: 0';
    document.querySelector('.ties').textContent = 'Ties: 0';
    document.querySelector('.winner').textContent = ""; // reset to empty string
    document.querySelector('.playerChoice').textContent = ""; // reset to empty string
    document.querySelector('.computerChoice').textContent = ""; // reset to empty string
    document.querySelector('.reset').style.display = 'none'; // hide the reset button
}

function startGame() {
    let imgs = document.querySelectorAll('img'); // select all img elements
    imgs.forEach((img) => // goes through each img element
        img.addEventListener('click', () => { // adds click event listener to each img element
            if (img.id) { // if img element has an id e.g rock, paper, or scissors -
                playRound(img.id); // if img element has an id, use it to play/start round
            }
        })
    );
}

function playRound(playerChoice) {
    let wins = checkWins();
    if (wins >= 5) {
        return; // return will end the function if wins >= 5 immediately, otherwise game will keep going
    }

    const computerChoice = computerSelect(); // stores the return value of computerSelect into computerChoice

    const winner = checkWinner(playerChoice, computerChoice); // stores the return value of checkWinner into winner variable
    winners.push(winner); // pushes winner into winners array
    updateScore();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins(); // check to see if someone has won 5 rounds, if yes then display something else
    if (wins === 5) {
        displayEnd(); // display at the end of 5 rounds
    }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == 'Player').length;

    if (playerWins === 5) {
        document.querySelector(".winner").textContent =
        "You won 5 rounds!" // if the player has won 5 rounds
    } else {
        document.querySelector(".winner").textContent =
        "Sorry, the computer won 5 rounds..."; // if the computer has won 5 rounds
    }
    document.querySelector(".reset").style.display = "flex"; // makes the reset button visible at the end of 5 rounds
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == "Player").length;
  
    if (playerWins == 5) {
      document.querySelector(".winner").textContent =
        "You won 5 rounds!";
    } else {
      document.querySelector(".winner").textContent =
        "Sorry, the computer won 5 rounds";
    }
    document.querySelector(".reset").style.display = "flex";
  }
  
  function displayRound(playerChoice, computerChoice, winner) { // displays what the player, computer chose and who won the round
    document.querySelector(".playerChoice").textContent = `You chose: ${
      playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
    }`; // capitalises the player choice e.g 'rock" = 'Rock'
    document.querySelector(".computerChoice").textContent = `The computer chose: ${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }`; // capitalises the computer choice e.g 'rock" = 'Rock'
    displayRoundWinner(winner); // displays the round winner
  }
  
  function displayRoundWinner(winner) { // displays round winner
    if (winner == "Player") {
      document.querySelector(".winner").textContent = "You won the Round!";
    } else if (winner == "Computer") {
      document.querySelector(".winner").textContent =
        "The computer won the Round";
    } else {
      document.querySelector(".winner").textContent = "The round was a tie";
    }
  }
  
  function updateScore() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    document.querySelector(".playerScore").textContent = `Score: ${pWinCount}`; // updates playerScore DOM
    document.querySelector(".computerScore").textContent = `Score: ${cWinCount}`; // updates computerScore DOM
    document.querySelector(".ties").textContent = `Ties: ${ties}`; // updates tie DOM
  }
  
  function computerSelect() {
    const choice = selection[Math.floor(Math.random() * selection.length)];
    document.querySelector(`.${choice}`).classList.add('active') // adds a class to computer choice
    setTimeout(() => {
        document.querySelector(`.${choice}`).classList.remove('active');
    }, 700); // removes a class from computer choice after 700 milliseconds
    return choice;
  }
  
  function checkWins() { // counts how many times someone has won
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    return Math.max(pWinCount, cWinCount); // return the highest number between the two parameters
  }
  
  function checkWinner(playerSelection, computerSelection) {
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock")
    ) {
      return "Player"; // player beat computer
    } else if (playerSelection === computerSelection) {
      return "Tie"; // player selection is same as computer selection
    } else { 
      return "Computer"; // computer beat player
    }
  }
  
  startGame();