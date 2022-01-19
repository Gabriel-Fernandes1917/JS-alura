const students = ['Pedro', 'Helena', 'julia', 'Carolina']

const medianStudentes = [10, 4, 8,5]

let listTheNotesAndStudents = [students, medianStudentes]

const showNomeNote = (studentName) =>{
    //.includes faz uma busca no array do parametro inserido, retornando true ou false
    if(listTheNotesAndStudents[0].includes(studentName)){
        //.indexOf retorna a posisão do elemento que condis com o parametro inserido
        let indice = listTheNotesAndStudents[0].indexOf(studentName)

        return listTheNotesAndStudents[0][indice] + ', sua media é '+listTheNotesAndStudents[1][indice]


    }else{
        return "Aluno não esta cadastrado"
    }
}

console.log(showNomeNote("Helena"))
                             
