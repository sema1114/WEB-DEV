  
  var xhr=new XMLHttpRequest();

xhr.onreadystatechange=function(){

if(xhr.readyState === 4){
    if(xhr.status===200){
    console.log(xhr.responseText);
    }else if(xhr.status===404){
        console.log('kaynak bulunamadı.');
    }
}

}

xhr.onprogress=function(){
    console.log('on progressing');
}



xhr.open('GET','msg.txt',true);
xhr.send();

console.log('hello');

/*
    readyState:
0:request not initialized     --istek başlatılmadı
1:server connection established --server bağlantısı kuruldu
2:request received              --request alındı
3:processing request            --serverda işletildi
4:request finished and response is ready --bitti hazır

 status
200: "OK"  sonuç başarılı
403: "Forbidden"   talep oaylanmadı
404: "Not found"

*/