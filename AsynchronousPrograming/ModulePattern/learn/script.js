//1-) Global variable naming conflicts
//script.js
// var name ='sema';

// //app.js
// var name ='batu';

// console.log(name);


//2-) Encapsulation

// var Counter = {
//     number:0,
//     increment:function(){
//         return ++this.number;
//     },
//     decrement :function(){
//         return --this.number;
//     }
// }

// console.log(Counter.increment());
// console.log(Counter.increment());
// Counter.number=10;
// console.log(Counter.decrement());

 


//IIFE (Immediately Invoked Function Expression)

//script.js
// (function (){
//     name = 'Sema';
//     console.log(name);
// })();


// //app.js
// (function(){
//     name='Batu';
//     console.log(name);
// })();


// var Module=(function(){

// //private members

// let number=3;

// let increment=function(){
//     return ++number;
// }

// let decrement =function(){
//     return --number;
// }




// return{
//     //public members
//     increment,
//     decrement

// }

// })();


// console.log(Module.number);
// console.log(Module.increment());
// console.log(Module.decrement());


var Module=(function(){
var privateMethod=function(){

};

return {
    publicMethod:function(){

    }
}

})();

Module.publicMethod();

