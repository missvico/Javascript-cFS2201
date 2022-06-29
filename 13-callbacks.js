function saludar (nombre){
    alert("Hola "+ nombre)
}

function despedir (nombre){
    alert("Chau "+ nombre)
}

function contarLetras (nombre){
    console.log(nombre.length)
}

function procesarUsuario(callback){
    const name = prompt("Cual es tu nombre?")
    callback(name)
}

procesarUsuario(saludar)

procesarUsuario(despedir)

procesarUsuario(contarLetras)