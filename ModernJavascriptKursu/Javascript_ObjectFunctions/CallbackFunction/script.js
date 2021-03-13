//Callback Function

let val;
function MultipleByTwo(a,b,c,callBack){
  let arr =[];

  if(callBack && typeof callBack==='function'){

  for(i=0;i<3;i++){
      arr[i]=callBack(arguments[i]*2);
  }
  }
  return arr;
}

function addOne(a){
    return a+1;
}


function addTwo(a){
    return a+2;
}


function addThree(a){
    return a+3;
}

val= MultipleByTwo(20,30,40,function(b){
return b+5;
});

// val=MultipleByTwo(10,20,30,addTwo);
// //   val=addOne(19);

// for(let i=0;i<val.length;i++){

//     val[i]=addOne(val[i]);}


console.log(val)

