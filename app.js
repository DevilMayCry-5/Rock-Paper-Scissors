alert("Welcome to RPS game")

let actions = ["rock", "paper", "scissors"];

function computerPlay() {
    let rand = Math.floor(Math.random() * actions.length);
    alert(actions[rand])
}

computerPlay();