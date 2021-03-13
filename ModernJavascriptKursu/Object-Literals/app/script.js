/* Aşağıdaki Object Literals yapısını kullanarak en az 5 araç bilgisini tutunuz.

Araç Bilgileri:
id:bmw116d_1234
model:116d
yil:2015
resn:white
servis kayıtları

id:bmw116d_1234_1 tarih:20.01.2016 km:13000 toplam ücret :900
servis detayı:
id: 1 işlem : yağ değişimi ücret :300
id: 2 işlem : filtre değişimi ücret :300
id: 3 işlem : fren hidroliği ücret :300


id:bmw116d_1234_2 tarih:10.01.2017 km:28000 toplam ücret :1800
servis detayı:
id: 1 işlem : yağ değişimi ücret :350
id: 2 işlem : filtre değişimi ücret :350
id: 3 işlem : fren hidroliği ücret :300


*/

var aracBilgileri = [
{
  id: 'bmw116d_1234',
  model: '116d',
  yil: 2015,
  resn: 'white',

  servisKayitlari: [{
      id: 'bmw116d_1234_1',
      tarih: '20.01.2016',
      km: 13000,
      toplamuccret: 900,
      detay: [{ id: 'bmw116d_1234_1_1', islem: 'yağ değişimi', ucret: 300 }, 
              { id: 'bmw116d_1234_1_2', islem: 'filtre değişimi', ucret: 300 },
              {id: 'bmw116d_1234_1_3', islem: 'fren değişimi', ucret: 300 }

             ]

    },
    {  id: 'bmw116d_1234_2',
      tarih: '10.01.2016',
      km: 28000,
      toplamuccret: 1800,
      detay: [{id: 'bmw116d_1234_2_1', islem: 'yağ değişimi', ucret: 350},
              {id: 'bmw116d_1234_2_2', islem: 'filtre değişimi',ucret: 350},
              {id: 'bmw116d_1234_2_3',islem: 'fren değişimi',ucret: 300 }
            ]
    }
  ]

},
{
  id: 'bmw118i_1234',
  model: '118i',
  yil: 2015,
  resn: 'white',

  servisKayitlari: [{
      id: 'bmw118i_1234_1',
      tarih: '20.01.2016',
      km: 13000,
      toplamuccret: 900,
      detay: [{ id: 'bmw118i_1234_1_1', islem: 'yağ değişimi', ucret: 300 }, 
              { id: 'bmw118i_1234_1_2', islem: 'filtre değişimi', ucret: 300 },
              {id: 'bmw118i_1234_1_3', islem: 'fren değişimi', ucret: 300 }

             ]

    },
    {  id: 'bmw118i_1234_2',
      tarih: '10.01.2016',
      km: 28000,
      toplamuccret: 1800,
      detay: [{id: 'bmw118i_1234_2_1', islem: 'yağ değişimi', ucret: 350},
              {id: 'bmw118i_1234_2_2', islem: 'filtre değişimi',ucret: 350},
              {id: 'bmw118i_1234_2_3',islem: 'fren değişimi',ucret: 300 }
            ]
    }
  ]

},
{
  id: 'bmw320d_1234',
  model: '320d',
  yil: 2015,
  resn: 'white',

  servisKayitlari: [{
      id: 'bmw320d_1234_1',
      tarih: '20.01.2016',
      km: 13000,
      toplamuccret: 900,
      detay: [{ id: 'bmw320d_1234_1_1', islem: 'yağ değişimi', ucret: 300 }, 
              { id: 'bmw320d_1234_1_2', islem: 'filtre değişimi', ucret: 300 },
              {id: 'bmw320d_1234_1_3', islem: 'fren değişimi', ucret: 300 }

             ]

    },
    {  id: 'bmw320d_1234_2',
      tarih: '10.01.2016',
      km: 28000,
      toplamuccret: 1800,
      detay: [{id: 'bmw320d_1234_2_1', islem: 'yağ değişimi', ucret: 350},
              {id: 'bmw320d_1234_2_2', islem: 'filtre değişimi',ucret: 350},
              {id: 'bmw320d_1234_2_3',islem: 'fren değişimi',ucret: 300 }
            ]
    }
  ]

}

]




console.log(aracBilgileri[0]);
console.log(aracBilgileri[0].id);
console.log(aracBilgileri[0].model);
console.log(aracBilgileri[0].servisKayitlari);
console.log(aracBilgileri[0].servisKayitlari[0]);
console.log(aracBilgileri[0].servisKayitlari[0].km);
console.log(aracBilgileri[0].servisKayitlari[0].detay[0].ucret);

console.log(aracBilgileri[1]);
console.log(aracBilgileri[2]);