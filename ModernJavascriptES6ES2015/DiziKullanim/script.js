//Array in ES6

const boxes=document.querySelectorAll('.box');

 let boxesES5=Array.prototype.slice.call(boxes);

// //ES5
// boxesES5 .forEach(function(box){box.style.backgroundColor='green'
    
// });
// //ES6

// Array.from(boxes).forEach(box=>box.style.backgroundColor='pink');

// //console.log(boxesES6);

//ES5

// for(let i=0;i<boxesES5.length;i++){
//     if(boxesES5[i].className=='box blue'){
//         continue;
//     }
    
//     boxesES5[i].textContent="I'm changed";
//     boxesES5[i].style.backgroundColor='purple';

// }


//ES6

// var boxesES6=Array.from(boxes);


// for(let box of boxesES6){
//     if(box.className=='box blue'){
//         continue;
//     }
//     box.textContent="I'm changed";
//     box.style.backgroundColor='purple';
// }

// let arr=Array.from('MOdern Java');

// console.log(arr);

const products=[
{name: 'Samsung S8', price:3000},
{name: 'Samsung S8', price:4000},
{name: 'Samsung S7', price:7000},
{name: 'Samsung S6', price:9000},
]


console.log(Array.from(products,prd=>prd.name=='Samsung S8'));
console.log(products.find(prd=>prd.name=='Samsung S8'));
console.log(products.filter(prd=>prd.name=='Samsung S8'));
console.log(products.findIndex(prd=>prd.price==9000));


let numbers=['a','b','c'];

let entries=numbers.entries();

for( let i of entries){
    console.log(i);
}

let keys=numbers.keys();

for(let a of keys){
    console.log(a);
}


let values =numbers.values();

for(let i of values){
    console.log(i);
}



