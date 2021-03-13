var models=[
    {
        name : 'Bmw 418d',
        image: 'img/bmw.jpg',
        link :'http://www.arabalar.com.tr/renault/megane/2020/sedan-1-5-dci-joy'
    },
    {
        name : 'Honda 418d',
        image: 'img/honda.jpg',
        link :'http://www.arabalar.com.tr/renault/megane/2020/sedan-1-5-dci-joy'
    },
    {
        name : 'Mazda 418d',
        image: 'img/mazda.jpg',
        link :'http://www.arabalar.com.tr/renault/megane/2020/sedan-1-5-dci-joy'
    },
    {
        name : 'Skoda 418d',
        image: 'img/skoda.jpg',
        link :'http://www.arabalar.com.tr/renault/megane/2020/sedan-1-5-dci-joy'
    },
    {
        name : 'Volvo 418d',
        image: 'img/volvo.jpg',
        link :'http://www.arabalar.com.tr/renault/megane/2020/sedan-1-5-dci-joy'
    }
];

var index=0;

var slaytCount=models.length;

var settings={
    duration:'2000',
    random:false,
};

var interval;
init(settings);

showSlide(index);


document.querySelector('.fa-arrow-alt-circle-left').addEventListener('click',function(){

    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-alt-circle-right').addEventListener('click',function(){

    index++;
    showSlide(index);
    console.log(index);

});

document.querySelectorAll('.fas').forEach(function(item){
item.addEventListener('mouseenter',function(){
    clearInterval(interval);
})
});


document.querySelectorAll('.fas').forEach(function(item){
item.addEventListener('mouseleave',function(){
    init(settings);
})
});

function init(settings){

    var prev;
   interval= setInterval(function(){

        if(settings.random){
            //random index

            do{
                index=Math.floor(Math.random()*slaytCount);

            }while(index==prev)
            prev=index;

        }
        else{
            //artan index

            if(slaytCount==index+1){
                index=-1;
            }
            showSlide(index);
            console.log(index);
             index++;
        }
       
    },settings.duration);
    
   // setInterval   //durdurmadığın sürece devam eder
   // clearInterval //iledurur setinterval  
    
    


}



function showSlide(i){

index=i;

if(i<0){
    index=slaytCount-1;
}

if(i>=slaytCount){
    index=0;
}



    document.querySelector('.card-title').textContent=models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-title').setAttribute('href',models[index].link)
    
    
    

}







