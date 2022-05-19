// Lam viec voi mang

/**
 To string
 Join
 Pop
 Push
 Shift
 Unshift
 Splicing
 Concat
 Slicing
 */

 var languages = [
     'Javascipt',
     'PHP',
     'Ruby'
 ];

 // To string
 console.log('toString():', languages.toString())

 // Join
 console.log('join:', languages.join(' - '))

 //Pop - Xoa phan tu cuoi mang va return phan tu do
 console.log(languages.pop())
 console.log(languages)

 // Push - Them phan tu vao cuoi mang va return do dai moi
 console.log(languages.push('Python', 'C#'))
 console.log(languages)

 // Shift - Xoa phan tu o dau mang va return phan tu do
 console.log(languages.shift())
 console.log(languages)

 // Unshift - Them phan tu vao dau mang va return do dai moi
 console.log(languages.unshift('ReactJS'))
 console.log(languages)

 // Splicing
 var myArray = ['JS', 'Ruby', 'HTML/CSS'];

 myArray.splice(1, 1)
 console.log(myArray)

 myArray.splice(3, 0, 'NodeJS', 'Java', 'Golang')
 console.log(myArray)

 // Concat

 var myArray2 = ['Dart', 'C++']

 console.log(myArray.concat(myArray2))

 console.log('myArray after concat', myArray)
 console.log('myArray2 after concat', myArray2)

 // Slicing

 var arrayToSlice = [1, 2, 3, 4]
 console.log(arrayToSlice.slice(1, 3))

 function getLastElement(myArray) {
     return myArray[myArray.length - 1]
 }

 arr = ['a', 'b', 'c', 'd']
 console.log(getLastElement(arr))