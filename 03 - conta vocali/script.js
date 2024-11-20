/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function trovaVocali (parola){
    
    let vocali = 'aAeEiIoOuU'
    let contavocali = 0;
    
    for(let i = 0; i < parola.length; i++){
        if(vocali.indexOf(parola[i]) !== -1){
            contavocali += 1;
        }
    }

    return contavocali;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(trovaVocali(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)