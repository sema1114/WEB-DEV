//Maps: key/Value pairs (collection)


let val;

const numbers=new Map();


numbers.set(1,'one');
numbers.set('2','two');
numbers.set(3,'three');
numbers.set('four','four');

val =numbers;
val=numbers.get(1);
val=numbers.get('2');
val=numbers.get(4);

val=numbers.size;
val=numbers.has(1);
//val=numbers.delete(4);
val=numbers.has(4);
//numbers.clear();

for([key,value] of numbers){
    console.log(key+' '+value);
}

for([key,value] of numbers.entries()){
    console.log(key+' '+value);
}


for(key of numbers.keys()){
    console.log(key);
}

numbers.forEach(function(key,value){
console.log(key+ ' '+value);
})


console.log(numbers);


var first= new Map([


    [1,'one'],
    [2,'two'],
    [3,'three']]
);


var second= new Map([
    [4,'four'],
    [5,'five'],
]
    
);


var merged= new Map([...first,...second]);

console.log(merged);