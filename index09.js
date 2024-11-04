// SPREAD NOTATION
// OPERATORE ...  che fa una copia dell'array in questione

const arrayA = [1,2,3]
const arrayB = [4,5,6]

const arrayC = [...arrayA, ...arrayB] //fa una copia unendo gli array
console.log(arrayC)

const copiedA = [...arrayA]
console.log(copiedA)

const obj1 = {a: 1, b:2, c:3}
const obj2 = {c:0, d:4} //se c ha un valore diverso viene preso l'ultimo quindi quello del secondo oggetto(obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3)


array = [1,2,3,4,5,6,7,8,9]
const [a, b, ...rest] = array //crea un array "rest" per tutto il resto dei numeri che non sono stati messi per argomento
console.log(a,b,rest)