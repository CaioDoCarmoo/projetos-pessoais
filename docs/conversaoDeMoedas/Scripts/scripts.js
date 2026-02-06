/*
    Conversão calculo: X / Valor do dólar
*/

// Esta formatando o valor digitado no input. Guardando esse valor dentro da variavel ScriptCleave
const scriptAutoNumeric = new AutoNumeric('#numeroFormatado', {
    digitGroupSeparator: '.',   // separador de milhar
    decimalCharacter: ',',      // separador decimal
    decimalPlaces: 2,           // sempre 2 casas decimais
    modifyValueOnWheel: false, // Tira a rolagem com Scroll
    unformatOnSubmit: true
})

// Mapeando o botão
const botaoDeCoversao = document.querySelector('button')
const moedaDeEntrada = document.querySelector('.selectDeConversao')
const moedaDeSaida = document.querySelector('.selectDeResultado')


// Adicionando em evento no botão
botaoDeCoversao.addEventListener('click', converterValores)

// Chamando a função quando clica no botão
function converterValores() {
    const valorExibidoNaTela = document.querySelector('.resultadoExibido') // Pegando o paragrafo e colocando na variavel.
    // Puxa o valor do input, sem a formatação pra fazer o calculo sem ERROS.
    const numeroFormatadoParaCalculo = scriptAutoNumeric.getNumber();
    //Pegando o cifrões
    const cifraoValorEntrada = document.querySelector('.cifraoConversao')
    const cifraoValorSaida = document.querySelector('.cifraoConversaoResultado')

    // Valores de cotação 
    const dolarToday = 5.22
    const realToday = 1
    const euroToday = 6.20
    const libraToday = 7
    const ieneToday = 0.034

    // Verifica se é a mesma moeda
    if (moedaDeEntrada.value === moedaDeSaida.value) {
        alert('Selecione moedas diferentes para conversão.')
        return
    }

    // Convertendo REAL pra DOLAR
    if (moedaDeEntrada.value == "BRL" && moedaDeSaida.value == "USD") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("en-US", { currency: "USD" })
            .format(numeroFormatadoParaCalculo / dolarToday)

        cifraoValorEntrada.innerHTML = 'R$'
        cifraoValorSaida.innerHTML = 'USD'

        // Convertendo REAL pra LIBRA
    } else if (moedaDeEntrada.value == "BRL" && moedaDeSaida.value == "GBP") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("en-GB", { currency: "GBP" })
            .format(numeroFormatadoParaCalculo / libraToday)

        cifraoValorEntrada.innerHTML = 'R$'
        cifraoValorSaida.innerHTML = 'GBP'

        // Convertendo REAL pra EURO
    } else if (moedaDeEntrada.value == "BRL" && moedaDeSaida.value == "EUR") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("de-DE", { currency: "EUR" })
            .format(numeroFormatadoParaCalculo / euroToday)

        cifraoValorEntrada.innerHTML = 'R$'
        cifraoValorSaida.innerHTML = 'EUR'

        // Convertendo REAL pra IENE
    } else if (moedaDeEntrada.value == "BRL" && moedaDeSaida.value == "JPY") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("ja-JP", { currency: "JPY" })
            .format(numeroFormatadoParaCalculo / ieneToday)

        cifraoValorEntrada.innerHTML = 'R$'
        cifraoValorSaida.innerHTML = 'JPY'

        // Convertendo USD pra BRL
    } else if (moedaDeEntrada.value == "USD" && moedaDeSaida.value == "BRL") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("pt-BR", { currency: "BRL" })
            .format(numeroFormatadoParaCalculo * dolarToday)
            

        cifraoValorEntrada.innerHTML = 'USD'
        cifraoValorSaida.innerHTML = 'R$'

        // Convertendo USD pra GBP
    } else if (moedaDeEntrada.value == "USD" && moedaDeSaida.value == "GBP") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("en-GB", { currency: "GBP" })
            .format((numeroFormatadoParaCalculo * dolarToday) / libraToday)

        cifraoValorEntrada.innerHTML = 'USD'
        cifraoValorSaida.innerHTML = 'GBP'

        // Convertendo USD pra EUR
    } else if (moedaDeEntrada.value == "USD" && moedaDeSaida.value == "EUR") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("de-DE", { currency: "EUR" })
            .format((numeroFormatadoParaCalculo * dolarToday) / euroToday)

        cifraoValorEntrada.innerHTML = 'USD'
        cifraoValorSaida.innerHTML = 'EUR'

        // Convertendo USD pra JPY
    } else if (moedaDeEntrada.value == "USD" && moedaDeSaida.value == "JPY") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("ja-JP", { currency: "JPY" })
            .format((numeroFormatadoParaCalculo * dolarToday) / ieneToday)

        cifraoValorEntrada.innerHTML = 'USD'
        cifraoValorSaida.innerHTML = 'JPY'

        // Convertendo GBP pra BRL
    } else if (moedaDeEntrada.value == "GBP" && moedaDeSaida.value == "BRL") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("pt-BR", { currency: "BRL" })
            .format(numeroFormatadoParaCalculo * libraToday)

        cifraoValorEntrada.innerHTML = 'GBP'
        cifraoValorSaida.innerHTML = 'R$'

        // Convertendo GBP pra USD
    } else if (moedaDeEntrada.value == "GBP" && moedaDeSaida.value == "USD") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("en-US", { currency: "USD" })
            .format((numeroFormatadoParaCalculo * libraToday) / dolarToday)

        cifraoValorEntrada.innerHTML = 'GBP'
        cifraoValorSaida.innerHTML = 'USD'

        // Convertendo GBP pra EUR
    } else if (moedaDeEntrada.value == "GBP" && moedaDeSaida.value == "EUR") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("de-DE", { currency: "EUR" })
            .format((numeroFormatadoParaCalculo * libraToday) / euroToday)

        cifraoValorEntrada.innerHTML = 'GBP'
        cifraoValorSaida.innerHTML = 'EUR'

        // Convertendo GBP pra JPY
    } else if (moedaDeEntrada.value == "GBP" && moedaDeSaida.value == "JPY") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("ja-JP", { currency: "JPY" })
            .format((numeroFormatadoParaCalculo * libraToday) / ieneToday)

        cifraoValorEntrada.innerHTML = 'GBP'
        cifraoValorSaida.innerHTML = 'JPY'

        // Convertendo EUR pra BRL
    } else if (moedaDeEntrada.value == "EUR" && moedaDeSaida.value == "BRL") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("pt-BR", { currency: "BRL" })
            .format(numeroFormatadoParaCalculo * euroToday)

        cifraoValorEntrada.innerHTML = 'EUR'
        cifraoValorSaida.innerHTML = 'R$'

        // Convertendo EUR pra USD
    } else if (moedaDeEntrada.value == "EUR" && moedaDeSaida.value == "USD") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("en-US", { currency: "USD" })
            .format((numeroFormatadoParaCalculo * euroToday) / dolarToday)

        cifraoValorEntrada.innerHTML = 'EUR'
        cifraoValorSaida.innerHTML = 'USD'

        // Convertendo EUR pra GBP
    } else if (moedaDeEntrada.value == "EUR" && moedaDeSaida.value == "GBP") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("en-GB", { currency: "GBP" })
            .format((numeroFormatadoParaCalculo * euroToday) / libraToday)

        cifraoValorEntrada.innerHTML = 'EUR'
        cifraoValorSaida.innerHTML = 'GBP'

        // Convertendo EUR pra JPY
    } else if (moedaDeEntrada.value == "EUR" && moedaDeSaida.value == "JPY") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("ja-JP", { currency: "JPY" })
            .format((numeroFormatadoParaCalculo * euroToday) / ieneToday)

        cifraoValorEntrada.innerHTML = 'EUR'
        cifraoValorSaida.innerHTML = 'JPY'

        // Convertendo JPY pra BRL
    } else if (moedaDeEntrada.value == "JPY" && moedaDeSaida.value == "BRL") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("pt-BR", { currency: "BRL" })
            .format(numeroFormatadoParaCalculo * ieneToday)

        cifraoValorEntrada.innerHTML = 'JPY'
        cifraoValorSaida.innerHTML = 'R$'

        // Convertendo JPY pra USD
    } else if (moedaDeEntrada.value == "JPY" && moedaDeSaida.value == "USD") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("en-US", { currency: "USD" })
            .format((numeroFormatadoParaCalculo * ieneToday) / dolarToday)

        cifraoValorEntrada.innerHTML = 'JPY'
        cifraoValorSaida.innerHTML = 'USD'

        // Convertendo JPY pra GBP
    } else if (moedaDeEntrada.value == "JPY" && moedaDeSaida.value == "GBP") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("en-GB", { currency: "GBP" })
            .format((numeroFormatadoParaCalculo * ieneToday) / libraToday)

        cifraoValorEntrada.innerHTML = 'JPY'
        cifraoValorSaida.innerHTML = 'GBP'

        // Convertendo JPY pra EUR
    } else if (moedaDeEntrada.value == "JPY" && moedaDeSaida.value == "EUR") {

        valorExibidoNaTela.innerHTML = new Intl.NumberFormat("de-DE", { currency: "EUR" })
            .format((numeroFormatadoParaCalculo * ieneToday) / euroToday)

        cifraoValorEntrada.innerHTML = 'JPY'
        cifraoValorSaida.innerHTML = 'EUR'
    } else {
        alert('Não podemos converter assim.')
    }

    valorExibidoNaTela.style.borderBottom = '1px solid white'
}
