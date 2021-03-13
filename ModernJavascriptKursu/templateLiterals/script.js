//Template Literals

const fullName='Sema Kaya';

const city='Msida';
const yearofBirth=1992;

let val;

// val= 'My name is '+fullName+
//      ' I\'m '+ (2020-yearofBirth)+' years Old '+
//      ' and I live in '+city;

 



val=`My name is ${fullName} I'm ${2020-yearofBirth>=18?'over 18':'under 18'} and I live in ${city}`;

console.log(val);