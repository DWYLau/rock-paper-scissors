// Function - Computer Outputs

function computerPlay() { 
    let num = Math.floor(Math.random() * 3);
    if (num === 0) { 
        return 'rock';
    } else if (num === 1) {
        return 'paper';
    } else 
        return 'scissor';
}

// Rock, paper, scissors return values and increment of scores

let playerScore = 0; 
let computerScore = 0; 

function playRound(playerSelection, computerSelection) {    
    if (playerSelection === 'rock' && (computerSelection === 'rock')) {
        return 'You draw! Two rocks!';
    }   else if (playerSelection === 'rock' && (computerSelection === 'paper')) {
        computerScore++;
        return 'You lose! Rock loses to paper.';
    }   else if (playerSelection === 'rock' && (computerSelection === 'scissor')) {
        playerScore++;
        return 'You win! Rock beats scissor.';
    }   else if (playerSelection === 'paper' && (computerSelection === 'rock')) {
        playerScore++;
        return 'You win! Paper beats rock';
    }   else if (playerSelection === 'paper' && (computerSelection === 'paper')) {
        return 'You draw! Two papers!';
    }   else if (playerSelection === 'paper' && (computerSelection === 'scissor')) {
        computerScore++;
        return 'You lose! Paper loses to scissors.';
    }   else if (playerSelection === 'scissor' && (computerSelection === 'rock')) {
        computerScore++;
        return 'You lose! Scissor loses to rock.';
    }   else if (playerSelection === 'scissor' && (computerSelection === 'paper')) {
        playerScore++;
        return 'You win! Scissor beats paper';
    }   else if (playerSelection === 'scissor' && (computerSelection === 'scissor')) {
        return 'You draw! Two scissors!'
    }
}  

// Game loops to 5 rounds

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Type: Rock, Paper, or Scissors!');
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
        if (playerScore > computerScore) {
            alert (`You win! Final score: ${playerScore} to ${computerScore}`);
        }   else if (computerScore > playerScore) {
            alert (`You lose! Final score: ${playerScore} to ${computerScore}`);
        }   else {
            alert (`You tied! Final score: ${playerScore} to ${computerScore}`);
        }
      
}


game()
