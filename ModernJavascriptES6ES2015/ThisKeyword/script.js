//'this' Keyword

//ES5
// let list={
//     category:'phone',
//     names:['Iphone 9', 'samsung','Iphone 6'],
//     call : function(){
//         var self=this;
//         this.names.map(function(name){
//               console.log(`${self.category} ${name}`);
//         })
//     }
// }


// list.call();


// //ES6

// let list1={
//     category:'phone',
//     names:['Iphone 9', 'samsung','Iphone 6'],
//     call : function(){
//         this.names.map((name)=> console.log(`${this.category} ${name}`)
//         )}
// }


//ES5
function Game(){
this.live=0;
this.addLive=function(){
    let a =this;
    this.OneUp=setInterval(function(){
     console.log(++a.live);
    },1000)
}

}

let player= new Game();
player.addLive();


//ES6
function Game1(){
    this.live=0;
    this.addLive=function(){
        this.OneUp=setInterval(()=>{console.log(++this.live)},1000)
    }
    
    }
     
    let player1= new Game1();
    player1.addLive();