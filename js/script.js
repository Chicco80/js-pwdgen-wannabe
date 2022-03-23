// //graph TD
// a[leggo repo]-->b[apro Visual]
// b -->c[creo file html]
// c -->d[creo cartella css]
// d -->e[creo file css]
// e -->f[collego link css]
// f -->g[do un bg per controllare collegamenti]
// g -->h{funziona?}
// h -->|vero|i[collegare script nel body]
// h -->|falso|l[ricontrolla i passaggi]
// l -->|controlla se hai scritto bene|f
// i -->m[creo alert in javascript]
// m -->n[controllo sul browser se funziona]
// n -->o{funziona?}
// o -->|vero|p[procedo con l esercizio]
// o -->|falso|q[ricontrollo passaggi]
// q -->i
// p -->r[commento i passi da compiere in js]
// r -->s[creo una variable con promp nome]
// s -->t[collego la console e ispeziono se è corretto]
// t -->u{funziona?}
// u -->|vero|v[procedo con i promt cognome e colore preferito]
// u -->|falso|z[ricontrollo i passaggi]
// z -->s
// v -->1[creo una costante per il 29]
// 1 --> 2[collego la console e ispeziono se è corretto]
// 2 -->3{funziona?}
// 3 -->|vero|4[creo un div #risultato su html]
// 3 -->|falso|5[ricontrollo i passaggi]
// 5 -->1
// 4 -->6[stampo sulla pagina 'getElementById']
// 6 -->7[refressho ispeziono e controllo che funzioni]
// 7 -->8{funziona?}
// 8 -->|vero|9[pussha]
// 8-->|falso|10[ricontrolla passaggi]
// 10 -->6
// 9 -->11[fine e si va a studiare]//








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