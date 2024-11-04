// OGGETTI

let user = {}

user = {
    name: "Bob",
    age: 23,
    isAdmin: true,
    saluta(){
        const stringa = "Ciao " + this.name //this. si riferisce all'oggettone stesso in cui è contenuto
        return stringa}
}

console.log(user)
console.log(user.name)

user.surname = "Black"
console.log(user)

delete user.surname
console.log(user)

user.address = {
    street: "via Brescia",
    city: "Mantova"
}


console.log(user)

user.hobbies = ["football", "tennis"]
console.log(user)

console.log(user.bla)

console.log(user.saluta())