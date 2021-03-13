var a=10;
var b=a;

console.log(a);
console.log(b);


var obj1 = {
    name : 'sema',
    age : 19
}

var obj2 =obj1;
obj1.age=20;
obj2.name ='Batu';

console.log(obj1.age);
console.log(obj2.age);

console.log(obj1.name);
console.log(obj2.name);


var num = 50;

var account = {
    name :'Sema',
    accountNumber : '222222'
}
function update(a,b){
    a=100;
    b.accountNumber='1212121234432'
}

update(num,account);
console.log(num);

console.log(account);


