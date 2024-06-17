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
    
    // print Draw when humanChoice equals computerChoice 
    if (humanChoice === computerChoice) {
        console.log("Draw");
    } else {
        // else if computerChoice beats humanChoice, 
        // increment the computerScore and print 'You lose! .. beats ..' 
        if (humanChoice == 'rock' && computerChoice == 'paper' || 
            humanChoice == 'paper' && computerChoice == 'sissors' ||
            humanChoice == 'sissors' && computerChoice == 'rock') {    
                computerScore++
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        
        // else  incrememnt humanScore and print the winning message
        } else {
            humanScore ++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
    }
}

function playAgain() {
    play = prompt("Would you like to play again? [yes(y)/no(n)").toLowerCase();
    if (play === 'yes' || play === 'y') {
        playGame();
    } else {
        console.log('Bye!');
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {      
        playRound(getUserChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Oh no! Humanity has lost against machines! You lose the game! ");
    } else {
        console.log("You Draw the game with the computer");
    }

    // ask to play again after 3 seconds
    const TIMEOUT_LEN = 3 * 1000;
    setTimeout(playAgain, TIMEOUT_LEN);
}



