// TEST
// alert("ciao");

//INPUT
//chiedere all'utente il numero di chilometri che vuole percorrere
const userKm = prompt("Quanti chilometri devi percorrere?"); //string | null
console.log(userKm, typeof userKm);

//chiedere l'età del passeggero
const userAge = prompt("quanti anni hai?") //string | null
console.log(userAge, typeof userAge);

//ESECUZIONE LOGICA
//calcolo il prezzo del biglietto in base ai km che l'utente deve percorrere
userKm = parseInt(userKm); //number
const price = userKm * 0.21; //number

//applico lo sconto in base all'età
if (userAge < 18) {
    price = 
}