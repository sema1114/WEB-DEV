//Call Apply Bind

var welcome=function(a,b){
    console.log('welcome '+this.name+'.Are you interested in '+a+' and '+b);
}


var sema={name:'sema'};
var batu={name:'batu'};


welcome.call(sema,'asp.net','angular');
welcome.call(batu,'asp.net','angular');


welcome.apply(sema,['asp.net','angular']);
welcome.apply(batu,['aspnet','angular']);

welcomeBatu=welcome.bind(batu);

welcomeBatu('asp.net','angular');

welcomeSema=welcome.bind(sema);

welcomeSema('asp.net','angular');
