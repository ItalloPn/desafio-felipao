/*
## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
*/


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