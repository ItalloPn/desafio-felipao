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