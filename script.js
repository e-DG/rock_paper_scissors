let computerChoice;
let computerScore = 0;
let humanScore = 0;

// This function creates a random choice for the computer one single time

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


// This function starts one single round 

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

//  This function asks you about restarting the game

 function restartGame () {
    let restartOption = prompt("Would you like to restart the game?")
    if (restartOption === "yes") {
        humanScore = 0;
        computerScore = 0;
        playGame()
    }
    else {
        alert("Thank you so much for playing!");
    }
 }

//  Compare punctuations

function alertWinner (computerScore, humanScore) {
    if (computerScore > humanScore) {
        alert("Computer wins!")
    }
    else if (computerScore > humanScore) {
        alert("You win!");
    }
    else {
         alert("Draft!");
    }
}

// This function plays a game of 5 rounds

function playGame () {
    for (let i = 1; i <= 5; i++) {
        comptChooses(); 
        let humanChoice = prompt("Choose your weapon");
        playRound(computerChoice, humanChoice)
        console.log("Round number " + i + ". The score is: Human " + humanScore + " - " + computerScore + " Computer");
    }
    alertWinner();
    restartGame ();
}
