const buttonStartPause = document.querySelector('.playPause')
const circleGreen = document.querySelector('.dot')
const textCircle = document.querySelector('.pause')

let stopwatch // Variavel criada para indentificar o setInterval
let number = 0 // tempo começa com zero
let rodando = false; // Isso é colocado pra saber quando o cronometro esta rodando.

function start() {
    const displayedCount = document.querySelector('h1')



    // Verificação se o cronometro esta rodando

    if (!rodando) {
        rodando = true;
        buttonStartPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="white"><!--!Font Awesome Pro v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2026 Fonticons, Inc.--><path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z"/></svg>'
        circleGreen.style.backgroundColor = 'greenyellow'
        textCircle.innerHTML = 'Rodando'

        stopwatch = setInterval(function () {
            number += 10; // Somando de 10 em 10 milisegundos
            displayedCount.innerHTML = formatarTempo(number);
        }, 10)
    } else {

        buttonStartPause.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="white">!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.<path d="M176 96C149.5 96 128 117.5 128 144L128 496C128 522.5 149.5 544 176 544L240 544C266.5 544 288 522.5 288 496L288 144C288 117.5 266.5 96 240 96L176 96zM400 96C373.5 96 352 117.5 352 144L352 496C352 522.5 373.5 544 400 544L464 544C490.5 544 512 522.5 512 496L512 144C512 117.5 490.5 96 464 96L400 96z"/></svg>'
        circleGreen.style.backgroundColor = '#7c3aed'
        textCircle.innerHTML = 'Pausado'
        //Pause
        clearInterval(stopwatch)
        rodando = false;
    }
}

function formatarTempo(msTotal) {               // msTotal -> total de milisegundos.    // Math.floor (Arredonda pra baixo,REMOVENDO OS DECIMAIS)       
    let minutos = Math.floor(msTotal / 60000); // Calcula os minutos. Sabemos que 1min = 60.000ms     (ms /60000) -> diz quantos minutos existem
    let segundos = Math.floor((msTotal % 60000) / 1000); // Ele pega o que sobra da divisão, depois converte para segundos.
    let milisegundos = msTotal % 1000; // calcula os milisegundos

    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(milisegundos).padStart(3, '0')}`;

}


buttonStartPause.addEventListener('click', start)



