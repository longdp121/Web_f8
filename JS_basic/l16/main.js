// Cau lenh dieu kien
// Phep so sanh

var a = 1;
var b = 2;

// var result = a < b && a > 0;

// console.log(result)

// if (a < b) {
//     console.log('a < b')
// } else {
//     console.log('a > b')
// }

// if (result) {
//     console.log('result:', 'a < b')
// } else {
//     console.lof('result', 'a > b')
// }

var result = 'A' && 'B' && 'C';

console.log(result)

var result1 = 'A' && null && 'B';

console.log(result1)

if (result1) {
    console.log('RIGHT')
} else {
    console.log('WRONG')
}

var result2 = 'A' || 'B'  || 'C' || 'D';

console.log(result2)

var result3 = null || 0 || undefined || '';

console.log(result3)

if (result3) {
    console.log('RIGHT')
} else {
    console.log('WRONG')
}