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

// forEach()
courses.forEach(function (course, index) {
  // console.log(index, course)
  return index, course;
});

//every()
courses.every(function (course) {
  // console.log(course.coint === 0)
  return course.coint === 0;
});

//some()
courses.some(function (course, index) {
  // console.log(course.coint === 0)
  return course.coint === 0;
});

//find()
let find = courses.find(function (course, index) {
  return course.name == "JS";
});

// console.log(find)

//filter
let filter = courses.filter(function (course, index) {
  return course.coint != 0;
});

// console.log(filter)

// map()
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

// reduce()
var i = 0;
function cointHandler(accumulator, currentValue, currentIndex, originArray) {
  // i++;
  // console.log(i, accumulator)
  // console.log(currentValue)
  return accumulator + currentValue.coint;
}

var totalCoin = courses.reduce(cointHandler, 0);

// console.log(totalCoin)

//Practice

let myList = [
  { name: "abc", age: 100 },
  { name: "jqk", age: 77 },
  { name: "cde", age: 1000 },
];

function tellYearBorn(person) {
  let year = new Date().getFullYear();
  return {
    name: person.name,
    yearBorn: year - person.age,
  };
}

let newList = myList.map(tellYearBorn);

console.log(newList)
