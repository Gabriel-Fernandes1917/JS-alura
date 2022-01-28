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
//extends rerdar da classe cliente
class clientePoupanca extends cliente{
    constructor(nome, email , cpf, saldo, saldoPoup){
        super(nome, email, cpf, saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }
}

const andre = new clientePoupanca("andre", "a@dsds", "232345544", 300,90)

console.log(andre)

andre.depositar(34)
andre.depositarPoup(120)

console.log(andre)