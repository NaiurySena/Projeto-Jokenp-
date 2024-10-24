
const result = document.querySelector('.result')
const humanScore = document.querySelector('.one')
const machineScore = document.querySelector('.two')

let humanScoreNumber = 0
let machineScoreNumber = 0



const playHuman = (humanChoice) => {

    resultFinal(humanChoice, playMachine())
}

const playMachine = () => {

    const choices = ['stone', 'paper', 'scissors']

    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const resultFinal = (human, machine) => {


    if (human === machine) {

        result.innerHTML = 'Deu empate!'

    } else if ((human === 'stone' && machine === 'scissors') || (human === 'paper' && machine === 'stone') || (human === 'scissors' && machine === 'paper')) {

        humanScoreNumber++

        humanScore.innerHTML = humanScoreNumber

        result.innerHTML = 'Você Ganhou, Parabéns!'

    } else {

        
        machineScoreNumber++

        machineScore.innerHTML = machineScoreNumber

        result.innerHTML = 'Você perdeu para a Alexa!'
    }

}







