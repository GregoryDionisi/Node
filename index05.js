//ARROW FUNCTION

let x = 2
let y = 4
function somma(n1, n2){
    return n1 + n2
}

console.log("1) " + somma(x,y))

const total = function (n1, n2){
    return n1 + n2
}

console.log("2) " + total(x,y))

const totalArrow = (n1, n2) => { //funzione sottoforma di arrowfunction
    return n1 + n2
}

console.log("3) " + totalArrow(x,y))

const totalArrowBest = (n1, n2) => n1 + n2 //si può fare solo se la funzione è molto semplice e c'è un solo output


console.log("4) " + totalArrowBest(x,y))


const double = n => n*2

console.log(double(x))

const saluta = (name) => console.log("Ciao!" + name)
saluta("Bob")



// ESEMPIO

const checkEta = (age) = age >= 18 ? "Maggiorenne" : "Minorenne"


console.log(checkEta(20))

