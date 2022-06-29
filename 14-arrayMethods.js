const numbers = [2,5,9,14]


//FOR EACH - ejecuta una funcion pasandole por argumento cada elemento del arreglo

// numbers.forEach(
//     function(number, i){
//         console.log("index: ", i)
//         console.log(number*2)
//     }
// )

//MAP

const numbersDouble = numbers.map(
    function(number){
        return number*2
    }
)

const numbersTriple = numbers.map(
    function(number){
        return number*3
    }
)

//FILTER

const evenNumbers = numbers.filter(
    function(number){
        return number%2 === 0
    }
)

const oddNumbers = numbers.filter(
    function(number){
        return number%2
    }
)

const multiplosDeTres = numbers.filter(
    function(number){
        return !(number%3)
    }
)

//REDUCE
//[2,5,9,14]

const sumaTotal = numbers.reduce(
    function(acumulador, valorActual, index){
        console.log("Vuelta ", index, "ACUMULADOR: ", acumulador, " - VALOR ACTUAL: ", valorActual)
        console.log("la suma es: ",  acumulador + valorActual)
        return acumulador + valorActual
})

const restaTotal = numbers.reduce(
    function(acumulador, valorActual, index){
        console.log("Vuelta ", index, "ACUMULADOR: ", acumulador, " - VALOR ACTUAL: ", valorActual)
        console.log("la resta es: ",  acumulador - valorActual)
        return acumulador - valorActual
})

function sumarArreglo(array){
    return array.reduce(
        function(acumulador, valorActual, index){
            return acumulador + valorActual
    })
}

const copiaN = numbers.slice()


const copiaN2 = numbers.slice(1,3) //es [5, 9] - INCLUYE al primer indice y EXCLUYE al ultimo


numbers.includes(2) //retorna un booleano si encuentra un elemento que coincide
numbers.includes(11)

numbers.indexOf(5) // retorna 1 - el primer indice del elemento que coincida
numbers.indexOf(11) // retorna -1 porque no lo encuentra

numbers.push(5) //agrego un 5 para el ejemplo*
numbers.lastIndexOf(5) // retorna 4 - el ultimo indice del elemento que coincida


//SPLIT Y JOIN

const fullName = "Juan Ignacio Perez"

const nameArray = fullName.split(" ") //devuelve ['Juan', 'Ignacio', 'Perez']
const nameJoined = fullName.join(" - ") 

