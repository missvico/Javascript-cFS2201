const persona = {
    nombre: "Victoria",
    apellido: "Di Liscia",
    edad: 25,
    sabeProgramar: true,
    lenguagesConocidos: ["HTML", "CSS", "Javascript"]
}

//DOT NOTATION

persona.nombre //devuelve "Victoria"

//BRACKET NOTATION

persona["nombre"] //devuelve "Victoria"

//Puedo agregar propiedades con dot y bracket

persona.nacionalidad = "argentina"
persona["genero"] = "F"

//Puedo reasignar variables con dot y bracket 
persona.edad = 26
persona["edad"] = 27

//puedo variar el tipo de dato alojado
persona.edad = "veinticinco"

//Puedo acceder a los objetos o arreglos que estan dentro de una propiedad

persona.lenguagesConocidos[0] //me devuelve HTML
persona.lenguagesConocidos.push("Python") //le agrega un lenguage a la propiedad lenguagesConocidos

//puedo loopear sobre un arreglo

for(let i =0 ; i< persona.lenguagesConocidos.length; i++){
    console.log(persona.lenguagesConocidos[i])
}