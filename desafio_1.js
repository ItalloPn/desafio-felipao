/*
## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/


let nome = "Italo"
let xp = 10001
let nivel
let msg = "O herói " + nome + " está no nivel de "

do {
    switch(true){

    case xp <= 1000:
        nivel = "Ferro";
        break
    case xp > 1000 && xp < 2001:
        nivel = "Bronze"
        break
    case xp > 2000 && xp < 5001:
        nivel = "prata"
        break
    case xp > 5000 && xp < 7001:
        nivel = "Ouro"
        break
    case xp > 7000 && xp < 8001:
        nivel = "Platina"
        break
    case xp > 8000 && xp < 9001:
        nivel = "Ascendente"
        break
    case xp > 9000 && xp < 10001:
        nivel = "Imortal"
        break
    case xp > 10000:
        nivel = "Radiante"
        break
    }
    console.log(msg + nivel)
} while (false)