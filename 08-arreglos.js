const persona = ["Victoria", 25, true, "otroElemento"]

// Acceder a los valores de un arreglo
persona[0] //devuelve "Victoria"
persona[1] //devuelve 25
persona[2] //devuelve true

//Largo del arreglo
persona.length

//PUSH - sumo elemento al final
persona.push("argentina")

//POP - elimina el ultimo y lo devuelve 
const nacionalidad = persona.pop()

//UNSHIFT - suma elemento al principio
persona.unshift("primerValor")

//SHIFT - elimina elemento al principio y lo devuelve
persona.shift() // devuelve "primerValor"

//RECORRO ARREGLOS CON UN FOR

for(let i = 0; i<persona.length; i++){
    console.log(persona[i])
}
