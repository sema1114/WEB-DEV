let dte=new Date();

console.log(dte);
console.log(typeof dte);

let birthday =new Date(1992,6,19);//Ay bilgisi 0 dan başlıyor o yüzden mayıs iiçin 6 yazdık


//Set Metod elimizdekileri arttırıp değiştirebiliriz

//dte.setMonth(11);
dte.setDate(1);
dte.setHours(5);
dte.setMinutes(44);


//Get Metods
console.log("Mounth:"+dte.getMonth());
console.log(dte.getDay());
console.log(dte.getFullYear());
console.log(dte.getHours());
console.log(dte.getDate());
console.log(dte.getMinutes());

console.log("Yaş:"+(dte.getFullYear()-birthday.getFullYear()));
console.log(dte.getMonth()-birthday.getMonth());

