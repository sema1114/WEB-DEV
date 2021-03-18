// //Classes

// //ES5 
// var PersonES5 =function(name,job,yearOfbirth){
//     this.name=name;
//     this.job=job;
//     this.yearOfbirth=yearOfbirth;

// }

// PersonES5.prototype.calculateAge=function(){
//     return 2021-this.yearOfbirth;
// }

// var sema= new PersonES5('sema','mühendis',1992);

// console.log(sema.calculateAge());


// //ES6

// class PersonES6{
//     constructor(name,job,yearOfBirth){
//         this.name=name;
//         this.job=job;
//         this.yearOfBirth=yearOfBirth;
//     }

//     calculate(){
//         return 2021-this.yearOfBirth;
 
// static sayHi(){
//     return 'HEllo Thereee';
// }

// }


// let Batu=new PersonES6('Batu','Mühendis',1991);

// console.log(Batu.calculate()); 

// console.log(PersonES6.sayHi());

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    
static distance(a,b){
    const dx=a.x-b.x;
    const dy=a.y-b.y;

    return Math.hypot(dx,dy);
}
}

const d1=new Point(10,10);
const d2=new Point(20,20);

console.log(Point.distance(d1,d2));



//SUB CLASS

function PersonES5(firstName,lastName){
this.firstName=firstName;
this.lastName=lastName;
}


PersonES5.prototype.sayHi=function(){
    return `Hello I'm ${this.firstName} ${this.lastName}`
}

function CustomerES5(firstName,lastName,phone,username){
PersonES5.call(this,firstName,lastName);
this.phone;
this.username;
}


CustomerES5.prototype=Object.create(PersonES5.prototype);

var customer= new CustomerES5('sema','Kaya','12334','semakaya');



console.log(customer.sayHi());
console.log(customer);
///ES6

class PersonES6{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
   sayHi(){

       return `Hello I 'm ${this.firstName} ${this.lastName}`
   }


}

class CustomerES6 extends PersonES6{
constructor(firstName,lastName,phone,username){
    super(firstName,lastName);
    this.phone;
    this.username=username;
}

static getTotal(){
    return 1000;
}
}


let customer1=new CustomerES6('Batu','Kaya','3333','batukaya');

console.log(customer1.sayHi());
console.log(CustomerES6.getTotal());


