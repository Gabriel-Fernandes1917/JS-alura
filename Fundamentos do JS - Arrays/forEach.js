// media com For Each
const nota = [10, 6, 3.5, 10]

let somaDasNotas = 0

nota.forEach( nota => {
    //faz o loop automaticamente 
    //callback
    somaDasNotas += nota
})

let media = somaDasNotas/nota.length

console.log(media)