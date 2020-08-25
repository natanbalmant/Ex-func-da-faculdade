/* 5-  Faça uma função que receba um valor inteiro e verifique se o valor é  positivo ou negativo. */

function exe5Principal() {
    var num = Number(prompt("Digite um valor inteiro, positivo ou negativo"))
    var result = verifica(num)
    console.log(`O valor é ${result}`)
}

function verifica(n) {
    if (n > 0) {
        return "Positivo"
    } else {
        return "Negativo"
    }
}
exe5Principal()