// // var age;
// // console.log(age);

// // age=20;
// // console.log(age);

// // var fullName='Sema Kaya';
// // console.log(fullName); 

// // // var let cost


// // let isim='sema';
// // console.log(isim);

// // isim='ruşen';
// // console.log(isim);


// // //const üstüne yazılamaz
// // const rumuz='Dilara';
// // console.log(rumuz);

// // /*rumuz='Yeni Rumuzum';
// // console.log(rumuz);
// // //Ders3 Değişken Tipleri*/


// // //1.Pirimitive Types

// // //String
// // let firstName='Sema';

// // console.log(typeof firstName);


// // let age1=20;
// // console.log(typeof age1);

// // let money=100.8;
// // console.log(typeof money);

// // //Boolean

// // let isActive=true;
// // console.log(typeof isActive);

// // //null boş değişken anlamına gelir

// // let job=null;


// // //undefined consolde undefined döner
// // let car;
// // console.log(car);


// // //Referance Types=Object

// // //Array

// // let names=['Sema','moco','coco'];
// // console.log(typeof names);


// // //Object

// // let adress={
// //     city:'Msida',
// //     Country:'Malta'
// // }
// // console.log(typeof adress);



// // //Function

// // var calCulate=function(){
// //     return 0;
// // };

// // console.log( typeof calCulate);



// // CTRL+K CTRL+C

// //DERS 4 Tür Dönüşümü

// let num1='5';
// let num2='10';

// console.log(num1+num2);
// console.log(typeof num1);

// let num3=Number('5');
// let num4=Number('10');

// let total=num3+num4;

// console.log(total);
// console.log(typeof total);



// //Number to String


// let val;
// val=String(10);

// console.log(val);
// console.log(typeof val);
// console.log(val.length);


// //Val to String

// let valB;

// valB=String(true);

// //date to string

// valB=String(new Date().getFullYear());

// console.log(valB);
// console.log(typeof valB);
// console.log(valB.length);


// //array to string

// val =String([1,2,3,4]);

// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// //toString

// val=(10).toString();


// console.log(val);
// console.log(typeof val);
// console.log(val.length);


// val=(false).toString();



// console.log(val);
// console.log(typeof val);
// console.log(val.length);


// //String to Number



// val=Number('10');




// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));//sondaki 0 lardır 10.00 gibi


let val;
let val1;

let val2;


 val =Number(true);


 console.log(val);
 console.log(typeof val);
 console.log(val.toFixed(2));

 val1 =Number(false);

 console.log(val1);
 console.log(typeof val1);
 console.log(val1.toFixed(3));

 val2 =Number(false);

 console.log(val2);
 console.log(typeof val2);
 console.log(val2.toFixed(4));

 let val3;

 val3=Number('a');
 console.log(typeof val3);
 console.log(val3.toFixed());
 //Dizi içinde aynı sonuç gelir yani SAYISAL DEĞERE KARŞILIK GELMEZ demektir 

 let val31;

 val31=Number([1,2,4]);
 console.log(typeof val31);
 console.log(val31.toFixed());

 let PV;
 PV=parseInt('10');
 PV=parseFloat('10.1');
 

 
console.log(PV);
console.log(typeof PV);
console.log(PV.toFixed());
 