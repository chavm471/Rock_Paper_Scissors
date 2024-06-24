//1 = rock
//2 = paper
//3 = scissors
//variables
let playerWins = 0;
let computerWins = 0;
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

function checkforWinner(){
    
}

function playRound(playerSelection, computerSelection){
    let results = "";

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
function updateScoreboard(){
    const playerWinsElement = document.getElementById("PlayerWins");
    const computerWinsElement = document.getElementById("ComputerWins");
    
    if(playerWinsElement && computerWinsElement){
        playerWinsElement.textContent = playerWins;
        computerWinsElement.textContent = computerWins;
    }
    else{
        console.log("elements not found");
    }
}
//returns winner
function game(playerChoice) {
    //get the computer selection
    const computerSelection = getComputerChoice();

    //play the round
    let winner = playRound(playerChoice, computerSelection);

    //
    const printWinner = document.querySelector(".results");
    const print = document.createElement("div");
    print.classList.add("print");


    if (winner == "Player Wins!") {
        print.textContent = "You win!";
        printWinner.appendChild(print);
        playerWins += 1;
    }
    if (winner == "Computer Wins!") {
        computerWins += 1;
        print.textContent = "You lost. The computer won!";
        printWinner.appendChild(print);
    }
    else{
        print.textContent = "Its a tie!";
        printWinner.appendChild(print)
    }
    updateScoreboard();
}


//define the main function for the entry point of the program
function main() {
    let playerChoice;
    greetings();

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playerChoice = button.id
            console.log(playerChoice)
            game(playerChoice);
        });
    });
}

//call the main function to start the program
main();