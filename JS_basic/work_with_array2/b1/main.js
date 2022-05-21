/**
 * Array method:
 * forEach()
 * every()
 * some()
 * find()
 * filter()
 * map()
 * reduce()
 */

var courses = [
  {
    id: 1,
    name: "JS",
    coint: 0,
  },
  {
    id: 2,
    name: "Ruby",
    coint: 0,
  },
  {
    id: 3,
    name: "Pyhton",
    coint: 0,
  },
  {
    id: 4,
    name: "HTML",
    coint: 220,
  },
  {
    id: 5,
    name: "SQL",
    coint: 340,
  },
];

// // forEach()
// courses.forEach(function(course, index) {
//     console.log(index, course)
// })

// //every()
// courses.every(function(course) {
//     console.log(course.coint === 0)
// })

// //some()
// courses.some(function(course, index) {
//     console.log(course.coint === 0)
//     return course.coint === 0
// })

// //find()
// console.log(
//     courses.find(function(course, index) {
//         return course.name == "JS"
//     })
// )

// //filter
// console.log(
//     courses.filter(function(course, index) {
//         return course.coint === 0
//     })
// )

//map()
var courseHandler = function (course, index) {
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    price: `${course.coint} VND`,
    index: index,
  };
};

var newCourses = courses.map(courseHandler);

// console.log(newCourses);

//reduce()
// var i = 0;
// function cointHandler(accumulator, currentValue, currentIndex, originArray) {
//     // i++;
//     // console.log(i, accumulator)
//     // console.log(currentValue)
//     return accumulator + currentValue.coint
// }

// var totalCoin = courses.reduce(cointHandler, 0);

// console.log(totalCoin)


// var totalCoint = courses.reduce(function(total, course) {
//   return total + course.coint
// }, 0);

// console.log(totalCoint)

var numbers = ['fun', 7]

var totalcoin = numbers.reduce(function(total, number){
  return total + number
},)

// console.log(totalcoin)

// let total = 'cat';
for (n of numbers) {
  console.log(n)
  n += n
  console.log(n)

}


