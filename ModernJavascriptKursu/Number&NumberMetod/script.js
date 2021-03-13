//Numbers

let val;

val='10';
//val=Number('10');

//val=parseInt('10');
//val=parseFloat('a10a'); NaN


//val=isNaN('10');//false it is number
//val=isNaN('10a'); //yes it is a NaN result true
//val=isNaN('a10a'); the result true is is Nan we can look with Boolean

var num=10.12456789;//birer yuvarlar 
val=num.toPrecision(5);
val=num.toFixed(4);//mean virgülden sonra ne kadar istediğimizi giriyoruz buda 12 den sonrasını yuvarlıyor

//çünkü 1 den sonra iki büyük değil ama 4 ten sonra 5 büyükk o yüzden sonralarını yuvarlıyor büyük diye


val=Math.PI;//property olduğu için parantez açıp kapatmıyoruz


val=Math.round(2.4);//yuvarlaar en  yakın sayıya 2ye
val=Math.round(2.7); //3 e yuvarlar
val=Math.ceil(2.4);//yukarı yuvarlamaya çalışır 3 e yuvarlar
val=Math.ceil(2.7);//3
val=Math.floor(2.4);//aşağı yuvarlar 2
val=Math.floor(2.7);//aşağı 2

//round=en yakına ceil=yukarı floor=aşağı

val=Math.sqrt(81);//Karekök
val=Math.pow(2,4);//2 üzeri 4
val=Math.abs(-100);//mutlak değer
val=Math.min(1,2,5,9,7);//dizideki en küçük değeri alır
val=Math.max(1,78,96);

val=Math.floor(Math.random()*10);//0 ile 1 arasında üretiyor *10 yaparsak 0 ile 9 arasında
val=Math.floor(Math.random()*100+1);//+1 dersek 0 dahil edilmez


console.log(val);
console.log(typeof val);

