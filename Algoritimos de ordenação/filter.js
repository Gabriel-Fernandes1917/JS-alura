
const pratos = [
    {nome: "Tapioca",
     price: 7.5
    },
    {
        nome: "Tapioca com ovo",
        price: 8
    },
    {
        nome: "Salame",
        price: 5
    },
    {
        nome: "Peru",
        price: 9
    }
]

    // const cardapio = pratos.filter( (empresa => (empresa.nome == "Tapioca")))

    //filter create a new array with all the elements passing in test array.filter(test)

    const cardapio = pratos.filter(item => (
         item.nome.includes("Tapioca") 

    ))

    console.log(cardapio)