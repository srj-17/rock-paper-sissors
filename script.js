let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // initialize it with random number between 1 and 3
    let choice = Math.ceil(Math.random() * 3);

    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else {
        return 'sissors';
    }
}

function getUserChoice() {
    let choice = prompt("Your choice (rock, paper or sissors) ?").toLowerCase();
    if (choice != 'rock' && choice != 'paper' && choice != 'sissors') {
        alert("Wrong Choice! Enter one of rock, paper or sissors");
        getUserChoice();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice;
    
    if (humanChoice === computerChoice) {
        return 'Draw';
    } else {
        if (humanChoice == 'rock' && computerChoice == 'paper' || 
            humanChoice == 'paper' && computerChoice == 'sissors' ||
            humanChoice == 'sissors' && computerChoice == 'rock') {    
                computerScore++
                return `You lose! ${computerChoice} beats ${humanChoice}`;

        } else {
            humanScore ++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        }
    }
}

let choices = document.querySelector('.choices');
let win = document.querySelector('.win');
let result = document.querySelector('.result');
let score = document.querySelector('.score');
let clickCount = 0;

function printWinner() {
    if (humanScore > computerScore) {
        win.textContent = 'Congratulations! You win the game!';
    } else if (humanScore < computerScore) {
        win.textContent = 'Alas! Humanity has lost!';
    } else {
        win.textContent = 'Here\'s your Draw';
    }
    
    clickCount = 0;
    humanScore = 0;
    computerScore = 0;

    DELAYTIME = 2000;
    setTimeout(() => {
        win.textContent = '';
    }, DELAYTIME);

}

// add event listener for button press
choices.addEventListener('click', (event) => {
    clickCount++;
    let target = event.target;

    result.textContent = playRound(target.id, getComputerChoice());

    // this uses innerHTML to set line breaks, 
    // need to do it with something else
    score.innerHTML = `Current <br> 
                         Human Score: ${humanScore} <br>
                         Computer Score: ${computerScore}`

    if (clickCount === 5) {
        printWinner();
    }
});


