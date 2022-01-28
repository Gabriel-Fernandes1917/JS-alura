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
        },
        {
            nome: "Samiry Almeida",
            parentesco: "filha",
            dataNasc: "04/01/2013"
        }
    ],
    saldo: 100,
    depositar: function(valor){
        // this refere-se ao objeto "esse"
        this.saldo += valor
    }
  }
  

  const propsCliente = Object.keys(cliente)
  //.keys(obj) return the keys the object
  console.log(propsCliente)

  function oferecerSeguro(obj){
      const propsCliente = Object.keys(obj)
      if(propsCliente.includes("dependentes")){

          //.includes("key") verifica se o parametro existe ou não
          console.log(`Oferta de seguro de vida para ${obj.nome}`)
      }
  }


  console.log(Object.values(cliente)) // return the values the object
  console.log(Object.entries(cliente)) // return one array with keys and values in format the array
  oferecerSeguro(cliente)