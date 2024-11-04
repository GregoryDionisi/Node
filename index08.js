// DESTRUCTURING serve a spacchettare un array o un oggetto

const array = [1,2,3,4,5];


const a = array[0];
const b = array[1];
const c = array[2];
const d = array[3];
const e = array[4]; //metodo più lento

console.log(a,b,c,d,e)

const [f,g,h,i,j] = array
console.log(f,g,h,i,j) //metodo più veloce

function fun(){
    return [1,2,3]
}

const [o,p,q] = fun() //quando definisci una costante oggetto usa le parentesi quadre
console.log(o,p,q)

const obj = {nome: "Bob", cognome: "Red", eta: 35, professione: "insegnante"} //quando inserisci all'interno dell'oggetto la professione, dà priorità a quest'ultima
const name = obj.nome
console.log(name) //metodo più lento


const {nome, cognome, eta, professione = "medico"} = obj //quando definisci una costante oggetto usa le parentesi graffe. Si può mettere manualmente nella costante un valore di recall se non è presente all'interno dell'oggetto in questione
console.log(nome, cognome, eta, professione)


let x = 5
let y = 3; //metti ; perchè sennò non funziona siccome va in conflitto con le parentesi quadre dello scambio di variabili


//x, y = y, x in python

[x,y] = [y,x] //scambiare le variabili. 
console.log(x, y)