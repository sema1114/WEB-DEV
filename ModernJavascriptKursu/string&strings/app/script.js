//Demo Strings


var sentence=" Template Literals or template strings is the ability Have multi-line strings without any funny business. ";


var url="http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye ";


//Cümle kaç karekterdir

console.log(sentence.length);
console.log(url.length);

//Kaç kelimeden oluşuyor SPLİT

console.log(sentence.trim().split(' '));//Baştaki sondakileri sil

console.log(sentence.trim().split(' ').length);//Direk sayıyı verir


// büyük küçük harflerle yazıdr



console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

//cümle baş ve sonundaki boşlukları sil

console.log(sentence.trim());
console.log(url.trim());


//'-' karakterini silin

console.log(sentence.replace('-',''));

//url içindeki str kısmı çıkartın

var str='http://';
console.log(url.substr(str.length));//gidip ordaki uzunlukları alıyor
console.log(url.slice(str.length));


//url hangi protocol'u kullanmaktadır?(http,https)

console.log(url.startsWith('http'));//url http ile mi başlıyor true false
console.log(url.startsWith('https'))//false

//url, '.com ifadesi içeriyor mu?'

console.log(url.indexOf('.com'));//17. karakterde
console.log(url.includes('.com'));

//url string ifadesini geçerli bir url olarak düzenleyiniz

console.log(url.toLowerCase()
               .replace(/ /g,'-')
               .replace(/ı/g,'i') //her kranteri bul ve çizgile
               .replace(/ü/g,'u')
               .replace(/ö/g,'o')
               .replace(/ş/g,'s')
               .replace(/ç/g,'c')
               );

