export default class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    toStrig(){
        return `Pessoa: ${this.nome}`
    }
}
