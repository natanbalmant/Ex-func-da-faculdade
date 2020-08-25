
// variaveis com o escopo local
function exe1(n){
    var soma = 0
    for(var i = 1; i <= n; i++){
        soma = soma + i
    }
    return soma
}

function chefe(){
    var nro = Number(prompt(`Informe um número: `))
    var result = exe1(nro)
    console.log(`A soma dos números é ${result}`)
}









// escopo global (vetores e objetos)
//exemplo com vetor

function chefe(){
    var vetor = []
    entrada(vetor)
    soma10(vetor)
    console.log(vetor)
}
// variavel com o escopo global - vet
function entrada(vet){
    vet.push(8)
    vet.push(6)
    vet.push(7)
}

function soma10(vet){
    for(var i = 0; i< vet.length; i++){
        vet[i] = vet[i] +10
    }
}


// separar as funcoes pois dara conflito tudo junto.

function chefe(){
    var carro = new Object() // objeto é global
    compra(carro)
}

function compra(obj){
    obj.modelo = `Renegade`
    obj.marca = `Jeep`
    obj.ano = 2019
}

chefe()