const cliente = {
    nome: "Andre",
    sobrenome :"Souza",
    idade: 36,
    cpf: "12121223434",
    email: "edson@cesupa.com"
}
// consult object with array
const chaves = ["nome", "idade", "cpf", "email"]

const t = "sobrenome"

//console.log(cliente[chaves[1]])
//console.log(cliente[t])// we can´t use .variable 

chaves.forEach( infos=>console.log(cliente[infos]))