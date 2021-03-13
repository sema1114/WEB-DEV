//Immediate Functions




//İLK KULLANIM
// (function(){

// })();

//İKİNCİ KULLANIM
// (function(){

// }());

(function(name){

    
        var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        
        var today= new Date();
        
        var msg= 'Welcome ' +name +' today is '+days[today.getDay()];
        
    
        console.log(msg);
        
}('Sema'));

