console.log("Pozdrav iz JS datoteke");

/*let x=3;
console.log(x);//ne raditi, js datoteke nisu nezavisne, moze da se podeli kod u vise datoteka ali su zavisne medjusobno*/

let a=3, b=6;
console.log(a*b);
console.log("Pera"+"Stankovic");
console.log("Pera"*"Stankovic");

b=b/a;
console.log(a,b);// a=3, b=2
a=b*a+a;//2*3+3 = 6+3+9
console.log(a, b);// a=9, b=2
b=( a-2 * b ) / b;//(9=2*2)/2=(9-4)/2=5/2=2.5
console.log(a,b);

//a = a + 10; //9+10=19
a += 10;
console.log(a);//a=19
b/=a;
console.log(b);

//a=a+1;
//a+=1;
a++;
console.log(a);

++a;
console.log(a);

let c=5;
console.log(c++);// prvo se iskoristi stara vrednost promenljive u izrazu pa se onda vrednost promenljive poveca
console.log(c);//tek ovde dobijemo novu vrednost C, tj stara vrednost uvecana za jedan

let d=3;
console.log(++d);//prvo se vrednost promenljive poveca za 1, a onda se nova vrednost koristi u izrazu
console.log(d);//d je 4

c=4;
d=3;
x=(c++)*(--d);//4*2=8
console.log(c,d,x);//c=5, d=2, x=8

console.log(7 % 2);// 7 = 3 * 2 + 1
console.log(9 % 2); //9 = 4 * 2 + 1

console.log(180 % 60); //180 = 3 * 60 + 0 moguci rezultati su 0,1,2,... do 59

//prof 56 % 13 -> (0,1,2,...,12)
console.log(365 % 7); //da godina ima 364 dana svaka godina bi imala isti raspored dana u nedelji i datume

console.log(4**3); //to je 4 na treci stepen tj 4*4*4

c=3;
d = 1+ (c**3);// 1 + (3**3) = 1+27 =28  ovo moze i bez zagrada da se napise

let s=14;
let m=44;
let odPonoci = s * 60 + m;
console.log(r);
console.log(14 * 60 + 44);//884

console.log(s * 60 + m) / 60;
console.log(s * 60+ m) % 60;

let p = 380;
let n = 500;
console.log(500 % 380);











