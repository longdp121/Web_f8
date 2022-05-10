/*
Number trong js

1. Tao gia tri number
- Cac cah tao
- Dung cach nao
- Check data type

2. Lam viec voi number
- To string
- To fixed
*/

var myNum = 890000;
var PI = 3.14;

var otherNum = new Number(90);

console.log(typeof(myNum))
console.log(typeof(PI))
console.log(typeof(otherNum))

var result = 20 / 'abc';
console.log('Return NaN number',result)
console.log('Check if calc is unvalid', isNaN(result))

// Keyword: JS number method


// To string
console.log(myNum.toString())

// To fixded
console.log(PI.toFixed())
console.log(PI.toFixed(1))

console.log('After toFixded, become string: ', typeof(PI.toFixed(1)))

var num = 10;

var check = typeof(num)

console.log(check)
console.log(typeof(check))


function isNumber(value) {
    if (isNaN(value)) {
        return false;
    } else {
        return typeof(value) === 'number';
    }
}

console.log(isNumber(10/'ad'))
console.log(isNumber(1000))
console.log(isNumber('ok'))
