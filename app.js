


let buttons = document.querySelectorAll('.btn')

let pScore = document.querySelector('.player-score')
let cScore = document.querySelector('.computer-score')
let message = document.querySelector('.message')
let dark = document.querySelector('.dark-btn')

let choices = ['rock', 'paper', 'scissors']

let defaultScore = 0
let pPoints = 0
let cPoints = 0

buttons.forEach(button => {
    button.addEventListener('click', () => {

        checkWinner(button, computerSelection())

        if (pPoints >= 10) {
            message.classList.add('alert', 'alert-primary')
            message.textContent = 'Humans shall thrive! And the machines will die!'
            setTimeout(reset, 5000)

        } else if (cPoints >= 10) {
            message.classList.add('alert', 'alert-danger')
            message.textContent = 'It has been decided. the machines shall take over earth!'
            setTimeout(reset, 5000)
        }
    })
})



function reset() {
    cPoints = 0;
    pPoints = 0;
    pScore.textContent = pPoints
    cScore.textContent = cPoints;
    message.classList.remove('alert', 'alert-primary', 'alert-danger')
    message.textContent = 'Reset completed'
}

function computerSelection() {
    return choices[Math.floor(Math.random() * choices.length - 1 + 1)]
}

function checkWinner(playerSelection, compSelect) {
    if (playerSelection.textContent === compSelect) {
        message.textContent = `${playerSelection.textContent} does not beat ${compSelect}. It's a tie!`
        
    } else if (playerSelection.textContent == 'rock' && compSelect == 'scissors') {
        message.textContent =
            `${playerSelection.textContent} smashes ${compSelect}. A point for the human race.`
        pScore.textContent = ++pPoints
    } else if (playerSelection.textContent == 'scissors' && compSelect == 'rock') {
        message.textContent =
            `${compSelect} smashes ${playerSelection.textContent}. A point for the machines.`
        cScore.textContent = ++cPoints
    } else if (playerSelection.textContent == 'paper' && compSelect == 'rock') {
        message.textContent =
            `${playerSelection.textContent} covers ${compSelect}. A point for the human race.`
        pScore.textContent = ++pPoints
    } else if (playerSelection.textContent == 'rock' && compSelect == 'paper') {
        message.textContent =
            `${compSelect} covers ${playerSelection.textContent}. A point for the machines.`
        cScore.textContent = ++cPoints
    } else if (playerSelection.textContent == 'scissors' && compSelect == 'paper') {
        message.textContent =
            `${playerSelection.textContent} cut ${compSelect}. A point for the human race.`
        pScore.textContent = ++pPoints
    } else if (playerSelection.textContent == 'paper' && compSelect == 'scissors') {
        message.textContent =
            `${compSelect} cut ${playerSelection.textContent}. A point for the machines.`
        cScore.textContent = ++cPoints
    }
}