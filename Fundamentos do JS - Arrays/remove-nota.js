const notes = [10, 6.5 , 8, 5, 10]
const names = ["jose", "Pedro", "Miranda"]



let ObjAmeria = {
    name: "Ameria",
    cpf: 0901909
}

let peoples = [{
    name: "jose",
    cpf: 0323232323
    
},
 ObjAmeria 



]
console.log(peoples.find((pessoa)=>{
    if(pessoa.name == "Ameria"){
        return true
    }
}))
console.log(peoples.includes(ObjAmeria))
//notes.find(10)// remove the lest element in the array
/*console.log(notes.find((note )=>{
    //console.log(note)
    if(note == 8){
        return true
    }
     

   // return true
}))

let median = (notes[0]+notes[1]+notes[2]+notes[3])/notes.length

console.log(`Your median is ${median}`)*/