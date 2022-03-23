//chiedere nome//
//chiedere cognome//
//chiedere colore//
//agg.numero//
//stampare a video nome cognome colore numero//



let userName = prompt("Nome?");
console.log(userName); 



let userLast = prompt("Cognome?");
console.log(userLast);


let color = prompt(" Qual'è il tuo colore preferito?");
console.log(color);

const number = "29"
console.log(number);

document.getElementById("risultato").innerHTML = userName + " "+ userLast  + " "+ color + " "+ number;