// OPERATORE ?

// OPERATORE TERNARIO

let age = 18

if (age >= 18){
    console.log("Maggiorenne")
} else {
    console.log("Minorenne")
}

let result = age >= 18 ? "Maggiorenne" : "Minorenne"
console.log(result)

// OPERATORE TERNARIO ANNIDATO
let vote = 3

result = vote >= 6 ? "Sufficiente" : vote <= 4 ? "Gravemente insufficiente" : "Insufficiente"
console.log(result)