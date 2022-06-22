//OPERADORES ARITMETICOS

const a = 2
const b = 3
const c = 5

const tripleC = c * 3
const suma = a + b
const resta = c - b
const multiplicacion = a * b
const division = c/a
const resto = c%b

let index = 1

index = index + 1 // forma inicial para sumarle uno a index
index += 1 // idem anterior mas resumido

index += 2 // le suma dos a index
index -= 2 // le resta dos a index

index++ //incremento, le suma 1 a index
++index // incremento, tambien le suma 1 a index

index-- //decremento, le resta 1 a index
--index // decremento, tambien le resta 1 a index

// conversion de tipo 
const suma22 = 22 + "1" //lo concatena a un string y devuelve "221"

Number("25") // si paso un string que puede ser transformado a Numero me devuelve un numero
Number("veinte") // no va a devolverme un numero porque es un texto, me devuelve "NaN"

String(22) // va a devolverme "22"
String(true) // va a devolver "true"


//VALORES FALSEY - valores que son false cuando se pasan a Booleano
Boolean(0) // false
Boolean("") //false
Boolean(undefined) //false
Boolean(null) //false
Boolean(false) //false

// todos los demas valores me devuelven true al ser pasados por boolean

