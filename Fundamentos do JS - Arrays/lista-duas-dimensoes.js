const students = ['João', 'Pedro', 'Helena', 'julia', 'Carolina']

const medianStudentes = [10, 4, 8,5]
// lista de 2 dimensões é uma lista que contem listas
let listTheNotesAndStudents = [students, medianStudentes]
                                    //[list][position]
console.log(`${listTheNotesAndStudents[0][0]} sua nota é ${listTheNotesAndStudents[1][0]}`)