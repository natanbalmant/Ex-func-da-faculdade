/* 8- Faça uma função que receba um valor inteiro e positivo, calcule e mostre o seu fatorial. */

function exe8Principal() {
    var num = Number(prompt("Digite um número positivo para ver seu fatorial"))
    var fatoracao =  fatorial(num)
    console.log(fatoracao)
}
 function fatorial(n) {
    var resultado = 1
    for (var i = 1; i < n; i++) {
        resultado *= i
    }
    return resultado
}
exe8Principal()

