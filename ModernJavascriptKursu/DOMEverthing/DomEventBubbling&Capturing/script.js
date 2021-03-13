//Event Bubbling

const form=document.querySelector('form');
const cardBody=document.querySelector('.card-body');
const card=document.querySelector('.card');

const container=document.querySelector('.container');

// form.addEventListener('click',function(e){
// console.log('Form');
// e.stopPropagation();
// });

// cardBody.addEventListener('click',function(e){
//     console.log('cardBody');
//     e.stopPropagation();

// });


    
// card.addEventListener('click',function(e){
//         console.log('card');
//         e.stopPropagation();

//  });

//  container.addEventListener('click',function(e){
//             console.log('container');
//             e.stopPropagation();//sadece tıklananı gösterir

// });


//Event Capturing dıştan içe doğru gelen olay bublingin tersi


//küçükten büyüğe
// form.addEventListener('click',function(){
// console.log('Form');
// },true);

// cardBody.addEventListener('click',function(){
//     console.log('cardBody');

// },true);


    
// card.addEventListener('click',function(){
//         console.log('card');

//  },true);

//  container.addEventListener('click',function(){
//             console.log('container');

// },true);

// const deleteItems=document.querySelectorAll('.fa-times');


// deleteItems.forEach(function(item){

//     item.addEventListener('click',function(e){
//         console.log(e.target);
//     })
// });

const ul=document.querySelector('ul');

ul.addEventListener('click',function(e){

if(e.target.className==='fas fa-times'){

console.log(e.target.parentElement.parentElement.remove());


e.preventDefault();

}
});










