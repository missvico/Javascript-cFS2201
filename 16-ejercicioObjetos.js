// EJERCICIO 3
// Crear una función llamada “filterProducts” que reciba por parámetro un arreglo de objetos y una propiedad y devuelva un arreglo con los valores de esa propiedad:

const arrayProducts = [
    {name: "coca-cola", price: 400, hayStock: true},
    {name: "galletitas", price: 500, hayStock: false},
    {name: "caramelo", price: 30, hayStock: true},
    {name: "agua", price: 200, hayStock: false}
]

function filterProducts(array, property){
    const result = []

    for(let i = 0; i < array.length; i++){
        result.push(array[i][property])
    }
    return result
}

function filterProductsMap(array, property){
    return array.map(
        function(element){
            return element[property]
        }
    )
}

const filterProductsMapOneLine = (array, property) => (array.map((element)=>element[property]))
        


