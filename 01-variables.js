console.log("Bienvenido a mi web!")

// console.log(firstName) // Cannot access 'firstName' before initialization - no puedo acceder a un valor antes de asignar
//Declaro variables
const firstName = "Victoria"
const surname = "Di Liscia"
let age = 25
let knowsJavascript = true
let nationality
let hobbies = null

console.log(firstName, surname, age, knowsJavascript, nationality, hobbies) //puedo loggear los valores de variable

age = 26 // puedo reasignar valor porque es una variable let
console.log(age)

typeof firstName // devuelve "string"
typeof age // devuelve "number"
typeof knowsJavascript // devuelve "boolean"
typeof nationality // devuelve "undefined"
typeof hobbies // devuelve "object" - porque null es un objeto

// Ejercicio
const nombre = "Maximiliano"
let edad = 35
let viveEnAmerica = true

console.log(nombre)
console.log(edad)
console.log(viveEnAmerica)