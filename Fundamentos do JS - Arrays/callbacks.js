const nome = ["Ana", "Pampolha", "Leo", "Jhun"]
//callback(assicrona) não é executado na hora, apenas quando o usuario responder

function ImprimeNomes(nome){
    console.log(nome)
}
nome.forEach(ImprimeNomes,posicao)