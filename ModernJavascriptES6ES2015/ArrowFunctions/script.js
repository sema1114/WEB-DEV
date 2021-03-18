//Arrow Functions

//ES5 
let welcomeES5=function(){
    console.log('Hello from ES5');
}

welcomeES5();

//ES6
let welcomeES6 = () =>{
    console.log('HEllo ES6');
}

welcomeES6();


//With Parameters

//ES5

let multiplyES5 =function(x,y){
return x*y;
}

console.log(multiplyES5(5,9));


// let multiplyES6 =(x,y) =>{
// return x*y;
// }

let multiplyES6 = (x,y) => x*y;

console.log(multiplyES6(9,9));


//ES5

let splitES5=function(text){
return text.split(' ');
}
 console.log(splitES5('Modern Javascript Kursu'));

 //ES6

 let splitES6 = text => text.split(' ');


 console.log(splitES6('LOG GOF FOGA'));



 //Object Literals
//ES5

 let getProductES5 =function(id,name){
     return{
         id:id,
         name:name,
     }
 }



 console.log(getProductES5('2','sema'));

 //ES6

 let getProductES6 = (id,name) =>(
{
    id:id,
    name:name
}
 );

 console.log(getProductES6('4','sema'));


 const phones=[
     {name:'Iphone 9', price:3000},
     {name:'Iphone 4', price:9000},
     {name:'Iphone 5', price:7000},
     {name:'Iphone 8', price:6000},


 ]


 let pricesES5 = phones.map(function(phone){
return phone.price;
 });


 console.log(pricesES5);

 //ES6
let pricesES6 = phones.map (phone => phone.price);


console.log(pricesES6);

//ES5

const arr=[1,2,3,4,5,6,7,8,66,8,88,90,69];
let evenES5 = arr.filter(function(a){
    return a%2==0;
})

console.log(evenES5);


let evenES6 = arr.filter(a => a%2==0);


console.log(evenES6);





