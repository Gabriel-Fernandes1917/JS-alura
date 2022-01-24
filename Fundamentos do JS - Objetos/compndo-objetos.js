
const cliente = {
    nome: "Andre",
    sobrenome :"Souza",
    idade: 36,
    cpf: "12121223434",
    email: "edson@cesupa.com",
    //array in tho object
    fones:["5592323232323", "558923232323"]
}
 // add objtec in outher object
cliente.dependentes = {
    nome:"Sara",
    parentesco: "filha",
    datasNasc: "20/03/2011"
}

console.log(cliente)
// change the obj name in dependentes in clientes
cliente.dependentes.nome = "Sara Silva"
console.log(cliente)