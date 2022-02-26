const books = require("./lista-livros")
const menorvalor = require("./menorValor")

for(let atual = 0; atual < books.length -1; atual++){
    let menor = menorvalor(books, atual)

    console.log("posição atual", atual)
    let livrosAtual = books[atual]
    console.log(`atual`,books[atual])
    let livroMenorPreco = books[menor]
    console.log(`menor`,books[menor])
    
    books[atual] = livroMenorPreco
    books[menor] = livrosAtual
}

console.log(books)