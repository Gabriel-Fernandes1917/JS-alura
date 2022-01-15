const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']
//.splice() permit your remove and add elemets whenever stay
//.splice(start, number the elements your want delete, what do input here)
//listaDeChamada.splice(1,1,'Gabriel'), if you select 0 in 2 param splice not delete anything
listaDeChamada.splice(3,1,'Joçao')

console.log(`Lista de chamada: ${listaDeChamada}`)