//Arrays


let names=['sema','batu','moco','mama'];

let years=[1992,191,1994,1968];


let mix=['sema',1992,null,undefined,['sinema','kitap']];


// //get array item
// console.log(names[0]);
// console.log(names[3]);

// names[0]='semolina';
// names[names.length]=1995;//sonuncu elemana demek


// //add item
// years.push(2020);//yılın sonun ekledi

// years.unshift(1990);//başa ekler

// //remove item
// years.pop();//sonunu sil dizinin
// years.shift();//Başını sil 


// //indexof arama
// let index=names.indexOf('semolina');
// console.log(index+' indeks\'te');



// //reverse ters çevirme

// names.reverse();

// //sort sıralama

// years.sort();


// //concat dizi + dizi 

// let val =names.concat(years);
// console.log(val);



//splice start :2 2. elemandan sonra başla
      //   0 2. indeksten sonra kaç eleman silsin 0:silmesin
      //  ,seda yı ekle 2. den sonra!  BAŞLA SİL EKLE

// console.log(names);

// names.splice(2,0,'seda');
// names.splice(0,1);//0 dan sonra 1 tanesini sil


//Find



//Filter


function over18(year){
    let age=2018-year;
    return age>=18;
}
//18 e eşit yada büyükse true değilse false değer

//console.log(over18(2019));

let yea=[2010,2020,1998,1996];

let val=yea.find(over18);
console.log(val);//ilk 18 den büyüğü bulur onu getirir

let val1=yea.filter(over18); //bulduklarının hepsini getirdi
console.log(val1);

 console.log(names);
 console.log(names.length);
 console.log(typeof names);
// console.log(years);
// console.log(mix);


