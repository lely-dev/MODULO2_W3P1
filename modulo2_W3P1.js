/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare 
 la loro somma moltiplicata per 3.
*/

// let numb1 = 4;
// let numb2 = 4;

// function crazySum(){
//     if(numb1 === numb2) {
//         console.log((numb1 + numb2) *3 ) 
//     } else {console.log(numb1 += numb2)}
    
// }

// crazySum()




/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale 
 parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

// let numbIntero = 300;

// function boundary(myNumb){
//     if ((myNumb > 20 && myNumb <= 100) || myNumb === 400){
//         return true;
//     } 
//     return (myNumb > 20 && myNumb <= 100) || myNumb === 400;
// }

// console.log(boundary(numbIntero));



/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita 
 (es.: EPICODE => EDOCIPE).
*/

// let sentence = "LOLLIPOP";

// function reverseString(myStringReverse){
//     return myStringReverse.split('').reverse().join('');
// }

// console.log(reverseString(sentence));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo 
 maiuscola ogni lettera iniziale di ogni parola.
*/




// function upperFirst(upperCaseTest){
//     let wordUpper = upperCaseTest.toLowerCase().split(" ");

//     for (let i = 0; i < wordUpper.length; i++) {
//         wordUpper[i] = wordUpper[i][0].toUpperCase() + wordUpper[i].slice(1);
//         }
       

//       return wordUpper.join(" ");
    
// }

// console.log(upperFirst("best day of my life"))





/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un 
 array contenente n numeri random contenuti tra 0 e 10.
*/



function giveMeRandom(n){
    
    let myArrayNumb=[];


    for (let i = 0; i < 10; i +=1) {
        let result = Math.floor(Math.random() * 10);
       
        myArrayNumb.push(result);

    }
         return myArrayNumb;
    
}

giveMeRandom()

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
