let computerChoice;
let computerScore = 0;
let humanScore = 0;

function comptChooses() {
    computerChoice = Math.round(Math.random() * 2);
    if (computerChoice === 0) {
        computerChoice = "scissors";
        //  console.log(computerChoice);
    }
    else if (computerChoice === 1) {
        computerChoice = "rock";
        //  console.log(computerChoice);
    }
    else {
        computerChoice = "paper";
        //  console.log(computerChoice);
    } 
}



 function playRound(computerChoice, humanChoice) {

     if (humanChoice === "scissors" && computerChoice === "paper" 
        ||humanChoice === "paper" && computerChoice === "rock" 
        ||humanChoice === "rock" && computerChoice === "scissors" ){
        console.log ("You win!")
        humanScore++;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper" 
        ||computerChoice === "paper" && humanChoice === "rock" 
        ||computerChoice === "rock" && humanChoice === "scissors" ){
        console.log ("Computer wins.")
        computerScore++;
        
    }
    else {
        console.log ("Draft")
    }
 }

function playGame () {
    for (let i = 1; i <= 5; i++) {
        comptChooses(); 
        let humanChoice = prompt("Choose your weapon");
        playRound(computerChoice, humanChoice)
        console.log("Round number " + i + ". The score is: Human " + humanScore + " - " + computerScore + " Computer");
    }
}
