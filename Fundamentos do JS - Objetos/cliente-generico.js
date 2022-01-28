
// função contrutora
function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email= email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo+=valor
    }
} 
// new parada reservada, usamos essa teg para informar que estamos criando uma nova instancia e não so add valores
const andre = new cliente("Luiz", "1212121212", "andreLuiz23@gmail.com", 250)

console.log(andre)