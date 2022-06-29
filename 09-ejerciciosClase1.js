const age = prompt("¿cual es tu edad?")

if(age >= 18){
    alert("Podes ingresar al club y al bar")
}else if(age >= 16){
    alert("Podes entrar al club pero no al bar")
}else{
    alert("No pueden entrar al club")
}

const movies = ["Kung Fu Panda", "Top Gun", "John Wick"]

console.log(movies)

movies.push("Matrix")

console.log(movies.length)

// Ej: “El padrino está 1° en mi lista de películas favoritas”

for(let i = 0; i < movies.length; i++){
    console.log(movies[i] +" está "+ (i + 1) +"° en mi lista de películas favoritas")
    console.log(`${movies[i]} está ${i+1}° en mi lista de películas favoritas`) //backtip `
}