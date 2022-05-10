// Data type

// Primitive Data - Du lieu nguyen thuy
/**
 * Number
 * String
 * Boolean
 * Underfined
 * Null
 * Stmbol
 */

// Complex Data - Du lieu phuc tap
/**
 * Function
 * Object
 */


//
// Du lieu nguyen thuy: Du lieu luu vao vung nho va khong the thay doi duoc

// Number
var a = 1;
var b = 2;
var c = 1.5;

console.log(typeof(a))

// String
var fullName = 'Long';
var animal = 'Cho \'meo';
var tree = "Cay 'da"
console.log(animal)
console.log(tree)

console.log(typeof(fullName))

// Boolean
var isSuccess = true;

// Undefined
var undefinedVar;

console.log(undefinedVar)

// Null
var isNull = null; // nothing

console.log(isNull)

console.log(typeof(isNull))

// Symbol
var id = Symbol('id'); // unique
var id2 = Symbol('id'); // unique

console.log(id)
console.log(id2)

console.log(id === id2)

console.log(typeof(id))


//
// Kieu du lieu phuc tap

// Function
var myFunction = function() {
    console.log('Hello anh em')
}

myFunction()

console.log(typeof(myFunction))

// Object
var myObject = {
    name: 'Long',
    age: 90,
    address: 'Hanoi',
    job: true,
    newFunction: function() {

    },
};

console.log('My object', myObject)

console.log(typeof(myObject))

var myArray = [
    'Js',
    'Python',
    'PHP',
    'Java'
];

console.log(myArray)

console.log(typeof(myArray))