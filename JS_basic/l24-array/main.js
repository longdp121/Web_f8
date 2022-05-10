/**
 Mang trong JS
 * 1. Tao mang
 - Cach tao
 - Nen su dung cach nao?
 - Check data type
 * 2. Truy xuat mang
 - Do dai mang
 - Lay phan tu theo index
 */

 var languages = [
     'JS',
     'PHP',
     'Python',
     'NodeJS',
     'C#',
     null,
     undefined,
     1000,
     function() {

     },
     {}
 ];

 console.log(languages)

 var myArray = new Array('Ruby', 10, NaN)

 console.log(myArray)

console.log(typeof(languages))
console.log(typeof(myArray))
console.log(Array.isArray(languages))
console.log(Array.isArray({}))

// Truy xuat mang

// Do dai array
console.log(languages.length)

// Truy xuat theo index
console.log(languages[2])