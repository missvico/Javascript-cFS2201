//CONDICIONAL 

const nota = prompt("Cual es la nota final?")

if(nota < 4){
    console.log("Desaprobo")
    alert("Desaprobo")
}else if(nota < 7){
   console.log("Aprobó")
   alert("Aprobó")
}else {
    console.log("Promociono")
    alert("Promociono")
}