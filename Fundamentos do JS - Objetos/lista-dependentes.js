const cliente = {
    nome: 'Andre',
    sobrenome: 'Souza',
    idade: 36,
    cpf: '12121223434',
    email: 'edson@cesupa.com',
    fones: [ '5592323232323', '558923232323' ],
    // tranform the obj in array object
    dependentes: [{
         nome: 'Sara Silva',
          parentesco: 'filha',
           datasNasc: '20/03/2011' 
        }]
  }
  // add 
  cliente.dependentes.push({
      nome: "Samiry Almeida",
      parentesco: "filha",
      dataNasc: "04/01/2013"
  })

  //console.log(cliente)

  const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2013")
// filter() returno one array 
  console.log(filhaMaisNova[0].nome)