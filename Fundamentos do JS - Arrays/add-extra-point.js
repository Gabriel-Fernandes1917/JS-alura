const note = [10, 9 , 8 , 7 , 6]

//map é como se fosse o forEach porem ele retorna o valor 
// ++notes soma antes, notes++ soma depois
const updateNote = note.map( notes => notes == 10? notes : ++notes)

console.log(updateNote)