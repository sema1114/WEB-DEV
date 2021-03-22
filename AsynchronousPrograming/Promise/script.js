// var p= new Promise(function(resolve,reject){
//   if(false){
//      resolve('success');
//   }else{
//     reject('failure');
//   }
// });

// p.then(function(data){
//     console.log(data);}
//     ).catch(function(error){
//         console.log(error);
//     });


// new Promise(function(resolve,reject){
// setTimeout(() => {
//     resolve(7);
// }, 1000);


// }).then(function(number){
//     console.log(number);
//     return number*number;
// }).then(function(number){
//   console.log(number);
//   return number*number;
// }).then(function(number){
//     console.log(number);
// });

const isMomHappy=true;


const willGetNewPhone=new Promise((resolve,reject)=>{
 
    if(isMomHappy){
        const phone={
      name : 'IPhone',
      pric : 4000,
      color : 'rosegold'
        }

        resolve(phone);
    } else{
        const error= new Error('Mom is not happy');
        reject(error);
    }

});


const showToFriends =function(phone){
    const message = "Hi friends this is my new phone "+phone.name;

       return Promise.resolve(message);
}


const askMom=function(){
willGetNewPhone.then(showToFriends)
.then(message=>{
    console.log(message);
})
.catch(error=>{
    console.log(error);
})
  
}

askMom();
