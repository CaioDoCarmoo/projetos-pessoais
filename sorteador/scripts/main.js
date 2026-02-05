/*

    Math.random()

*/

// Mapeando meu bottão
const myButton = document.querySelector('button')

// Vai executar essa função quando o botão for clicado
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
    if (inputMin == "" || inputMax == "") {

        alert('Você tem que estipular um valor MÍNIMO e um valor MÁXIMO!')

        // limpa a tela
        textoDoResultado.style.display = 'none'
        valorSorteadoExibido.style.display = 'none'

        textoPlaceholder.style.display = 'block'
        return;
    }

}

// Colocando um evento quanto o botão for clicado, chama a função.
myButton.addEventListener('click', sortearNumero)