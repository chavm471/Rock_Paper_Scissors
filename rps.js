//1 = rock
//2 = paper
//3 = scissors

//this function gets a randomizes computer choice.
function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let computerSelection = "";

    if (randomInt === 1){
        computerSelection = "rock";
    }
    else if(randomInt === 2){
        computerSelection = "paper";
    }
    else if (randomInt === 3){
        computerSelection = "scissors";
    }
    return computerSelection;
}

function greetings(){
    console.log("Welcome to a game of Rock, Paper scissors!!");
    console.log("Select either rock paper or scissors by typing in your choice.")
}

function playRound(playerSelection, computerSelection){
    let results = "";

    //make the whole word lower case
    playerSelection = playerSelection.toLowerCase();

    //if player chooses rock and computer chooses paper
    //player loses
    if(playerSelection == "rock" && computerSelection == "paper"){
        results = "You lose! Paper beats rock";
    }
    //if player chooses rock and computer chooses scissors
    //player wins
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        results = "You win! Rock beats Scissors";
    }
    //if both choose rock
    else if (playerSelection == "rock" && computerSelection == "rock"){
        results = "Its a tie!";
    }
    //if player chooses paper and computer chooses rock
    //player wins
    else if(playerSelection == "paper" && computerSelection == "rock"){
        results = "You win! Paper beats Rock";
    }

    //if player chooses paper and computer chooses scissors
    //player loses
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        results = "You lose! Scissors beats Paper";
    }
    //if both choose paper
    else if (playerSelection == "paper" && computerSelection == "paper"){
        results = "Its a tie!";
    }
    //if player chooses scissors and computer chooses rock
    //player loses
    else if (playerSelection== "scissors" && computerSelection == "rock"){
        results = "You lose! Rock beats Scissors";
    }
    //if player chooses scissors and computer chooses paper
    //player wins
    else if (playerSelection== "scissors" && computerSelection == "paper"){
        results = "You win! Scissors beats Paper";
    }
     //if both choose scissors
     else if (playerSelection == "scissors" && computerSelection == "scissors"){
        results = "Its a tie!";
    }
    return results;
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    greetings();
    //conditional for loop 
    for(let i = 1; i => 5;++i){
        const playerSelection = prompt("Enter your choice.");
        const computerSelection = getComputerChoice();
        console.log(playerSelection);
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

greetings();
//playerInput = prompt("Enter your choice.");
//const playerSelection = "rock";
/*const playerSelection = "rOck";
const playerSelection = "Paper";
const playerSelection = "scissors";*/
//const playerSelection = "scissoRs";
//const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));