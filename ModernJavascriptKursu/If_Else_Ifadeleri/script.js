// If/Else Statements

const firstName='Sema';
const age=25;
const isStudent=false;
const school='university';

// if(firstName==='Sema'){
//     console.log('Merabaa Semonilaa..');
// }

// if(age===19){
//     console.log('Yaşınız 19')
// }

// if(isStudent){
//     console.log('Selam böocek')
// }
// else{
//     console.log('işler nasıl');
// }

// if ((age>=18)||(school=='high school')){ //Yada
// if(school=='university'){
//     console.log('Ehliyet alabilirsiniz..');
// }
// else
// {
// console.log('Ehliyet alamazsınız eğitim durumuz yüzünden');
// }
// }
// else{
//     console.log('Ehliyet alamazsınız yaşınız yüzünden');
// }

// if(age>0 && age<12){
//     console.log(`${firstName} is a child.`);
// }
// else if(age>=13 && age<=19){
//     console.log(`${firstName} is a teenager`);
// }
// else{
//     console.log(`${firstName} is a adult.`);
// }


//Undefind

let id='1234560';

//gelen id Undefin a eşit değilse yani undefind değilse defnd dır
//id isminde  bir değişkenimiz var
if(typeof id!=='undefined'){ //tanımlanmamış bir değişken undefind a eşit olmadığnıda
    console.log('id: '+id);
}
else{
    console.log('no id');
}
