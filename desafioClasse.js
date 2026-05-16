/*
Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/


class hero{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }

    atack(power){
        if (this.type === "mago"){
            power = "magia"
        } else if (this.type === "guerreiro"){
            power = "espada"
        } else if (this.type === "monge"){
            power = "artes marciais"
        } else {power = "shuriken"}

        console.log(`O ${this.type} ${this.name} atacou usando ${power}`)
    }
}

let mago = new hero("Natsu", "400", "mago")
let guerreiro = new hero("Zoro", "21", "guerreiro")

mago.atack()
guerreiro.atack()