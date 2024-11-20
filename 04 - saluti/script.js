/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';

const name2 = 'Simo'
// Dichiara la funzione qui.

function salutoCompleto (nome){

    let saluto = `Ciao ${nome}`

    return saluto
}

// Invoca la funzione qui e stampa il risultato in console

console.log(salutoCompleto(name2))

//Risultato atteso se si passa 'Mario': // ciao Mario