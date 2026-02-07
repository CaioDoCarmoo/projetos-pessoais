/*

    Math.random()

*/

// Mapeando meu bottão
const myButton = document.querySelector('button')

// Vai executar essa função quando o botão for clicado
function sortearNumero() {

    // Pegando os valores Digitados
    const inputMinValue = document.querySelector('.inputMin').value
    const inputMaxValue = document.querySelector('.inputMax').value


    // Verifica se à valor no input
    if (inputMinValue == "" || inputMaxValue == "") {

        alert('Você tem que estipular um valor MÍNIMO e um valor MÁXIMO!')

        const textoPlaceholder = document.querySelector('.textoFlutuante')
        const textoDoResultado = document.querySelector('.textoNumeroSorteado')
        const valorSorteadoExibido = document.querySelector('.numeroSorteado')

        // limpa a tela
        textoDoResultado.style.display = 'none'
        valorSorteadoExibido.style.display = 'none'
        textoPlaceholder.style.display = 'block'
        return;
    } else if (inputMinValue > inputMaxValue) {
        alert('O valor MÍNIMO não pode ser maior que o valor MÁXIMO')

        const textoPlaceholder = document.querySelector('.textoFlutuante')
        const textoDoResultado = document.querySelector('.textoNumeroSorteado')
        const valorSorteadoExibido = document.querySelector('.numeroSorteado')

        // limpa a tela
        textoDoResultado.style.display = 'none'
        valorSorteadoExibido.style.display = 'none'
        textoPlaceholder.style.display = 'block'
        return;

    } else if (inputMinValue == inputMaxValue) {
        alert('O valor MÍNIMO e o valor MÁXIMO não podem ser iguais')

        const textoPlaceholder = document.querySelector('.textoFlutuante')
        const textoDoResultado = document.querySelector('.textoNumeroSorteado')
        const valorSorteadoExibido = document.querySelector('.numeroSorteado')

        // limpa a tela
        textoDoResultado.style.display = 'none'
        valorSorteadoExibido.style.display = 'none'
        textoPlaceholder.style.display = 'block'
        return;
    }

    // Adicionando o texto 'Número sorteado'
    const textoDoResultado = document.querySelector('.textoNumeroSorteado')
    textoDoResultado.style.display = 'block'

    //Texto 'clique em sortear'
    const textoPlaceholder = document.querySelector('.textoFlutuante')
    textoPlaceholder.style.display = 'none'

    // Converte o valor digitado no INPUT pra number 
    const inputMin = Number(inputMinValue);
    const inputMax = Number(inputMaxValue);

    //Fazendo o calculo pra vir os numeros colocado no input
    const numberRandom = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

    // Número sorteado exibido
    const valorSorteadoExibido = document.querySelector('.numeroSorteado')
    valorSorteadoExibido.style.display = 'block'
    valorSorteadoExibido.innerHTML = numberRandom
}

// Colocando um evento quanto o botão for clicado, chama a função.
myButton.addEventListener('click', sortearNumero)