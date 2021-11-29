"use strict";//Strict - mora pravilno da se kuca JS kod :)

//zadatak 1
let s=15;
let m=21;

let odponoci = s * 60 + m;
console.log("od ponoci je proslo "+odponoci + " minuta");//mora razmak u stringu, tj posle prve i pre druge recenice

let doPonoci = 24 * 60 - odponoci;//sati puta minuta
console.log("do ponoci je ostalo " + doPonoci + " minuta");

//zadatak 2
let minOdPonoci = 921;// minOdPonoci = _ * 60 + _
//minOdPonoci - minSada = _ *60
//(minOdPonoci - minsada)/60 = _
let minSada = minOdPonoci % 60;
let satSada = (minOdPonoci - minSada) / 60;
console.log("Sada je " + satSada + ":" + minSada);

//drugi nacin
//console.log(minOdPonoci / 60);
//console.log(Math.floor(minOdPonoci/60));
//console.log(Math.ceil(minOdPonoci/60));
//console.log(Math.round(minOdPonoci/60));

let satSada2= Math.floor(minOdPonoci/60);
let minSada2 = minOdPonoci % 60;
console.log("sada je "+ satSada2 + ":" + minSada2);

//zadatak 3
let cenaRobe = 1750;
let novcanica = 2000;
let kusur = novcanica - cenaRobe;
console.log("kusur koji treba da se vrati je " + kusur + " dinara");

//zadatak 6
let evri = 200;
let kurs = 117.5782;

let dinariNakonRazmene = evri * kurs;
console.log("imamo" + dinariNakonRazmene + "dinari nakon razmene");
//let dinariUevre = dinariNakonrazmene/evri;
//console.log("dinari u evre "+ dinariUevre);

let novacDinari = 10000;
let dinariUEvre = novacDinari/evri;



//zadatak 7
//let ukupuniEvri = 1000;
//let kursEvra = 118;
let kursDolara = 104.7281;
let dinari = ukupniEvri * kursEvra;
let ukupniDolari = dinari * kursDolara;
console.log("ukupni" + dinari);
console.log("dolari nakon razmene " + ukupniDolari);

let k1 = evri*kurs;
let k2 = k1/kursDolara;
console.log("imamo "+ k2 + " dolara nakon razmene");

let novacDolari =200;
let k3 = novacDolari * kursDolara / kurs;
console.log("imamo" + k3 + "");














