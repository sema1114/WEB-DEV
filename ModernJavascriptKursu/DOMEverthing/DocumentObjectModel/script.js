// let val;

// val = window.document;
// val = document.all;
// val = document.all.length;
// val = document.all[10];
// val = document.head;
// val = document.body;
// val = document.anchors;//Sayfadaki bütün linkleri <a> etiketlerini burdan alabiliriz
// val = document.URL;
// val = document.domain;
// val = document.images;
// val = document.title;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.scripts;
// val = document.scripts[2];
// val = document.scripts[2].getAttribute('src');


// console.log(val);



//********************************************** */
//SELECTING ELEMENTS


//***Single Elements */

            // 1- document.getElementbyId() methodu ile tekli elementlerde oynamalar yapabiliriz


// let val;

// val=document.getElementById('header');
// val=document.getElementById('header').id;
// val=document.getElementById('header').className;

//  val=document.getElementById('header');
// // //val=val.id;
// // val=val.className;

// val.style.fontSize='50px';
// val.style.color='pink';

// val.style.fontWeight='bold';
// //val.style.display='none'; görünmezlik 
// document.getElementById('header').innerText='benim tatlı uygulamam inerText';



// document.getElementById('header').innerHTML='<i>benim italik yazım hoho</i>'

// console.log(val);

                   //2-document.querySelector()

// console.log(document.querySelector('#header'));

// console.log(document.querySelector('.card-header'));//Hep ilkini seçer

// console.log(document.querySelector('h1'));

// document.querySelector('li').style.color='blue';

// document.querySelector('li:last-child').style.color='red';
// document.querySelector('li:nth-child(2)').style.color='orange';//index numarasına göre
// document.querySelector('li:nth-child(3)').textContent='task item with text content';



// document.querySelector('li').className='list-group-item list-group-item-primary';

// document.querySelector('li').classList.add('active');



//***Multiple Elements */


// seçimimizi class name e göre yapabiliriz

// 1-getElementbyClassName




             // 1-val=document.getElementsByClassName('list-group-item');

// //val=document.getElementsByClassName('list-group-item')[2];

// //val=val[2]; 

// val[2].style.color='green';
// val[2].style.fontSize='25px';
// val[1].textContent='NEWW ITEEEMM';


// for(let i=0;i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].style.textContent='New Item');

// }


           //2-getElementByTagName()

//val=document.getElementsByTagName('li');


// val=document.getElementById('task-list'); BUNUN
// val=val.getElementsByTagName('a');         İLE ALTTAKİ AYNI

// val=document.getElementById('task-list').getElementsByTagName('a');

            //3-document.querySelectorAll

//     val=document.querySelectorAll('li');

//     // val.forEach(function(item){//item a kopyalancak

//     //     console.log(item);//ve itemlar yazdırılcak
//     // });

//     // val.forEach(function(item,index){
     
//     //     item.textContent=`${index} -Hello Bebiş`

//     // });


//     //odd tek even çift
//     val=document.querySelectorAll('li:nth-child(even)');//tek çocuk

//     val.forEach(function(item){
//         item.getElementsByClassName.background='#ccc';
//     });


// console.log(val);

//DOM ELEMENTLERI UZERINDE GEZINME

//Traversing the Dom

let val;

let list=document.querySelector('.list-group');


val=list;

val=list.childNodes;//textler ile elemanlar karşılık gelir satır sayılarıyla

//val=list.children;//Sadece çocukları gelir satırlar karşılık gelmez

val=list.childNodes[0];
val=list.childNodes[0].nodeName;
val=list.childNodes[0].nodeType;//değerine işaret gelen sayı gelir
val=list.childNodes[0].nodeType;//text 3
val=list.childNodes[0].nodeType;//element 1


val=list.children[2].textContent='new item';
val=list.children[3].children;


val=list.firstChild;//ilk node karşımıza gelir text

val=list.firstElementChild;//ilk element  elemangelir

// firstChild firstElementChild

val=list.childElementCount;//ulaştığımız elemanın kaç elementi var




val=list.parentElement;
val=list.parentNode;
val=list.parentElement.parentElement;

val=list.children[0].nextSibling;
val=list.children[0].nextElementSibling;



val=list.children[0].previousSibling;
val=list.children[0].previousElementSibling;


console.log(val);


for(let i=0;i<list.children.length;i++){
    console.log(list.children[i]);
}


for(let i=0;i<list.childNodes.length;i++){
    if(list.childNodes[i].nodeType===1)//li ye karşılık 3 1 ise text e karşılık
    {
        console.log(list.childNodes[i]);
    }
}












