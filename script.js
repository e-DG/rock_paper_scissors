// console.log("is this working?");
const computerChoices = ["rock", "paper", "scissors"]
let computerScore = 0;
let humanScore = 0;
// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();
// 
function getComputerChoice(){
   let randomChoice = Math.floor(Math.random() * computerChoices.length);
   return computerChoices[randomChoice];
}
// 
function getHumanChoice() {
    let humanChoice = prompt("Choose your weapon!");
    return humanChoice.toLowerCase();
}
// 
function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        console.log("There is no winner yet!")
    }
    else if(humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    }
    else if(humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    }
    else if(humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! " + humanChoice + " beats " + computerChoice + ".");
    }
    else if(humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("Computer wins! " + computerChoice + " beats " + humanChoice + ".");
    }
    else if(humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("Computer wins! " + computerChoice + " beats " + humanChoice + ".");
    }
    else if(humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("Computer wins! " + computerChoice + " beats " + humanChoice + ".");
    }
}
// 
function anounceWinner(){
    if (humanScore > computerScore){
        alert("The human won the match against the machine!");
    }
    else if (humanScore<computerScore){
        alert("The machines will rule the world thanks to the IA! The computer won.");
    }
    else alert("No one is the winner, let's play again! Press accept!")
}

function restartGame(){
    humanScore = 0; 
    computerScore = 0;
    playGame();
}

// function playGame() {
//     let i = 1;
//     let n = 5;
//     while(i<=n){
//         playRound(getHumanChoice(), getComputerChoice());
//         console.log("The scores are: " + humanScore + " points for the human, and " + computerScore + " points for the computer!");
//         i++;
//     }
//     anounceWinner()
//     restartGame();
//     i = 1;    
// }

// playGame();