const computerChoices = ["rock", "paper", "scissors"]
let computerScore = 0;
let humanScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const result = document.querySelector("#result");
const button = document.createElement("button");
button.setAttribute("id", "restartButton");
button.textContent = "Do you want to play again?";

      

rock.addEventListener("click", function (){
    playRound("rock", getComputerChoice());
    anounceWinner();
})

paper.addEventListener("click", function (){
playRound("paper", getComputerChoice());
anounceWinner();
})

scissors.addEventListener("click", function (){
playRound("scissors", getComputerChoice());
anounceWinner();
})

button.addEventListener ("click", function(){
    computerScore = 0;
    humanScore = 0;
    result.textContent = "Your new adventure awaits..."
    rock.classList.toggle("transparent");
        paper.classList.toggle("transparent");
        scissors.classList.toggle("transparent");
})

function getComputerChoice(){
   let randomChoice = Math.floor(Math.random() * computerChoices.length);
   return computerChoices[randomChoice];
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
        result.textContent = "You have similar strenght and ability... Try another thing!";
    }
    else if(humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock"    ||
            humanChoice === "scissors" && computerChoice === "paper"
    ) {
        humanScore++;
        result.textContent = "You win! " + humanChoice + " beats " + computerChoice + ".";
    }
    else if(humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "rock"
    ) {
        computerScore++;
        result.textContent = "Computer wins! " + computerChoice + " beats " + humanChoice + ".";
    }

    result.textContent += ` Scores: You ${humanScore}, Computer ${computerScore}.`;
   
}

function anounceWinner() {
    if(humanScore >= 5) {
        result.textContent = "You defeated the Dark Lord!";
        result.appendChild(button);  
        rock.classList.toggle("transparent");
        paper.classList.toggle("transparent");
        scissors.classList.toggle("transparent");
    }
    else if (computerScore >= 5) {
        result.textContent = "Everything starts to fade away and you can hear a deep laughter on the background... You are dead!";
        result.appendChild(button);
        rock.classList.toggle("transparent");
        paper.classList.toggle("transparent");
        scissors.classList.toggle("transparent");
    } 
}


