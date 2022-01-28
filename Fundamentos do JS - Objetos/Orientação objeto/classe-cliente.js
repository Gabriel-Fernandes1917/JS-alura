class cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    // metodo. São funçoes assim como antes, porem em classes n precissamos escrever function
    depositar(valor){
        this.saldo += valor
    }
    // metodo
    exibirSaldo(){
        console.log(this.saldo)
    }
}

const andre = new cliente("Luiz", "luiz2023@gsd.com", "2323232323", 200)

console.log(andre)

//andre.exibirSaldo()