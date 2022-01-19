const names = ['João','Helena', 'julia', 'Carolina']

const notes = [10, 4, 8,5]

const reprovados = names.filter((student, indeice)=>
    notes[indeice] < 5
)

console.log(`reprovados: ${reprovados}`)