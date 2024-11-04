// TEMPLATE LITERALS

let name = "Bob"
let age = 30

let message = "Ciao " + name + " lo so che hai " + age + " anni"
message = `Ciao ${name} lo so che hai ${age} anni` //alt + 96 per backtick ``: modo migliore per scrivere le stringhe
console.log(message)


let n1 = 3
let n2 = 5
console.log(`La somma di ${n1} e ${n2} è ${n1 + n2}`)

let multiline = `Questo è una stringa multiline.
Posso scrivere su più righe` //backtick permette di scrivere su più righe