//String
var str1='Sema';
var str2=new String("Sema");

console.log(str1);
console.log(typeof(str1));

console.log(str2);
console.log(typeof(str2));

if(str2==='Sema'){
    console.log("yes");
}else{
    console.log("no");
}


String.prototype.repeat= function(n){

    return new Array(n+1).join('sema');
}
console.log('sema'.repeat(2));

//number

var num1=10;
var num2=new Number(10);

//Boolean

var bool1=true;
var bool2=new Boolean(true);

//Object

var obj1={
    name:'sema'
}
var obj2= new Object({
    name:'sema'
});

//Arry

var arr1=['sema','batu','moco'];

var arr2= new Array('sema','batu','moco');

Array.prototype.remove=Array.prototype.remove|| function(member){
    var index=this.indexOf(member);

    if(index>-1){
        this.splice(index,1);
    }
    return this;
}

arr2.remove('sema');
console.log(arr2);
