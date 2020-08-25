/* 3-  Faça uma função que receba duas cadeias de caracteres como parâmetros e retorne 0 se elas forem iguais. 
    Caso contrário, retorne o índice do primeiro caracter não coincidente. */

    function exe3Principal() {
        var palavra1 = prompt("Digite uma palavra de sua escolha").slice()
        var palavra2 = prompt("Digite outra palavra de sua escolha").slice()
        var compara = analisa(palavra1, palavra2)
        console.log(compara)
    }
    
    function analisa(p1, p2) {
        if (p1 == p2) {
            return 0
        } 
        if (p1 != p2) {
            resultado = p1.slice(0, length)
            return resultado
        }
    }
    exe3Principal()