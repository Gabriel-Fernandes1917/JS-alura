const salaJS =     [7 ,8, 8, 7, 4,3 ,3, 2,1]
const salaJava =   [2 ,5 ,7, 8 ,8, 10, 10]
const salaPython = [ 7, 7 ,8, 9, 6,4]

function mediaSala(notasDaSala){
    //reduce retorna todo o array em um inico valor
    const somaDasNotas = notasDaSala.reduce((acumulaodr, atual)=>
                        //, 0 é o valor inicial da variavel
        atual + acumulaodr,0)
        return somaDasNotas///notasDaSala.length
    
}
    console.log(mediaSala(salaJava))

console.log(`Média da sala de JS ${mediaSala(salaJS)}`)
console.log(`Média da sala de Java ${mediaSala(salaJava)}`)
console.log(`Média da sala de Python ${mediaSala(salaPython)}`)