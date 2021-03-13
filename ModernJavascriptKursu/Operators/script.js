

//OPERATORLER

let val;
const a=10;
const b=4;
let c=3;

//Aritmetik operatorler

val=a+b;
val=a-b;
val=a*b;
val=a/b;
val=a%b;//10 mod 4
val=c++;//Ekrana yzdırıp arttırır sonuca 3 yazar sonra kendinsi 4 olur
val=++c;//Direk yazar

val=c--;
val=--c;

console.log(val);
console.log(c);
console.log(typeof val);

//2- Atama Operatorleri

val=a;
val+=a;// val 10 du 10 ile a yı topladı 20 yaptı
//Mantık val=val+a;

val-=a;   //val=val-a;
val*=a;   //val=val*a;
val/=a;   //val=val/a;
val%=a;   //val=val%a  val mod a

console.log(val);
console.log(typeof val);


//3-Karşılaştırma Operatörleri

let val1;
const a1=10;
const b1=5;
const c1=5;
let   d1=3;

val1 = a1==b1; //a1 ile b1 eşitmi false değeri

val1 =  b1==c1;

val1 = b1===c; //Hem değer &type kontrolü yapar (string number)

val1 = 5===5;// True
val1 = 5==='5';//false
val1 = 5=='5';//true

val1 = a!=b;// a b'ye eşit değil mi
val1= a!==b;//tam tip kontrolü


val1 = a>=b;
      // a<=b
 console.log(val1);
 console.log(typeof val1);
 

//4-MAntıksal Operatörler

// && (ve-And)
// true && true =>true
// true && false =>false
// false && false =>false

val1= (a>b)&&(a>c); //t t =t


// || (veya-Or)
// true && true =>true
// true && false =>true
// false && false =>false

val1=(a>b)||(a>c);



// !  (Değildir-Not)
//!(true) =false;
//!(false)=true;
val1!=(a>b);// normali true ama ! bu yüzden false


 console.log(val1);
 console.log(typeof val1);
