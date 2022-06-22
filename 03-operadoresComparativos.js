
const a = 2
const b = 3
const c = 5
const d = "5"
const e = 2

const AmayorB = a > b  // false
const AmenorB = a < b  //true

const AmayorOigualB = a >= b  //false
const AmenorOigualB = a <= b  //true

const AmayorOigualE = a >= e //true
const AmenorOigualE = a <= e  //true

//IGUALDAD ESTRICTA

const AigualB = a === b //False
const AigualE = a === e //Verdadero

const CigualD = c === d //false porque tienen distinto tipo

//IGUALDAD ABSTRACTA

const CigualAbsD = c == d //true porque hace transformacion de tipo


//DESIGUALDAD ESTRICTA

const CdesigualD = c !== d //true porque tienen distinto tipo

//DESIGUALDAD ABSTRACTA

const CdesigualAbsD = c != d //false porque hace transformacion de tipo
