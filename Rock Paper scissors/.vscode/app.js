const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.ceil(Math.random() * 2) //we can use possibleChoices.length insted 

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice) {
        result = 'Draw'
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        resultDisplay.innerHTML = 'You lost'
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'You win'
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'You win'
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'You lost'
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'You win'
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'You lost'
    }
    resultDisplay.innerHTML = result

}