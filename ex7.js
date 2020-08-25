/* 7- Faça uma função que leia um número não determinado de valores positivos, e retorne a média aritimética dos mesmos. */
function exe7Principal() {
    var num = []
        entrada(num)
        somaNumeros(num)
    var result = mediaAritimetica(num)
    console.log(result)
}

function entrada(vet) {
    var count = 0
    do {
        vet.push(Number(prompt("Digite números positivos [EX: 245979 ...")))
        count++;
        var resp = prompt("Deseja digitar mais números? S/N").toLowerCase()
    } while (resp != "n")
    
}   

function mediaAritimetica(vet) {
    var soma = 0
    var media = 0
    for (var i = 0; i < vet.length; i++) {
        soma = soma + vet[i]
        media = soma / vet.length 
        console.log(`A média aritimética dos números: ${media} `)
    }
    return media
}
exe7Principal()