//Demo :Operators

//1- Can ve Ada'nın boy ve kilo bilgilerini alın

let indexCan;
let indexAda;

const kgCan=60;
const kgAda=40;



const heightCan=1.70;
const heightAda=1.50;

indexAda=(kgAda)/(heightAda*heightAda);
indexCan=(kgCan)/(heightCan*heightCan);

console.log("Ada:"+indexAda.toFixed(2),"Can:"+indexCan.toFixed());


let adaHigherInder=indexAda>indexCan;
let canHihgherIndex=indexCan>indexAda;


console.log("Ada'nın kilo indeksi Can'ın kilo indeksinden daha büyük: "+adaHigherInder);
console.log("Can ın kilo indeksi Adanın kilo indeksinden büyük:"+canHihgherIndex);

//2-Alınan  bilgilere göre Kilo indekslerini hesaplayınız.


//3- HEsaplanan indeks bilgisine göre karşılaştırma yapınız


let AdaZayif=(indexAda>0)&&(indexAda<=18.4);
let AdaNormal=(indexAda>=18.5)&&(indexAda<=24.9);
let AdaFazla=(indexAda>=25.0)&&(indexAda<=29.9);
let AdaObez=(indexAda>=30.0)&&(indexAda<=34.9);

console.log("Ada zayıf:"+AdaZayif);
console.log("Ada normal:"+AdaNormal);
console.log("Ada kilolu:"+AdaFazla);
console.log("Ada Obez:"+AdaObez);




//0-18,4:zayıf
//18,5-24,9 Normal
//25,0-29,9:fazla Kilolu
//30,0-34,9 Şişman(Obez)