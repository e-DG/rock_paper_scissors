// console.log("is this working?");
const computerChoices = ["rock", "paper", "scissors"]
let computerScore = 0;
let humanScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();

function getComputerChoice(){
   let randomChoice = Math.floor(Math.random() * computerChoices.length);
   return computerChoices[randomChoice];
}

function getHumanChoice() {
    
    rock.addEventListener("click", function (){
        // console.log(this.id);
        return "rock";
    })
    
    paper.addEventListener("click", function (){
        // console.log(this.id);
        return "paper";
    })
    
    scissors.addEventListener("click", function (){
        // console.log(this.id);
        return "scissors";
    })
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        result.textContent = "You have similar strenght and ability... Try another thing!";
    }
    else if(humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        result.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    }
    else if(humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        result.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    }
    else if(humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        result.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    }
    else if(humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        result.textContent = "Computer wins! " + computerChoice + " beats " + humanChoice + ".";
    }
    else if(humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        result.textContent = "Computer wins! " + computerChoice + " beats " + humanChoice + ".";
    }
    else if(humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        result.textContent = "Computer wins! " + computerChoice + " beats " + humanChoice + ".";
    }
}

function anounceWinner(){
    if (humanScore > computerScore){
        result.textContent = "You defeated the dark lord!";
    }
    else if (humanScore<computerScore){
        result.textContent = "The dark lord stares at you laughing...You died!";
    }
    else result.textContent = "The fate of the magic world will not be decided today...";
}

function restartGame(){
    humanScore = 0; 
    computerScore = 0;
    playGame();
}

function playGame() {
    let i = 1;
    let n = 5;
    while(i<=n){
        playRound(getHumanChoice(), getComputerChoice());
        result.textContent = "The scores are: " + humanScore + " points for you, and " + computerScore + " points for the dark lord!";
        i++;
    }
    anounceWinner()
    restartGame();
    i = 1;    
}

playGame();