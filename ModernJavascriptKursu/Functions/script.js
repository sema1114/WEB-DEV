// //function



// function yasHesapla(dogumYili){
//     return 2021-dogumYili;
// }

// let Sema=yasHesapla(1992);
// let Batu=yasHesapla(1991);
// let Moco=yasHesapla(1994);



// console.log(`Sema ${Sema}`);
// console.log(Batu);
// console.log(Moco);



// function EmeklilikKacYilKaldi(dogumyili,isim){

// let yas =yasHesapla(dogumyili);
// let emeklilik=65-yas;

// if(emeklilik>0){
//     console.log(`${isim} emekli olmanıza ${emeklilik} yıl kaldı`);


// }else{
//     console.log(`${isim} zaten Emekli oldunuz`);
// }

// }

// EmeklilikKacYilKaldi(1890,'Sema');
// EmeklilikKacYilKaldi(1991,'Batu');
// EmeklilikKacYilKaldi(1994,'Melisa');



//Function Declarations

function sum(a,b){

    var c=a+b;
    return c;
}

console.log(sum(10,90));



//Function Expressions

const sumExpression= function(a=0,b=0){

// if(typeof a==='undefined'){a=0;}
// if (typeof b==='undefined'){ b=0;}

    var d=a+b;
    return d;
}

console.log(sumExpression(12,18));
console.log(sumExpression(10));//NaN
console.log(sumExpression(10,8,34,56,7));//gönderilen fazla parametre göz ardı edilir


function sumAll(){
    var total=0;
for(let i=0;i<arguments.length;i++){
    total+=arguments[i];//argument in inci parametresi
}
return total;

}

console.log(sumAll(10,30,20,20));





