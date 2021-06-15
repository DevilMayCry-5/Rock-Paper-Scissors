alert("Welcome to RPS game")

let playerPoints = 0;
let computerPoints = 0;

startGame(5)

function computerPlay() {
    let actions = ["rock", "paper", "scissors"];
    return actions[Math.floor(Math.random() * actions.length)];
}

function playerPlay() {
    return prompt("Enter your choice").toLowerCase()
}

function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert(`${playerSelection} does not beat ${computerSelection}. It's a tie.`);
        playerPoints++;
        computerPoints++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        alert("rock beats scissors. Player wins!");
        playerPoints++;
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
        alert("rock beats scissors. Computer wins!");
        computerPoints++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        alert("paper beats rock. Player wins!");
        playerPoints++;
    } else if (computerSelection === "paper" && playerSelection === "rock") {
        alert("paper beats rock. Computer wins!");
        computerPoints++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        alert("scissors beats paper. Player wins!");
        playerPoints++;
    } else if (computerSelection === "scissors" && playerSelection === "paper") {
        alert("scissors beats paper. Computer wins!");
        playerPoints++;
    }
    else {
        alert("Invalid choice entered");
    }
}

function startGame(rounds) {
    for (var i = 0; i < rounds; i++) {
        play(playerPlay(), computerPlay())
    }
    if (playerPoints > computerPoints) {
        alert(`Player wins with ${playerPoints} points!!!`)
    } else if (computerPoints > playerPoints) {
        alert(`Computer wins with ${computerPoints} points`)
    } else {
        alert("could't be any tougher. It's a tie!")
    }
}
