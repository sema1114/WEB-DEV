(function (exports,require,module,__filename,__dirname){


var url= 'http://logger.io/logger';
var name= 'Sema Kaya';

function log (message){

    console.log(message);
    console.log(__filename);
    console.log(__dirname);
}


module.exports ={
    name :name,
    log : log
} //log adında değer tanımladım ve dışarı açtım

});