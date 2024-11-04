people = [
    {
        "id": 1,
        "nome": "Mario",
        "cognome": "Rossi",
        "eta": 30
    },
    {
        "id": 2,
        "nome": "Luca",
        "cognome": "Bianchi",
        "eta": 25
    },
    {
        "id": 3,
        "nome": "Giuseppe",
        "cognome": "Verdi",
        "eta": 40
    },
    {
        "id": 4,
        "nome": "Giovanni",
        "cognome": "Neri",
        "eta": 35
    },
    {
        "id": 5,
        "nome": "Paolo",
        "cognome": "Gialli",
        "eta": 45
    },
    {
        "id": 6,
        "nome": "Davide",
        "cognome": "Marroni",
        "eta": 50
    },
    {
        "id": 7,
        "nome": "Fabio",
        "cognome": "Blu",
        "eta": 55
    },
    {
        "id": 8,
        "nome": "Antonio",
        "cognome": "Arancioni",
        "eta": 60
    },
    {
        "id": 9,
        "nome": "Alberto",
        "cognome": "Viola",
        "eta": 65
    },
    {
        "id": 10,
        "nome": "Roberto",
        "cognome": "Rosa",
        "eta": 70
    }
]


// ``

// .map()
const list = people.map( person => `${person.nome} ${person.cognome}` ) //metodo molto simile al forEach
console.log(list)



// .forEach
people.forEach( person => console.log(`${person.nome} ${person.cognome}`))


// .filter()
const over40 = people.filter(person => person.eta > 40)
console.log(over40)
console.table(over40) //pern una migliore visualizzazione


// .find()
const findOver40 = people.find(person => person.eta > 40)
console.log(findOver40)


// .some() dice se c'è almeno un elemento che soddisfa la condizione
const someOver40 = people.some(person => person.eta > 40)
console.log(someOver40)



// .every() dice se tutti soddisfano la condizione
const everyOver40 = people.every(person => person.eta > 40)
console.log(everyOver40)



// .reduce ritorna un valore accumulato scorrendo tutto l'array
const numeri = [1,2,3,4,5]

const totale = numeri.reduce( (acc, n) => acc + n  , 0) //acc=accumulatore, mentre lo 0 è il secondo argomento ed è il numero dai cui partiamo
console.log(totale)

const averageAge = people.reduce( (acc, person) => acc + person.eta, 0)/people.length
console.log(averageAge)



// .sort()
people.sort( (p1, p2) => p1.eta - p2.eta ) //se facciamo la sottrazione ordiniamo in ordine crescente
console.table(people)

