// // DOM or document represent elements html in JS
// let x = document.querySelector("h1")
// console.log(x)
// console.log(x.textContent) // print only text without tags

// x.textContent = "Mudou"


let pacientes = document.querySelectorAll(".paciente") // querySelectorAll return all de elementes, return one array with all the elementes with class

for(let i =0; i<pacientes.length; i++){

    let paciente = pacientes[i]

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
        //paciente.style.backgroundColor = "lightcoral"; // style is one param for input elements in to CSS. ex : style.backgroundColor = "blue"
        paciente.classList.add("pacienteInvalido")// classList is one param for change the class css for JS. 
    }
    
    if(altura < 0 || altura > 3.00){
        console.log("Altura invalida")
        alturaEhValido = false;
        tdImc.textContent = "Altura invalida"
        paciente.classList.add("pacienteInvalido") 
    }
    
    if(pesoEhValido && alturaEhValido){ // run if requisitions for true
    
        let imc = peso/(altura*altura)
    
        console.log(imc)
        
       
        
        tdImc.textContent = imc.toFixed(2) // toFixed limited decimal
    }
    

}

