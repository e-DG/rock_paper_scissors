
// Create computer's choice (it works)

let computerChoice;

function ComptChooses() {
    computerChoice = Math.round(Math.random() * 2);
    if (computerChoice === 0) {
        computerChoice = "scissors";
         console.log(computerChoice);
    }
    else if (computerChoice === 1) {
        computerChoice = "rock";
         console.log(computerChoice);
    }
    else {
        computerChoice = "paper";
         console.log(computerChoice);
    } 
}

ComptChooses();
computerChoice;


 function playRound(computerChoice, humanChoice) {
     if (humanChoice === "scissors" && computerChoice === "paper" 
        ||humanChoice === "paper" && computerChoice === "rock" 
        ||humanChoice === "rock" && computerChoice === "scissors" ){
        console.log ("You win!")
    }
    else if (computerChoice === "scissors" && humanChoice === "paper" 
        ||computerChoice === "paper" && humanChoice === "rock" 
        ||computerChoice === "rock" && humanChoice === "scissors" ){
        console.log ("Computer wins.")}
    else {
        console.log ("Draft")
    }
 }

 playRound (computerChoice, "rock");
