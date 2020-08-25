/* 2-  Faça uma função que receba três números inteiros como parâmetro, representando horas, minutos, e segundos, 
    e os converta em segundos. Exemplo: 2 h, 40 min e 10 seg correspondentes a 9.610 segundos */

    function exe2Principal() {
        var hora = Number(prompt("Informe a hora"))
        var minuto = Number(prompt("Informe a minuto"))
        var segundo = Number(prompt("Informe a segundo"))
        var conversao = segundos(hora, minuto, segundo)
        console.log(`A hora e minutos, convertidos em segundos: ${conversao}`)
    }
    
    function segundos(h, m, s) {
        var hour = h * 3600
        var minute = m * 60
        return hour + minute + s
    }
    
    exe2Principal()
    