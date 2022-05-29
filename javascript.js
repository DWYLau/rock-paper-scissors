// 3 buttons for 3 selections - rock, paper, scissors

const btnrock = document.querySelector("#rock");
const btnpaper = document.querySelector("#paper");
const btnscissors = document.querySelector("#scissors");

// Event listeners - passing arguments to the game(playerSelection) function below 

btnrock.addEventListener('click', () => {
    console.log(game('rock'));
});

btnpaper.addEventListener('click', () => {
    console.log(game('paper'));
});

btnscissors.addEventListener('click', () => {
    console.log(game('scissor'));
});

// Display score

const display = document.querySelector('.display');

// Computer's outputs (3 Values - 0 = rock, 1 = paper, 2 = scissors)

function computerPlay() { 
    let num = Math.floor(Math.random() * 3);
    if (num === 0) { 
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else 
        return 'scissor';
}

// Displays scores

const displayScore = (playerSelection, computerSelection, result) => {
    let user = 0, computer = 0, tie = 0;
    let textContent = '';
    if (result === 'User') user++;
    else if (result === 'Computer') computer++;
    else ++tie;

    textContent = `
        <p>User: ${playerSelection}</p>
        <p>Computer: ${computerSelection}</p>
        <p>Result: ${result}</p>
        <p>User Score: ${user};
        <p>Computer Score: ${computer};
        <p>Ties: ${tie};
    `;

    display.innerHTML = textContent;

};

// 1 round of RPS + put displayScore function inside

function playRound(playerSelection, computerSelection) {
    let result;
    // User chooses rock outcomes
    if (playerSelection === 'rock' && (computerSelection === 'scissor')) {
        result = 'User';
    }   else if (playerSelection === 'rock' && (computerSelection === 'paper')) {
        result = 'Computer'
    } 
    // User chooses scissors outcomes
    else if (playerSelection === 'scissor' && (computerSelection === 'rock')) {
        result = 'Computer';
    }   else if (playerSelection === 'scissor' && (computerSelection === 'paper')) {
        result = 'User';
    }   
    // User chooses paper outcomes
    else if (playerSelection === 'paper' && (computerSelection === 'rock')) {
        result = 'User';
    }   else if (playerSelection === 'paper' && (computerSelection === 'scissors')) {
        result = 'Computer';
    }  
    // Ties
    else {
        result = 'Tie'
    }
    
    displayScore(playerSelection, computerSelection, result)

    return result;
}

// Passing arguments to playerSelection and computerSelection, declaring outcome

function game(playerSelection) {
    const computerSelection = computerPlay()
    const outcome = playRound(playerSelection, computerSelection);
    if (outcome === 'User') return "User won!"
    else if (outcome === "Computer") return "Computer won!"
    else return 'You tied with the computer!';
}

game ();