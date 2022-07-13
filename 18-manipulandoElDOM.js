const title = document.querySelector("h1")
console.log(title)

const paragraphs = document.querySelectorAll("p")
console.log(paragraphs)

//Se comporta como un arreglo
paragraphs.forEach(
    function(p){
        console.log(p)
    }
)

const firstParagraph = document.getElementById("primer-parrafo")
console.log(firstParagraph)

const listElements = document.getElementsByClassName("list-element")
console.log(listElements)

firstParagraph.addEventListener(
    "click",
    function(event){
        if(event.target.style.color !== "red"){
            event.target.style.color = "red"
        }else{
            event.target.style.color = "black"
        }
       
    }
)

for(let i = 0; i<listElements.length; i++){
    listElements[i].addEventListener(
        "click",
        function(event){
            event.target.classList.toggle("checked")
        }
    )
}


///FORMULARIO SALUDAR
const button = document.getElementById("main-button")
const inputName = document.getElementById("main-input")
const inputGender = document.getElementById("gender-input")

let userName = ""
let userGender = ""

function saludar (nombre, genero){
    if(genero === "F"){
        alert(`Bienvenida ${nombre} a nuestra página.`)
    }else if(genero ==="M"){
        alert(`Bienvenido ${nombre} a nuestra página.`)
    }else{
        alert(`Bienvenid@ ${nombre} a nuestra página.`)
    }
}

inputName.addEventListener(
    "change",
    function(event){
        console.log(event.target.value)
        userName = event.target.value
    }
)

inputGender.addEventListener(
    "change",
    function(event){
        console.log(event.target.value)
        userGender = event.target.value
    }
)

button.addEventListener(
    "click",
    function(){
        saludar(userName, userGender)
    }
)











