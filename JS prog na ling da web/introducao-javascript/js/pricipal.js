// // DOM or document represent elements html in JS
// let x = document.querySelector("h1")
// console.log(x)
// console.log(x.textContent) // print only text without tags

// x.textContent = "Mudou"


let paciente = document.querySelector("#primeiro-paciente")
let peso = paciente.querySelector(".info-peso").textContent

let altura = paciente.querySelector(".info-altura").textContent
// console.log(paciente)

let imc = peso/(altura*altura)

console.log(imc)

let tdImc = paciente.querySelector(".info-imc")

tdImc.textContent = imc