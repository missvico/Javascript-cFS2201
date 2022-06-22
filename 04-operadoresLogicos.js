
const comparacionfalse = 2 > 3 //false
const comparaciontrue = 4 < 6 //true
const string = "nombre" //true
const cero = 0 //false
const stringVacio = "" //false
const numero = 12 //true

//****************OR****************

//SI ALGUNO ES TRUE - DEVUELVE EL VALOR DEL PRIMER TERMINO TRUTHY QUE ENCUENTRE

console.log(comparaciontrue || comparacionfalse || string)

console.log(comparacionfalse || comparaciontrue || string) //devuelve true
console.log(string || comparaciontrue || comparacionfalse) //devuelve "nombre"


//TODOS SON FALSE - DEVUELVE EL VALOR DEL ULTIMO TERMINO

console.log(stringVacio || comparacionfalse || cero) //devuelve 0
console.log(cero || comparacionfalse || stringVacio) //devuelve ""

// Puedo poner varios terminos y no hace falta que siempre sean variables:

2 < 1 || 3 === "3" || "victoria" == 2 || 25 //devuelve 25

//****************AND****************

//SI ALGUNO ES FALSE - DEVUELVE EL VALOR DEL PRIMER TERMINO FALSEY QUE ENCUENTRE

console.log(comparaciontrue && comparacionfalse && string) //devuelve false
console.log(comparacionfalse  &&  comparaciontrue  &&  string) // devuelve false
console.log(cero  &&  comparaciontrue  &&  string) // devuelve 0
console.log( ) // devuelve ""

//SI TODOS SON TRUE - devuelve el ultimo termino

console.log(comparaciontrue && string && numero) //devuelve 12
console.log(comparaciontrue && numero && string) //devuelve "nombre"


//NOT - devuelve el booleano contrario

console.log(!true) //devuelve false
console.log(!false) //devuelve true

console.log(!string) //false 
console.log(!cero) //true 
console.log(!0) //true 

Boolean("victoria") // es igual a ...
!!"victoria"


Boolean("") // es igual a ...
!!""

