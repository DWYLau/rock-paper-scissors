// Variable Declarations

let options = '';
let playerScore = 0;
let computerScore = 0; 
computerSelection = computerPlay(); // Parameter Assignment


// Function - Computer Outputs

function computerPlay() { 
    num = Math.floor(Math.random() * 3);
    if (num === 0) { 
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else 
        return 'scissor';
}

// Rock, paper, scissors return values and increment of scores

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && (computerSelection === 0)) {
        return 'You draw! Two rocks!';
    }   else if (playerSelection === 'rock' && (computerSelection === 1)) {
        computerScore++;
        return 'You lose! Rock loses to paper.';
    }   else if (playerSelection === 'rock' && (computerSelection === 2)) {
        playerScore++;
        return 'You win! Rock beats scissor.';
    }   else if (playerSelection === 'paper' && (computerSelection === 0)) {
        playerScore++;
        return 'You win! Paper beats rock';
    }   else if (playerSelection === 'paper' && (computerSelection === 1)) {
        return 'You draw! Two papers!';
    }   else if (playerSelection === 'paper' && (computerSelection === 2)) {
        computerScore++;
        return 'You lose! Paper loses to scissors.';
    }   else if (playerSelection === 'scissor' && (computerSelection === 0)) {
        computerScore++;
        return 'You lose! Scissor loses to rock.';
    }   else if (playerSelection === 'scissor' && (computerSelection === 1)) {
        playerScore++;
        return 'You win! Scissor beats paper';
    }   else if (playerSelection === 'scissor' && (computerSelection === 2)) {
        return 'You draw! Two scissors!'
    }
}  

// Game loops to 5 rounds

function game() {
    playRound(playerSelection, computerSelection); {
        for (let score = 0; score < 5; i++);
            console.log('Round ') + (i + 1);
            console.log(playRound(playerSelection, computerSelection));
        }
}

    