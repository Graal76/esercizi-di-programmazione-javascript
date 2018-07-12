/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var time = 12560;
var hour = Math.round(time/3600);
var minutes =Math.round((time%3600)/60);
var seconds =Math.round((time%3600)%60);
console.log("Hour:",hour,"Minutes:",minutes,"Seconds:",seconds);
