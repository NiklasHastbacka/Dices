let startButton = document.getElementById('start')
let diceArea = document.getElementById('dicearea')
let throwedDice = document.getElementById('throwed-dices')

startButton.addEventListener('click', rollDice)

function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1
}

function rollDice() {
    thrownDices(diceArea.innerHTML)

    diceArea.innerHTML = `<div class="dicearea"><img class="dices" src="assets/${randomNumber(6)}.png"/><img class="dices" src="assets/${randomNumber(6)}.png"/></div>`
}

function thrownDices(message) {

    let history = document.createElement('div')
    history.classList.remove('wrapper2')
    history.classList.add('wrapper3')

    history.innerHTML = message

    throwedDice.appendChild(history)


}

