/*
Demo Loops: Sayı Tahmn Oyunu


1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.
**puanlama yapın.
**kullanıcı kaç kerede bileceğimi belirtebilsin


*/

//10 ile çarpılınca direk 1 10 arası olur

var hak,can;
var tahmin,sayac=0;
var sayi=Math.floor((Math.random()*10)+1);
can=Number(prompt('Kaç kerede bileceksiniz?'));
hak=can;
console.log(sayi);


while(hak>0){5
    
    hak--;//Her cevapta hakı bir azalt
    sayac++;
    tahmin=Number(prompt('Bir sayı giriniz'));

if(sayi==tahmin){
    console.log(`Tebrikler ${sayac} defada bildiniz`);
    console.log(`Puan:${100-(100/can)}`);


    break;//Sayıyı bildiği anda döndü durur
}else if(sayi>tahmin){
    console.log('Yukarı');
}else{
    console.log('Aşağı');
}

if(hak==0){
    console.log('Hakkınız Bitti. Sayı:'+sayi);
}

}


