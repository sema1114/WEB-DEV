//Demo

//20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım süreleri aşağıda verilmiştir.
//Bu bilgilere bakarak servis uyarısını veriniz.

// var trafigeCikis=new Date('04/20/2017');
// trafigeCikis.setHours(0,0,0,0);//sadece günle işimiz var

// var trafikteMs=Date.now()-trafigeCikis.getTime();//şu ana kadar trafikte kalma durumu

// var trafiktekiGun=Math.floor(trafikteMs/(1000*60*60*24));
//                               //saniye dakika saat gün

//   console.log(trafiktekiGun);

// if(trafiktekiGun<=365){
// console.log('1. servis bakım süreniz gelmiştir.');
// }
// else if(trafiktekiGun>365&& trafiktekiGun<=365*2){
//     console.log('2. servis bakım süreniz gelmiştir.');
// }
// else if(trafiktekiGun>365*2&&trafiktekiGun<=365*3){
//     console.log('3. servis bakım süreniz gelmiştir.')
// }
// else{
//     console.log('bilinmeyen Süre..')
// }


var result=prompt("Who's There?");

if(result=='cancel'){
    console.log('cancelled');
}
else if(result=='Admin'){
    console.log('Welcome Admin');
   

    var password=prompt('Password Gir:');
    if(password=='cancel'){
        console.log('cancelled');
    }
    else if(password=='1234'){
        console.log('Welcome Admin');
    }
    else {
        console.log('Wrong PAssword:');
    }



}
else{
    console.log('I dont know you?');
}

console.log(result);
