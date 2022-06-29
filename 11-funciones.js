
//const firstName = prompt("Cual es tu nombre?")

//saludar(firstName) 
// saludar("Maria")
// saludar(otherName)

//si la declaro de esta forma puedo llamarla
function saludar (nombre) {
    if(typeof nombre != "string"){
        alert("Ingresa nombre valido")
    }else {
        alert(`Hola ${nombre}!`)
    }
}

// const otherName = "Juan"
//despedir(firstName) -ERROR: Uncaught ReferenceError: Cannot access 'despedir' before initialization

const despedir = function(nombre){
    alert(`Chau ${nombre}!`)
}
//despedir(firstName) // si las declaro dentro de una variable tengo que llamar a la funcion DESPUES de la declaracion


//RETURN
function add (number1, number2){
    console.log("aca hay un log")
    return number1 + number2
    return "a este no va a llegar"
    console.log("esto no se va a ejecutar porque esta despues de un return ejecutado")
}
const sumadosytres = add(2,3) //puedo hacer acciones con el valor retornado de una funcion, tal como guardarlo en una variable

//VARIOS RETURN CON CONDICIONALES - puedo tener mas de uno si se ejecutan en distintas situaciones, al final solo uno va a ser el que corra.

function ingreso (age){
    if(age >= 18){
        return "Podes ingresar al club y al bar"
    }else if(age >= 16){
        return "Podes entrar al club pero no al bar"
    }else{
        return "No pueden entrar al club"
    }
}

//ARROW FUNCTION
let duplicate = (number)=>{
    return number * 2
}
let duplicateSinReturn = number => number*2 //hace lo mismo que arriba


//!! Solo puedo no poner return si el cuerpo de la funcion tiene una sola linea
//!!solo puedo sacarle los parentesis si tengo solo un argumento

// ctrl+ /
// alt+ flecha arriba o abajo para mover lineas

