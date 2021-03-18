//Rest Prameters


//ES5


function sumES5(){
let arr=Array.prototype.slice.call(arguments);

           let result=0;
             arr.forEach(function(item){
               result+=item;
             });
             return result;
}




console.log(sumES5(10,20,30));

//ES6

function sumES6(...arr){
let result=0;

arr.forEach(item=>result+=item)
return result;
}


console.log(sumES6(10,20,30,40));



function IsDriver(age,...years){
    years.forEach(year=>console.log(2018-year>=age))
}

IsDriver(20,1990,2020,2000,1996);