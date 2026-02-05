/*

    Math.random()

*/

// Pegando o bottão
const myButton = document.querySelector('button')


function sortearNumero() {

    // Pegando os valores Digitados
    const inputMin = Number(document.querySelector('.inputMin').value)
    const inputMax = Number(document.querySelector('.inputMax').value)


    // Adicionando o texto 'Número sorteado'
    const textoDoResultado = document.querySelector('.textoNumeroSorteado')
    textoDoResultado.style.display = 'block'

        //Texto 'clique em sortear'
    const textoPlaceholder = document.querySelector('.textoFlutuante')
    textoPlaceholder.style.display = 'none'

    //Fazendo o calculo pra vir os numeros colocado no input
    const numberRandom = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

    // Número sorteado exibido
    const valorSorteadoExibido = document.querySelector('.numeroSorteado')
    valorSorteadoExibido.style.display = 'block'
    valorSorteadoExibido.innerHTML = numberRandom

        // Verifica se a valor no input
    if (inputMin == 0 || inputMax == 0) {

        alert('Você tem que estipular algum valor.')
        // limpa a tela
        textoDoResultado.style.display = 'none'
        valorSorteadoExibido.style.display = 'none'

        textoPlaceholder.style.display = 'block'
        return;
    }

}

// Colocando um evento quanto o botão for clicado, chama a função
myButton.addEventListener('click', sortearNumero)