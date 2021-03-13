let Person = function (name, birth, job) {
    this.name = name;
    this.birth = birth;
    this.job = job;
}

Person.prototype.calculate = function () {
    return 2021 - this.birth;
}
Person.prototype.lastName = 'Kaya';

let Sema = new Person("Sema", 1992, "Boss");
console.log(Sema.name);
console.log(Sema.calculate());
console.log(Sema);

console.log(Sema.hasOwnProperty('name')); //Sema nın proppudun

//********ÖRNEK ÖRNEKKKK */
 function Employe (name, salary) {

    if (!(this instanceof Employe)) {
        return new Employe(name, salary);
    }
    this.name = name;
    this.salary = salary;
}



Employe.prototype.CalculateSalary = function () {

    var month= new Date().getMonth()+1;
var tax=0;
var total=this.salary*month;

if(total<=2000){
    tax=total*0.2;
}else if(total>2000 && total<=3000){
    tax=total*0.25;
}
else{
    tax=total*0.3;
}

return{
    tax : tax,
    paid : total-tax
}

}

var emp1 = Employe("Sema", 3000);
console.log(emp1);

var emp1Salary=emp1.CalculateSalary();

console.log(`${emp1.name} isimli personel toplam ${emp1Salary.tax} vergi kesintisi ile ${emp1Salary.paid} Euro maaş almıştır`);

var emp2 = new Employe("Batu", 1800);
console.log(emp2);