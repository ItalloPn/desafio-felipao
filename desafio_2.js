
function CalcularSaldoDeVitorias(totalVitorias, totalDerrotas){
    let saldoDeVitorias = totalVitorias - totalDerrotas
    return saldoDeVitorias
}

let vitorias = CalcularSaldoDeVitorias(4256, 22)
let rank = calcNivel()

function calcNivel(nivel){
    if (vitorias <= 10) {
        nivel = "ferro"
    }
    else if(vitorias <= 20 ){
        nivel = "bronze"
    }
    else if(vitorias <= 50 ){
        nivel = "prata"
    }
    else if(vitorias <= 80 ){
        nivel = "ouro"
    }
    else if(vitorias <= 90 ){
        nivel = "Diamante"
    }
    else if(vitorias <= 100 ){
        nivel = "Lendario"
    }
    else if(vitorias >= 101 ){
        nivel = "Imortal"
    }              
    return nivel
}

function rankeada(){
    console.log(`O Herói tem de saldo de ${vitorias} vitórias e está no nível de ${rank}`)
}

rankeada()