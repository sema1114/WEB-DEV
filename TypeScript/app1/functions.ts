// function getAvarage(a:number,b:number,c?:number):string{

//     let total=a+b;
//     let count=2;

//     if(typeof c !=='undefined'){
//         total+=c;
//         count++;
//     }
//  const result=total/count;

// return 'Result :'+result;

// }


// getAvarage(2,4,6);
// getAvarage(10,20);


// //rest parameter
// function getAvarage(...a:number[]):string{

//     let total=0;
//     let count=0;


//     for(let i=0;i<a.length;i++){
//         total+=a[i];
//         count++;
//     }
   

//  const result=total/count;

// return 'Result :'+result;

// }




//arrow function  void geriye değer döndürmez
const getAvarage=(...a:number[]):string=>{

    let total=0;
    let count=0;


    for(let i=0;i<a.length;i++){
        total+=a[i];
        count++;
    }
   

 const result=total/count;

return 'Result :'+result;

}


getAvarage(10,20,30,40,50);



getAvarage(2,4,6);
getAvarage(10,20);
