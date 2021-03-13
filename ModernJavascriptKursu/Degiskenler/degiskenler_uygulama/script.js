var custumerName='Sema';
var customerSurname="Kaya";
var customerID='29495190638';
var total=205.6;
var gender=false;//Erkek true kadın
//Object
var adress={
    city:'Msida',
    country:'MAlta',
    body:'Triq Giovanni,No:11'
}
//Array
var hobiler=['Sinema','Kitap','Keman'];

var order1='100';
var order2='150';


var ordertoplam;

order1N=Number(order1);
order2N=Number(order2);

ordertoplam=(order1N+order2N);

console.log(ordertoplam);


var order3=Number('100.2');
var order4=Number('150.5');



var totalOrder=order3+order4;
console.log(totalOrder);


//Sipariş toplamı tam sayı

var order4=parseInt('100.2');
var order5=parseInt('150.5');

var total=(order4+order5);

console.log(total);


//doğum yılına göre yaş hesaplayınız;

const yearOfBirth=1992;

var course=(new Date().getFullYear());

var age=course-yearOfBirth;
console.log(course-yearOfBirth);
console.log(age);

console.log((new Date().getFullYear())-yearOfBirth);

//Karakter sayısı


let hecele='Bugün Allah için ne yaptın ?????';


console.log(hecele.length);