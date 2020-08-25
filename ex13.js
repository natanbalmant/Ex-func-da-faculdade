chefe()

function chefe(){
    var vetor = []

    do{
    var opcao = Number(prompt(`Escolha \n [1]. Cadastrar \n [2]. Média dos salários \n [3]. Menor amior idade \n [4]. Qtde de mulheres \n [5]. Sair do programa `))
    switch(opcao){
            case 1:entrada(vetor)
                break
            case 2:mediaSalario(vetor)
                break
            case 3:menorMaiorIdade(vetor)
                break
            case 4:qtdeMulheres(vetor)
                break
            case 5: console.log(`Obrigado por utilizar o nosso programa`)
                break
            default:console.log(`Opção inválida`)            
        }
    }
    while(opcao != 5)    

}

function entrada(vet){
    var objeto = new Object()
    objeto.salario = Number(prompt("Informe o salário"))
    objeto.nroFilhos = Number(prompt("Informe o numero de filhos"))
    objeto.sexo = prompt("Informe o sexo (M/F)").toUpperCase()
    objeto.idade = Number(prompt("Informe a idade"))

    vet.push(objeto)
}

function mediaSalario(vet){
    if(vet == []){
        console.log(`Nenhum habitante cadastrado`)
    }
    else{
        var soma = 0
        for(var i=0; i< vet.length; i++){
            soma = soma + vet[i].salario
        }
        console.log(`A média ${soma/vet.length}`)
    }
}

function menorMaiorIdade(vet){
    if(vet.length == 0){
        console.log(`Nenhum habitante cadastrado`)
    }
    else {
        var menor = vet[0].idade
        var maior = vet[0].idade
        for(var i=0; i< vet.length; i++){
           if(vet[i].idade > maior){
               maior = vet[i].idade
           }
           if(vet[i].idade < menor){
                menor = vet[i].idade
            }
        }
        console.log(`Maior ${maior} e menor ${menor}`)
    }
}

function qtdeMulheres(vet){
    console.log(`entrou na função qtdeMulheres`)
}