const taskList=document.querySelector('#task-list');


//**Removing Element */
//taskList.remove();
//taskList.childNodes[7].remove();
//taskList.children[1].remove();
//taskList.removeChild(taskList.children[1]);//bir önceki ile aynı yollar farklı



//***removing attribute */

// taskList.children[1].removeAttribute('class');

// for(let i=0;i<taskList.children.length;i++){
//     console.log(taskList.children[i].removeAttribute('class'));

// }
//console.log(taskList);


//Replacing Elements

// const cardHeader=document.querySelector('.card-header');

// console.log(cardHeader);

// //create Element

// const h2=document.createElement('h2');

// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('MyList'));

// const parent=document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);

// console.log(cardHeader);


//***Classes */


let val;

link=taskList.children[0].children[0];

val=link.className;
val=link.classList;
// val=link.classList[0];
// val=link.classList[1];

link.classList.add('new');
link.classList.remove('new');


//Atributes

val=link.getAttribute('class');
val=link.setAttribute('href','http://semakaya.com');

val=link.hasAttribute('href');//href att var mı yokmu true false verir


console.log(val);









