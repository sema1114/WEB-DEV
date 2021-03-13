//Object Lİterals


let val;

let person={
 firstName:'Sema',
 lastName:'Kaya',
 age: 28,
 hobbies:['music','game'],
 adress:{
   city:'Msida',
   country:'Malta'
 },
 getbBirthYear :function(){
     return 2020-this.age;
 }
};

val=person
val=person.firstName;
val=person.lastName;
val=person['firstName'];
val=person.hobbies;
val=person.hobbies[0];
val=person.hobbies.length;
val=person.adress;
val=person.adress.city;
val=person.adress['country'];
val=person.getbBirthYear();

console.log(val);
console.log(typeof person);




let people=[
{firstName:'Mocolina',lastName:'Bayri'},
{firstName:'Semolina',lastName:'Kaya'},
{firstName:'Batu',lastName:'Kaya'}
];

val=people[0];
val=people[2].firstName;


// console.log(val);
// console.log(typeof people);


// for(let i=0;i<=people.length; i++){
// console.log(people[i]);
// }

for(let i=0;i<=people.length;i++){
    console.log(people[i].lastName);
}