//Demo:Numeric Range

var num={
    min:0,
    max:100,
    checkNumberRange:function(value){
        if(typeof value!=='number'){
            return false
        }else{
            return value>=this.min&&value<=this.max;
        }

    }
}


console.log(num.checkNumberRange(65));
console.log(num.checkNumberRange(-8));

var num1={min:50, max:90};

a=num.checkNumberRange.call(num1,55);
console.log(a);

console.log(num.checkNumberRange.apply(num1,[91]));

var checkNumber= num.checkNumberRange.bind(num1);

console.log(checkNumber(56));