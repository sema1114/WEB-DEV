//Mouse Events

const btn=document.querySelector('#btnDeleteAll');
const ul=document.querySelector('#task-list');


//click 
// btn.addEventListener('click',eventHandler);

// ul.addEventListener('mouseover',eventHandler);
//btn.addEventListener('dblclick',eventHandler);


// //mousedown
// btn.addEventListener('mousedown',eventHandler);

// //mouseup
// btn.addEventListener('mouseup',eventHandler);

// //mouseenter
// ul.addEventListener('mouseenter',eventHandler);

// //mouseleave
// ul.addEventListener('mouseleave',eventHandler);

// //Mouseover

// ul.addEventListener('mouseover',eventHandler);

// //mouseout //farklı bir etikete duruma a ya li ye geçince çalışır
// ul.addEventListener('mouseout',eventHandler);


//mouse move
const h5=document.querySelector('h5');

ul.addEventListener('mousemove',eventHandler);



function eventHandler(event){
   console.log(`event type :${event.type}`);
//koordinatları tayin
   h5.textContent=`Mouse X : ${event.offsetX}
   Mouse Y : ${event.offsetY}`;

}