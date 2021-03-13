//Demo :Functions

var hesapA={
    ad:'Sema Kaya',
    hesapNo:'29495365',
    bakiye:500,
    ekHesap:300
}

var hesapB={
    ad:'Batu Kaya',
    hesapNo:'12345678',
    bakiye:500,
    ekHesap:200
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);

    if(hesap.bakiye>=miktar){
        hesap.bakiye=hesap.bakiye-miktar;
        console.log(`Paranızı alabilirsiniz yeterli bakiye mevcut`);
    }else{

        var toplam=hesap.bakiye+hesap.ekHesap;
        if(toplam>=miktar){
            if(confirm(`ek hesabınızı kullanmak ister misiniz?`)){
                console.log(`paranızı alabilirsiniz`);
                var Bakiye=hesap.bakiye;
                var Ekhesap=miktar-Bakiye;
                hesap.bakiye=0;
                hesap.ekHesap=hesap.ekHesap-Ekhesap;

            }else{
                console.log(`${hesap.hesapNo} nolu hesabınızda ${miktar} bulunmamaktadır.`);
            }
        }else{
            console.log(`Üzgünüm 2 hesabın bakiyeside yetersiz.`);
        }
    }

}

paraCek(hesapA,100);
paraCek(hesapA,500);
paraCek(hesapA,300);
//paraCek(hesapB,10000);




