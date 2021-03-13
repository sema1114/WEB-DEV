//Event Listeners
//Kullnıcı butona tıklamış mı? herhangi bir değer seçmiş mi?Kullanıcı ile etkileşiiim

//CTRL K+U

const btn=document.querySelector('#btnDeleteAll');

const btn2=document.querySelector('#btnAddTask');

//'click' ,'mouseover' duruma göre tetiklenirler 

btn.addEventListener('mouseover',function(e){
   // console.log('butona tıklandı');

   let val;
   val=e;

   val=e.target;
//    val=e.target.id;
   val=e.target.classList;
   val=e.type;


   console.log(val);


    e.preventDefault();
});


// btn.addEventListener('click',btnClick);
// btn.addEventListener('click',btnClick2);
// btn2.addEventListener('click',btnClick2);

// function btnClick(){
//     console.log('butona Tıklandı');
// }

// function btnClick2(){
//     console.log('buton 2 ye tıklandı diğer fonksiyon ile');
// }