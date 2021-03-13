var num=15.123456789;

//toplamda 3 basamaklı sayı kullan


console.log(num.toPrecision(3));//baştn itibaren sayıp kç basamaklıysa öyle yaz

//ondalık kısmı 3 basamakla sınırla

console.log(num.toFixed(3));

//en yakın sayıya yuvarla

console.log(Math.round(num));

//aşağı yuvarla

console.log(Math.floor(num));

//yukarı yuvarla


console.log(Math.ceil(num));

//VERİLEN SAYILARDAN EN ÜÇÜĞÜ BÜYÜĞÜNÜ BUL



console.log(Math.min(1,2,10,56,20));
console.log(Math.max(1,2,10,56,20));


//sayı aralığını kullanıcıxının belirleyeceği rastgele bir sayı üretin


var min=50;

var max=100;

console.log(Math.floor(min+Math.random()*(max-min)));

/*Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım

**Brüt maaş:3700 tl
**brüt meai:10.3 tl

Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir?

Brüt maai üzerinden toplam kesinti oranı %25 ise alınacak ise toplam net maaş nedir?

*/

var maas=3700;
var mesai=10.3;

var Agust=maas+(42*mesai);

console.log(Agust);


var netmaas=Agust-(Agust*0.25);

console.log(Agust.toFixed(3),netmaas.toFixed(3));















