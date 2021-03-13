//Person Constructor
let Person=function(name){
    this.name=name;
}

Person.prototype.Introduce=function(){
    console.log('Hello my name is '+this.name);
}

let p1= new Person('Sema');

p1.Introduce();


//Student

let Student=function(name,number){
   Person.call(this,name);
    this.number=number;
}

Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;

Student.prototype.Study=function(){
    console.log("My number is "+this.number);
}

let st=new Student('Moco',1234);
st.Introduce();
st.Study();


//teacher Constructor

let Teacher=function(name,branch){
    Person.call(this,name);
    this.branch=branch;
}
 
Teacher.prototype=Object.create(Person.prototype);

Teacher.prototype.constructor=Teacher;

Teacher.prototype.Teach=function(){
    console.log("I  teach "+this.branch);
}

let t1=new Teacher('Batu','Turkish');
t1.Introduce();
t1.Teach();
console.log(t1);

//HeadMaster

let HeadMaster=function(name,branch){
Teacher.call(this,name,branch);

}

HeadMaster.prototype=Object.create(Teacher.prototype);
HeadMaster.prototype.constructor=HeadMaster;


HeadMaster.prototype.shareTask=function(){
    console.log('Ive already shared all the work');

}

let h1=new HeadMaster('Ahmet','Math');
h1.Introduce();
h1.Teach();
h1.shareTask();
