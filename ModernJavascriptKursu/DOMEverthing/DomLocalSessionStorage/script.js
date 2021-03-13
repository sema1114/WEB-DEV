//LOCAL STORAGE

let val;
//SetItem

const firstName=localStorage.setItem('firstName','Sema');

const LastName=localStorage.setItem('lastName','Kaya');

let hobies=['sinema','araba','gezmek'];



val=localStorage.getItem('firstName');
val=localStorage.getItem('lastName');




// localStorage.removeItem('firstName');
// localStorage.removeItem('lastName');

//clear


//localStorage.clear();


//Set array to storage

//string değilde obje gibi yazdıryoruz diziyi

localStorage.setItem('hobies',JSON.stringify(hobies));


//tekrar objeyi almak istediimizde tekrar objeye çevirip alıyoruz

val=JSON.parse(localStorage.getItem('hobies'));


console.log(val);
console.log(localStorage)





//SESSIONSTORAGE

// const city=sessionStorage.setItem('city','Sakarya');

// const country=sessionStorage.setItem('country','Türkiye');



// console.log(sessionStorage);