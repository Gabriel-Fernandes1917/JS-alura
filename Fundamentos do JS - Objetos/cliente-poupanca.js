function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email= email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo+=valor
    }
} 

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
    
    // chamar propriedade do cliente
    cliente.call(this,nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const Juliana = new clientePoupanca("Juliana", "23232323", "ju2323@gmail.cm", 122, 300)

//console.log(Juliana)

clientePoupanca.prototype.depositarpoup = function(valor){
    this.saldoPoup += valor
}

Juliana.depositarpoup(30)

console.log(Juliana.saldoPoup)