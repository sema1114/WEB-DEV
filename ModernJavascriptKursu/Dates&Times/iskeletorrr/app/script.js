
let d=new Date();

console.log(d);



d.setFullYear(1989);
d.setMonth(12);
d.setDate(31);

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());


//TArih ve saat bilgisi içeren bir obje

var dtA=new Date('5/19/1992 14:00:01');
var dtB=new Date(2020,7,24,14,50,20);
console.log(dtA);
console.log(dtB);

var dtC=new Date("1/1/1990");

var dayofMonth=dtC.getDate();
dtC.setDate(dayofMonth-1);

console.log(dtC);


var start= new Date('1/1/1990');
var end= new Date('1/1/1991');

var milisecond=(end-start);
var second=milisecond/1000;
var minute=second/60;
var hour=minute/60;
var day=hour/24;


console.log('Milisecond:'+milisecond);
console.log('Second:'+second);
console.log('Minute:'+minute);
console.log('Hour:'+hour);
console.log('Day:'+day);

//Yaş Hesaplama

var birthday= new Date('5/19/1992');

var ageDifMs=Date.now()-birthday.getTime();// milisecond 1970 yılından başlıyor

var ageDate=new Date(ageDifMs); //Bizim için hazırlıyor bu metod

console.log(ageDate.getFullYear()-1970);//içinde başta 1970 yılıda olduğu için o yılı çıkardık

// // console.log(birthday.getTime());//milisecond cinsinden doğum günü

// // console.log(Date.now());//şimdinin milisecond cinsinden değeri


//Her yıl mayıs ayının 2. haftası pazar günü kutlanan anneler gnü 2021 yılında ne zaman kutlanacaktır


var annelerGunu= new Date();

annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2021);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);  //2021 1 mayıs

//console.log(annelerGunu.getDay());

//aldığım değer 0 a eşit olmadığı sürece ben burda yeni birgün (arayışı) döndürürüm
while((annelerGunu.getDay())!=0){
annelerGunu.setDate((annelerGunu.getDate())+1);
}

annelerGunu.setDate((annelerGunu.getDate())+7);//ikinci haftaya denk geliyor


console.log(annelerGunu);




