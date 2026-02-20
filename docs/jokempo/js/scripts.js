const result = document.querySelector('.result')
const pointUser = document.querySelector('.pointUser')
const pointMachine = document.querySelector('.pointComputer')

let humanScoreNumber = 0
let machineScoreNumber = 0

// Arrow Function, utilizando parametros. 
const playHuman = (humanChoice) => {
    
    playTheGame(humanChoice, playMachine())
}


const playMachine = () => {
    const choices = ['Rock', 'Paper', 'Scissors']
    const numberRandom = Math.floor(Math.random() * 3)

    // Math.random() --> Gera numeros de 0 a 1. Mas quero retornas apenas 0 - 1 - 2

    return  choices[numberRandom] // Toda vez que eu retornar quero que tenho OU o 0 / 1 / 2.
}


const playTheGame = (human, machine) => {

    console.log(`Humano: ${human} Maquina: ${machine}`)

    if(human === machine) {
        result.innerHTML = 'Deu Empate!'
    } else if 
        (human === 'Paper' && machine === 'Rock' || 
        (human === 'Rock' && machine === 'Scissors') ||
        (human === 'Scissors' && machine === 'Paper')
    ) {
        humanScoreNumber++
        pointUser.innerHTML = humanScoreNumber
        result.innerHTML = 'Você Ganhou!'
    } else {
        machineScoreNumber++
        pointMachine.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu pra alexa!'
    }
}