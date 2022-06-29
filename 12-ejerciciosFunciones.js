function saludar (nombre, genero){
    if(genero === "F"){
        alert(`Bienvenida ${nombre} a nuestra página.`)
    }else if(genero ==="M"){
        alert(`Bienvenido ${nombre} a nuestra página.`)
    }else{
        alert(`Bienvenid@ ${nombre} a nuestra página.`)
    }
}

function saludarDos (nombre, genero){
    let ultimaLetra = "@"
    
    if(genero === "F"){
        ultimaLetra = "a"
    }else if(genero ==="M"){
        ultimaLetra = "o"
    }
    alert(`Bienvenid${ultimaLetra} ${nombre} a nuestra página.`)
}