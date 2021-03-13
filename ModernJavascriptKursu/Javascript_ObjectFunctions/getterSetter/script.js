const person={
    firstName:'Sema',
    lastName:'Kaya'
}


Object.defineProperty(person,'fullName',{

    get function() {
        return `${this.firstName } ${this.lastName}`;
    },

    set function(value){
        const parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
})

Object.defineProperty(person,'age',{
    value: 50,
    writable:true
})

person.age=55;

//person.fullName='Batu Kaya';

//console.log(person.fullName);
console.log(person);
console.log(person.age);
