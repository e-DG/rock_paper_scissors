
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

