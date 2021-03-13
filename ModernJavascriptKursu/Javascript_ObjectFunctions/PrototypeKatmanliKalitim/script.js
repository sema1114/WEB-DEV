
//Prototypal Inheritance




let Person=function(name,yearOfbirdth,job){
this.name=name;
this.yearOfbirdth=yearOfbirdth;
this.job=job;
}

Person.prototype.calculateAge=function(){
    return 2021-this.yearOfbirdth;
}

let Teacher=function(name,yearOfbirdth,job,subject){

Person.call(this,name,yearOfbirdth,job);
this.subject=subject;
}

//Inherit the Person Prototype

Teacher.prototype=Object.create(Person.prototype);


//Set  Teacher Constructor
Teacher.prototype.constructor=Teacher;

Teacher.prototype.greeating=function(){
    return "Hello my name is"+ this.name;
}

let Semolin= new Teacher('Sema',1992,'Boss','IT');
console.log(Semolin);

console.log(Semolin.calculateAge());

