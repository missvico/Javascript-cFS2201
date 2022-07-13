// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(
//     function(response){
//         console.log(response)
//         return response.json()
//     }
// ).then(
//     function(json){
//         console.log(json)
//     }
// ).catch(
//     function(e){
//         console.log(e)
//     }
// )

const fetchUser = async function(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json = await response.json()
        console.log(json)
    }catch(e){
        console.log(e)
    }
}

//EJERCICO - ZONA DE PROMESAS
// Utilizando la API de Starwars: https://swapi.dev/ crear la función getCharacter que reciba como argumento el numero de id de un personaje y que loguee en consola la siguiente frase:
// “El nombre del personaje seleccionado es [name]”
// Hacer la función utilizando .then() y luego utilizando async await

function getCharacter(id){
    fetch(`https://swapi.dev/api/people/${id}`)
    .then(
        function(response){
            console.log(response)
            return response.json()
        }
    ).then(
        function(json){
            console.log(`El nombre del personaje seleccionado es ${json.name}`)
        }
    ).catch(
        function(error){
            console.log('No se encontro el personaje seleccionado')
        }
    )
}

async function getCharacterAsyncAwait(id){
    try{
        const responseCharacter = await fetch(`https://swapi.dev/api/people/${id}`)
        const jsonCharacter = await responseCharacter.json()
        
        const responsePlanet = await fetch(jsonCharacter.homeworld)
        const jsonPlanet = await responsePlanet.json()
        
        const arrayFetchs = jsonPlanet.residents.map(url => fetch(url))
        const arrayResponses = await Promise.all(arrayFetchs)
        const arrayJsonPromises = arrayResponses.map(response => response.json())
        const arrayResidents = await Promise.all(arrayJsonPromises)
            
        const listNamesResidents = arrayResidents.map(resident => resident.name).join(", ")
        
        console.log(`El nombre del personaje seleccionado es ${jsonCharacter.name} y nacio en el planeta ${jsonPlanet.name} como ${listNamesResidents} `)
         
    }catch(error){
        console.log('No se encontro el personaje seleccionado')
    }
}


