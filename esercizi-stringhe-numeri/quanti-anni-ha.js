/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/
var currentyear = 2018;
var bornyear = 1982;

var howhold = currentyear - bornyear;
var yearto100 = 100 - howhold

console.log("Quanti anni hai: ",howhold);
console.log("quanti anni mancano ai 100?: ",yearto100);
