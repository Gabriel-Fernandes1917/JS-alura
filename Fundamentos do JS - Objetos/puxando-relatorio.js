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
  
  let relatorio="";
  //varrer objeto
  for ( let info in cliente){
      // let info armazena cada dado do abj cliente
      if(typeof cliente[info] === "object" || typeof cliente[info] ==="function")
      { // typeof return the type the element
          continue
      }else{// notação de [] serve para passar chaves 
          relatorio += `
          ${info} ==> ${cliente[info]}
          `
      }
  }

  console.log(relatorio)
