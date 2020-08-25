/* 4-  Faça uma função que receba, como parâmetro, o raio de uma esfera, calcule e mostre no programa principal 
    o seu volume, v = 4/3 * R³. */ 

    function exe4Principal() {
        var raio = Number(prompt("Informe o raio da esfera"))
        var resultado = esfera(raio)
        console.log(`O volume da esfera é: ${resultado}`)
    }
    
    function esfera(r) {
        var volume = Number((4/3) * Math.pow(r,3))
        return volume
    }
    exe4Principal()
