// TEST
// alert("ciao");

//INPUT
//chiedere all'utente il numero di chilometri che vuole percorrere
let userKm = prompt("Quanti chilometri devi percorrere?"); //string | null
userKm = parseInt(userKm); //number

console.log(userKm, typeof userKm);

//chiedere l'età del passeggero
const userAge = prompt("quanti anni hai?") //string | null
userAge = parseInt(userAge); //number
console.log(userAge, typeof userAge);

//ESECUZIONE LOGICA
//calcolo il prezzo del biglietto in base ai km che l'utente deve percorrere

let price = userKm * 0.21; //number
console.log(price, typeof price);

let totalPrice = price

//applico lo sconto in base all'età
if (userAge < 18) {
    totalPrice = price * 0.80; //sconto del 20% per i minorenni
} else if (userAge >= 65) {
    totalPrice = price * 0.60; // sconto del 40% per gli over 65
}

console.log (totalPrice, typeof totalPrice);

//stampo il risultato riducendo il prezzo a due decimali
document.getElementById("result").innerHTML = totalPrice.toFixed(2); 