//Bmw ,Mercedes,Opel,Mazda elemanlarım-na sahip bir dizi oluşturun

let marka=['Bmw' ,'Mercedes','Opel','Mazda'];

//var marka1= new Array['Bmw' ,'Mercedes','Opel','Mazda'];

//dizi kaç elemanlıdır
console.log(marka);
console.log(marka.length);
console.log(typeof marka);

//Dizinin ilk ve son elemanı nedir


console.log(marka[0]);
console.log(marka[3]);
console.log(marka[marka.length-1]);

//Renault değeri dizinin sonuna ekle

//marka[4]='Renault';
marka.push('Renault');
//marka[marka.length]='Renault';

//Toyota değeri dizinin başına ekle

marka.unshift('Toyota');

//elemanı baştan silme

marka.shift('Toyota'); //pop() sondan sil


//dizi elemanlarını ters çevir

marka.reverse();


//dizi elemanlarını alfabetik sıraya getir

marka.sort();

//[1,2,5,80]  dizinsini sıralayın

var numbers=[1,2,9,5,80,15]; //alfabetik sıraya göre sıralıyor

//Sayısal olarak sıralama

function compare(a,b){
    if(a>b) return 1;
    if(a=b) return 0;
    if(a<b) return -1;
}

console.log(numbers.sort(compare));


//Opel değeri dizinin bir elemanımıdır?

console.log(marka.indexOf('Opel'));
console.log(marka.includes('Opel'));//True yada false döndürür

// var str="Chevrolet,Dacia";
//ifadesini diziye çeviriniz
var str="Chevrolet,Dacia"

var arry=str.split(',');
console.log(arry);

//Oluturulan 2 diziinin elemanlarını bir başka dizi ile birleştirin

var arr3=marka.concat(arry);
console.log(arr3);

//Oluşturulan diziden son 2 elemanı siliniz


// console.log(arr3.pop());
// console.log(arr3.pop());

//console.log(arr3.splice(6,2));// 6. index ten başla 2 değer sil

console.log(arr3.slice(6,8));// başlangıç 6-7 sil 8 e kadar 8 de dur


console.log(marka);
console.log(marka.length);
console.log(typeof marka);

/*Aşağıda verilen elemanları bir dizi içerisinde saklayın

//studentA : Yiğit Bilgi 2010
//studentB : Sena Turan 1999
//studentC : Ahmet Turan 1998

*/


var studentA =['Yiğit','Bilgi',2010];
var studentB =['Sena','Turan',1999];
var studentC =['Ahmet','Turan',1998];



var students=[studentA,studentB,studentC];
console.log(students);

console.log(students[0][0]);
console.log(students[0][1]);
console.log(students[0][2]);



console.log(students[1][0]);
console.log(students[1][1]);
console.log(students[1][2]);

console.log(students[2][0]);
console.log(students[2][1]);
console.log(students[2][2]);