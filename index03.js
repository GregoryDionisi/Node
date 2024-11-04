// VAR, LET, CONST


// AMBITO DI VISIBILITà
// MODULE SCOPE
/*{
    let name = "Bob"
    const city = "Milan"
    var age = 45
}*/ //il modulo è la porzione di codice racchiusa tra parentesi graffe

//console.log(name) //non funziona
//console.log(city) //non funziona
//console.log(age) //se usi VAR è accessibile anche al di fuori del modulo




// FUNCTION SCOPE
function sayHello(){
    let name = "Bob"
    const city = "Milan"
    var age = 45
}

//console.log(name) //non funziona
//console.log(city) //non funziona
//console.log(age) //non funziona




// GLOBAL SCOPE
/*let name = "Bob"
const city = "Milan"
var age = 45

{
console.log(name) //funziona
console.log(city) //funziona
console.log(age) //funziona
}*/




// REASSIGMENT
/*let num = 10
num = 20 //con const NON si può fare

const user = {
    name: "Bob",
    age: 34
}*/

/*user = {
    name: "Bob",
    age: 35 //essendo COSTANTE non può essere riassegnato
}*/


/*user.age = 35 //l'unico modo per riassegnare è ACCEDENDO DIRETTAMENTE alla proprietà
console.log(user)*/


const colors = ["blue","red"]
//colors = ["blue","red","green"] //non si può aggiungere perchè è COSTANTE
colors.push("green") //solo utilizzando le funzioni degli array si può aggiungere 
console.log(colors)


var n = 12
var n = 23
var n = "numero" //con VAR è possibile riassegnare come vuoi e prende l'ultima modifica

// REDECLARATION
console.log(cat)
var cat = "Fufi" //LET in questa situazione dà errore, mentre se usi VAR dà solo "undefined"




// ACCESSIBILITY