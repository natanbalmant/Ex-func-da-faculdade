/* 6-  Faça uma função que receba, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorne o seu peso ideal. 
    Para homens calcular o peso ideal usando a formula a seguir: peso ideal = 72.7 * alt - 58 e, para mulheres: peso ideal = 62.1 * alt - 44.7 */

    function exe6Principal() {
        var sexo = prompt("Informe seu sexo [ MASCULINO ] - [ FEMININO ]").toUpperCase()
        var altura = Number(prompt("Informe sua altura"))
        var result = pesoIdeal(sexo, altura)
        console.log(`Seu peso ideal ${result}`)
    }
    
    function pesoIdeal(s, a) {
        var pesoIdealM = Number(72.7 * a - 58)
        var pesoIdealF = Number(62.1 * a - 44.7)
    
        switch(s) {
            case "MASCULINO":  return pesoIdealM; 
            case "FEMININO": return pesoIdealF;
            default: return "Sexo inválido!"
        }
    }
    exe6Principal()
    
