// CALLBACK



// funzione principale
/*function welcomeUser(u, cb){
    cb(u)
}*/

function welcomeUser(u, cb){
    console.log("Performing operations ...")
    setTimeout( function(){cb(u)}, 2000 )
    console.log("Waiting for welcome")
} //USIAMO JAVASCRIPT IN MODO ASINCRONO. Nel mentre che si esegue la funzione vengono mandati dei messaggi

// callback
function messageToUser(user){
    console.log(`Welcome ${user}`)
}

welcomeUser("Paola", messageToUser)
