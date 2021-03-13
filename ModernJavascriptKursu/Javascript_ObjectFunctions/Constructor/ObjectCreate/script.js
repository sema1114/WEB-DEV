
///Object Create


let personProto={
    calculateAge:function(){
    return 2021-this.yearOfbirdth;
    }
}

let Sema= Object.create(personProto);

console.log(Sema);

Sema.name='Sema';
Sema.yearOfbirdth=1992;
Sema.job='Boss';


let Batu = Object.create(personProto,{
 name: {value:'Batu'},
 yearOfbirdth:{value: 1991},
 job:{value : 'Mühendis'}   
});



console.log(Sema);
console.log(Sema.calculateAge());
console.log(Batu);
console.log(Batu.calculateAge());

