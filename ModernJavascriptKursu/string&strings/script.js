//strings


const firstName='Sema';
const lastName="Kaya";
const age=28;

let hobies='Trekking,Tenis,Keman,Çello';
//string concat

let val;

val=firstName+' '+lastName;


val='Sema';
val+=' Kaya'

val='Benim adım '+firstName+' '+lastName+' ve yaşım '+age+' Msida\'da yaşıyorum.'



 //string concat
val=firstName.concat(' ',lastName);

//string lengt

//val=val.length;


val=' '+val.replace('Sema','Batu')+' ';

val=val.toUpperCase();
val=val.toLowerCase();


val=val.trim();//Trim ile baş son boşlukları traş et:D

//git kaçıncı da bul INDEXOF

//val =val.indexOf('e');
//val=val.indexOf('aya');

//-1 demek indexte yok


//val=val[0];//Git val in 0 ıncı indexini all
//val=val[1];
//string uppercase lowercse



//substring

//val=val.substring(2,4);// gidip 2 ile 4 arasındakileri getirir

//val=val.slice(6);//git 6 dan beri olanları getir aynı substringle ama sonunu yazmaya gerek yojk





//string replace

val=hobies.split(',');
//val=hobies.split(' '); yukarıda ne ile ayırıyorsan burada böyle tanımla



console.log(val);

console.log(typeof val);



 