
const livros = require("./lista-livros")

function menorValor(arrProdutos, posicaoInicial){
    let maisBarato = posicaoInicial

    for (let atual =posicaoInicial; atual < arrProdutos.length; atual++){
        //code 
    
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual
        }
    }

    return maisBarato
}


//console.log(`o livro mais barato custa ${livros[maisBarato].preco} e seu nome é ${livros[maisBarato].titulo}`)

module.exports = menorValor