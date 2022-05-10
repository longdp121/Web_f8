// Toan tu ++ --
// Prefix and Postfix

var a = 6;

// Prefix
/**
 * 1: + 1 cho a, a = a + 1 ==> a = 7
 * 2: Tra ve a sau khi duoc + 1
 */

// var output = ++a
// console.log(output)

// Postfix
/**
 * 1: copy bien a, a copy = 6
 * 2: Cong 1 vao a, a = a + 1 ==> a = 7
 * 3: Tra ve a copy
 */
var output = a++;
console.log('output', output)
console.log('a', a)

var number = 6;

var output1 = number++ + --number
console.log(output1) //12

var output2 = ++number * 2 - number-- * 2
console.log(output2) //0