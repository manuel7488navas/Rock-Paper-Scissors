

function getChoice(playerSelection){   
    let gests = ["rock", "paper", "scissors"];
    let computerSelection = gests[(Math.floor(Math.random()*gests.length))];
    const resultado = game(playerSelection, computerSelection);
    mostrarResultado(resultado);
    mostrarComputerSelection(computerSelection);
    
}

function game(playerSelection, computerSelection){

       if (playerSelection === "rock" && computerSelection === "scissors"){
           return `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
       }else if (playerSelection === "rock" && computerSelection === "paper"){
           return  `You lose. ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
       }else if (playerSelection === "rock" && computerSelection === "rock"){
           return  "It´s a tie!!!";
       }else if (playerSelection === "paper" && computerSelection === "scissors"){
           return  `You lose. ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
       }else if (playerSelection === "paper" && computerSelection === "paper"){
           return  "It´s a tie!!!";
       }else if (playerSelection === "paper" && computerSelection === "rock"){
           return  `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
       }else if (playerSelection === "scissors" && computerSelection === "scissors"){
           return  "It´s a tie!!!";
       }else if (playerSelection === "scissors" && computerSelection === "paper"){
           return  `You win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
       }else if (playerSelection === "scissors" && computerSelection === "rock"){
           return  `You lose. ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`;
       }
       
   }
   function mostrarComputerSelection(computerSelection) {
    const computerSelectionElement = document.getElementById("computerSelection");
    computerSelectionElement.textContent = "PC chose: " + computerSelection;
}
function mostrarResultado(resultado) {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = resultado;
}
  