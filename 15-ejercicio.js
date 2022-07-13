// Armar un script y declarar un arreglo con los nombres de 5 personas. Utilizando los array methods aprendidos hacer las siguientes acciones:
// Utilizando .forEach() loggear en la consola el nombre de las 5 personas.
// Utilizando .slice() guardar en una variable un nuevo arreglo que vaya desde la segunda hasta la cuarta persona inclusive. Loggear ese arreglo
// Utilizando .map() guardar en una variable un arreglo de números que indique la cantidad de letras que tiene cada nombre. Loggear ese arreglo.
// Utilizando .join() guardar en una variable un string que contenga a todos los nombres separados por un espacio. Loggear ese string.
// Utilizando .filter() guardar en una variable un arreglo de nombres que solo contenga a los nombres que terminan con la letra “a”. 

const names = ["Alejandro", "Julio", "Cecilia", "Maximiliano", "Fernanda"]

names.forEach(
    function(name){
        console.log(name)
    }
)

const namesExtract = names.slice(1,4)

const namesLength = names.map(
    function(name){
        return name.length
    }
)

const concatNames = names.join(" ")

const namesEndWithA = names.filter(
    function(name){
        return name[name.length-1] === "a"
    }
)