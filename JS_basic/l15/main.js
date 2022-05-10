// Toan thu so sanh P2

/**
 * ===  so sanh tuyet doi
 * !==  so sanh tuong doi
 */

var a = 1;
var b = '1';

console.log('So sanh a == b:', a == b) // so sanh gia tri
console.log('So sanh a === b:', a === b) // so sanh gia tri + kieu du lieu

console.log('So sanh a != b', a != b)
console.log('So sanh a !== b:', a !== b)

console.log(Boolean(1))
console.log(!Boolean(1))
console.log(Boolean({age: 9000}))

var emptyArray = []

console.log('Empty Array', Boolean(emptyArray))

if(!emptyArray) {
    console.log('True')
} else {
    console.log('False')
}