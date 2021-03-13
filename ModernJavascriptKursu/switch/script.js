//Switch statements


let category = 'PCL';



// switch(category){
//     case 'telefon':
//       console.log('Telefon hattındasınız');
//     break;
//     case 'PC':
//        console.log('bilgisayara hoşgeldinzi');                   
//     break;
//     default:
//         console.log('üzgünüm bir kategoride değilsiniz..');

// }

// let day;

// //console.log(new Date().getDay());

// switch (new Date().getDay()) {
//     case 0:
//         day = 'Pazar';
//         break;
//     case 1:
//         day = 'pazartesi';
//         break;
//     case 2:
//         day = 'Salı';
//         break;
//     case 3:
//         day = 'Çarşamba';
//         break;
//     case 4:
//         day = 'Perşembe';
//         break;
//     case 5:
//         day = 'Cuma';
//         break;
//     case 6:
//         day = 'Cumartesi';
//         break;


// }

// console.log(`Bugün günlerden ${day}`);

// let hafta;

// switch (new Date().getDay()) {
//     case 0:
//     case 6:
//         hafta='Hafta içi';
//         break;
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//         hafta = 'Hafta içi';
//         break;
// }

// console.log(`${hafta}`);

var age = 19;
var firstName = 'Sema';

if (age > 0 && age < 12) {
    console.log(`${firstName} is a child.`);
} else if (age >= 13 && age <= 19) {
    console.log(`${firstName} is a teenager`);
} else {
    console.log(`${firstName} is a adult.`);
}


switch (true) {
    case (age > 0 && age <= 12):
        console.log(`${firstName} is a child.`);

        break;
    case (age >= 13 && age <= 19):
        console.log(`${firstName} is a teenager`);

        break;
    default:
        console.log(`${firstName} is a adult.`);

}