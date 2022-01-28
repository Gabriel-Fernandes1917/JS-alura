const clientes = [
    {
        nome: 'Andre',
        cpf: '1212121212',
        dependentes: [{
             nome: 'Sara Silva',
              parentesco: 'filha',
               datasNasc: '20/03/2011' 
            },
            {
                nome: "Samiry Almeida",
                parentesco: "filha",
                dataNasc: "04/01/2013"
            }
        ],
    },

    {
        nome: 'Juliana',
        cpf: '4554545454',
        dependentes: [{
             nome: 'Chiquinha',
              parentesco: 'filha',
               datasNasc: '20/03/2001' 
            },
            {
                nome: "Quico",
                parentesco: "filha",
                dataNasc: "04/01/2016"
            }
        ],
    }

]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]
//.. operador de espaçamentos, ele pega qualquer objeto interado e desmebra em pedaços individuais
//console.log(listaDependentes)
console.table(listaDependentes)