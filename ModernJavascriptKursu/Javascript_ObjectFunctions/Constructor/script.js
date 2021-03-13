
// function Person(name,yearOfBirdth,job){
//     this.Name=name;
//     this.YearOfBirdth=yearOfBirdth;
//     this.Job=job;
//     this.calculateAge=function(){
//         return 2021-this.YearOfBirdth;
//     }
// }

let Person=function(name,yearOfBirdth,job){
    this.Name=name;
    this.YearOfBirdth=yearOfBirdth;
    this.Job=job;
    this.calculateAge=function(){
        return 2021-this.YearOfBirdth;
    }
}

let Sema= new Person('sema',29,'Muhendis');
let Batu= new Person('Batu',30,'Muhendis');

console.log(Sema.Job);
console.log(Sema.Job);
console.log(Sema.calculateAge());

console.log("************************");

console.log(Batu.Name);
console.log(Batu.Job);


