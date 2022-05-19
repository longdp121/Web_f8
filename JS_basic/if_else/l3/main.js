// Toan tu 3 ngoi

var course = {
    name: 'python',
    cost: 250,
}

// if (course.cost > 0) {
//     console.log(`${course.cost} VND`)
// } else {
//     console.log('FREE')
// }

var result = course.cost > 0 ? `${course.cost} VND` : 'FREE'
console.log(result)

var a = 1;
var b = 2;

var c = a > 0 ? a : b;

console.log(c)