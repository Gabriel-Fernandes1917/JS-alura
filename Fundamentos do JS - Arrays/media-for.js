const nota = [10, 6, 3.5, 10]

let somaDasNotas = 0 

for (let i = 0; i < nota.length; i++){
    // += soma o valor dela msm + o da outra variavel
    somaDasNotas += nota[i]
}

let media = somaDasNotas/nota.length

console.log(media)