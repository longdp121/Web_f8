// Callback
//Is a function

var courses = ['JS', 'Python', 'PHP'];

Array.prototype.map2 = function(callback) {
    arrayLength = this.length;
    let output = [];
    for (let i = 0; i < arrayLength; i++) {
        let result = callback(this[i])
        output.push(result)
    }
    return output
}


var arr = courses.map2(function(course) {
    return course
})

// console.log(arr)

//forEach

Array.prototype.forEach2 = function(callback) {
    let arrayLength = this.length;
    for (i = 0; i < arrayLength; i++) {
        callback(this[i], i, this)
    }
}


let numbers = [10, 20, 30, 40]

let sum = 0
numbers.forEach2(function(n) {
    sum += n;
})

console.log(sum)

//filter

let students = [
    {name: 'Dog', age: 10},
    {name: 'Cat', age: 20},
    {name: 'Pig', age: -8}
]

Array.prototype.filter2 = function(callback) {
    let arr = [];
    let arrayLength = this.length;
    for (i = 0; i < arrayLength; i++) {
        callback(this[i], i, this)
        arr.push(this[i])
    }
    return arr
}

let newStudentsList = students.filter2(function(student) {
    return student.age > 0
})

console.log(newStudentsList)


