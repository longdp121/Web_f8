/*
Chuoi trong KS
1. Tao chuoi
- Cac cach tao chuoi
- Nen dung cach nao?
- Check data type

2. backslash (\)
3. Xem do dai chuoi
4. Do dai khi videt code
5. Template string ES6
*/

// Cach tao chuoi

var fullName = 'Long';
var fullName2 = new String('Long');

console.log(fullName)
console.log(fullName2)

console.log('fullName', typeof(fullName)) //string
console.log('fullName2', typeof(fullName2)) //object

// backslash (\)

var supper = 'Long is \'supperman\'';
console.log(supper)

var supper2 = 'Long is "supperman"';
console.log(supper2)

var backslashSting = 'Day la dau \\';
console.log(backslashSting)

// Xem do dai chuoi

var myString = 'Dao Phi Long';
console.log('Do dai chuoi', myString.length)
console.log('Type of do dai chuoi', typeof(myString.length))

// Do dai viet code

var longString = 
'Cảnh sát trực chốt ngay từ điểm vào tỉnh, dọc các tuyến đường trung tâm để hướng dẫn các phương tiện, tránh ùn tắc.';

// Templet string

var fName = 'Long';
var lName = 'Dao';

console.log(`My name is ${fName} ${lName}`)

var num = 7;
var num1 = 10;

console.log(`num + num1 = ${num + num1}`)
