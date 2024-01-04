//1 = rock
//2 = paper
//3 = scissors
//variables

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
    let playerScore = 0;
    let computerScore = 0;

    //make the whole word lower case
    playerSelection = playerSelection.toLowerCase();

    //if player chooses rock and computer chooses paper
    //player loses
    if(playerSelection == "rock" && computerSelection == "paper"){
        results = "Computer Wins!";
    }
    //if player chooses rock and computer chooses scissors
    //player wins
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        results = "Player Wins!";
    }
    //if both choose rock
    else if (playerSelection == "rock" && computerSelection == "rock"){
        results = "Its a tie!";
    }
    //if player chooses paper and computer chooses rock
    //player wins
    else if(playerSelection == "paper" && computerSelection == "rock"){
        results = "Player Wins!";
    }

    //if player chooses paper and computer chooses scissors
    //player loses
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        results = "Computer Wins!";
    }
    //if both choose paper
    else if (playerSelection == "paper" && computerSelection == "paper"){
        results = "Its a tie!";
    }
    //if player chooses scissors and computer chooses rock
    //player loses
    else if (playerSelection== "scissors" && computerSelection == "rock"){
        results = "Computer Wins!";
    }
    //if player chooses scissors and computer chooses paper
    //player wins
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        results = "Player Wins!";
    }
     //if both choose scissors
     else if (playerSelection == "scissors" && computerSelection == "scissors"){
        results = "Its a tie!";
    }
    return results;
}
//returns winner
function game(){
    //conditional for loop 
    for(let i = 1; i <= 5;++i){
        const playerSelection = prompt("Enter your choice.");
        const computerSelection = getComputerChoice();
        let winner = playRound(playerSelection, computerSelection);
        console.log(winner);
        if(winner == "Player Wins!"){
            playerWins += 1;
        }
        if (winner == "Computer Wins!"){
            computerWins += 1;
        }
    }
}
let playerWins = 0;
let computerWins = 0;
greetings();
//const playerSelection = "rock";
/*const playerSelection = "rOck";
const playerSelection = "Paper";
const playerSelection = "scissors";*/
game();
if(computerWins > playerWins){
    console.log(`The computer won! Computer score: ${computerWins} Player score: ${playerWins}`);
}
else if( computerWins < playerWins){
    console.log(`You won! Player score: ${playerWins} Computer score: ${computerWins}`);
}
else{
    console.log(`Its a tie! Player score: ${playerWins} Computer score: ${computerWins}`);
}