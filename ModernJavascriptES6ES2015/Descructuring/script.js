//Desctructuring


//Desctructuring Assigment

var a,b,rest;


[a,b]=[10,20];

console.log(a);
console.log(b);

[a,b,...rest]=[12,15,14,16,17,18,19];
console.log(a);
console.log(b);
console.log(rest);

({a,b,...rest}={a:10,b:20,c:40,d:40});
console.log(a);
console.log(b);
console.log(rest);

//array desctructuring  
// const arrConfig=['localhost','8080','900'];

// // var server=arrConfig[0];
// // var port=arrConfig[1];
// // var timeout=arrConfig[2];

// // console.log(server,port,timeout);

// const[server,port,timeout]=arrConfig;

// console.log(server,port,timeout);

//Object desctructuring
const objConfig={
    server:'localhost',
    port:'8080',
    //timeout:900
}

// var server=objConfig.server;
// var port=objConfig.port;
// var timeot=objConfig.timeout;



// const{server,port,timeot}=objConfig;


//  console.log(server,port,timeout);

// let{timeout : t}=objConfig;


// console.log(t);

// let {server,port,timeout=800}=objConfig;

// console.log(server,port,timeout);



const days=['Monday','Tuesday','Wednesday','Thursday','Friday'];


const[,,wed,,fri]=days;

console.log(wed,fri);
























