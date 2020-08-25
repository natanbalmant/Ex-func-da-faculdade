/* 9- Faça uma função que receba, por parâmetro um valor inteiro e positivo e retorne a soma dos divisores desse valor */  

function exe9Principal() {
    var num = Number(prompt("Digite um número inteiro e positivo, para ver a soma dos seus divisores"))  
    var resultado = somaDivisores(num)
    console.log(resultado)
}

function somaDivisores(n) {
    var soma = 0
    var divisor = 0
    for (var i = 0; i < n; i++) {
        divisor = n % i
        if (divisor == 0) {
            soma += i
        }
        console.log(soma)
    }
    return soma
}
exe9Principal()