// // DOM or document represent elements html in JS
// let x = document.querySelector("h1")
// console.log(x)
// console.log(x.textContent) // print only text without tags

// x.textContent = "Mudou"


let paciente = document.querySelector("#primeiro-paciente")
let peso = paciente.querySelector(".info-peso").textContent

let altura = paciente.querySelector(".info-altura").textContent
// console.log(paciente)
let tdImc = paciente.querySelector(".info-imc")

let pesoEhValido = true;
let alturaEhValido = true;

if(peso < 0 || peso > 1000){
    console.log("peso invalido")
    pesoEhValido = false;
    tdImc.textContent = "peso invalido"
}

if(altura < 0 || altura > 3.00){
    console.log("Altura invalida")
    alturaEhValido = false;
    tdImc.textContent = "Altura invalida"
}

if(pesoEhValido && alturaEhValido){ // run if requisitions for true

    let imc = peso/(altura*altura)

    console.log(imc)
    
   
    
    tdImc.textContent = imc
}
