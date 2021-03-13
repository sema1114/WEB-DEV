//Scopes
//yazdığımız bir kod değişkeninin herhangi bir kod parçası tarafından ulaşılır olup olmama durumu

//**Global Scopes

var isim='Sema';//Global değişken y-her yerden erişilebilir
var yas=50;
function logIsim()
{
    var isim='Batu';
    var yas=30;
    console.log(isim,yas);
}
logIsim();

if(true){
    var yas=40;
    console.log(isim,yas);
}
console.log(yas);//iften sonraki yaşı alır yukarıdaki globalı değil
console.log(isim);




//**Local Scopes
//Fonksiyonlar Kendi Scope'larını oluşturur.yani kendi scopunu kendi kullanabilir dışarıdan erişilemezlerdir
//Block'lar yeni scope oluşturmaz
//ES6 ile gelen let ve const block scope oluşturur


console.log('*******************')
if(true){
    var model='Opel';//block scope oluşturmaz
    let year=2016;//block scope oluşturur
    const color='white';//block scope oluşturur

    console.log('Block Scope',model,year,color);

    //Burdaki block dışından let ve const ulaşılamaz var ulaşılabilir dışarıdan
}

console.log(model);
//console.log(year);

var i=1;

for(let i=0;i<10;i++){
    console.log('i '+ i);
}

console.log(i);


