//Loops


//For loop


// for(let i=0;i<=10;i++){

//     if(i==5){
//         console.log('en sevdiğim rakam: '+i);
//         continue;//dediğimizde alttaki console log u yazmadan devam eder 6 ya geçer 
//     }
//     if(i==8){
//         console.log('en sevmediğim rakam :'+i);
//         break;//ten sonra döngü durur
//     }
//     console.log(i);
// }




//While Loop

// for(let i=0;i<10;i++){
//     console.log(i);
// }

// let i=0;
// while(i<10){
//     console.log(i);
//     i++;//işlem bittikten sonra i yi 1 arttır
// }


//do-while lop

// let i=0;

// do{
//     console.log(i);
//     i++;

// }while(i<10)

// let sonuc=1;
// for(let i=10;i>0;i--){
//     if(i%2==1){
//         sonuc*=i;
//     }
// }
// console.log(sonuc);


let val='\n';

// for(let i=0;i<5;i++){
//     for(let j=0;j<5;j++){
//         console.log(`i: ${i} j:${j}`);
//     }
// }


for(let i=0;i<5;i++){
    for(let j=0;j<10;j++){
        val+='*';
    }
    val+='\n';
}

console.log(val);



