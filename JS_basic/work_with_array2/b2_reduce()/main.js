//reduce()

var courses = [
  {
    id: 1,
    name: "JS",
    coin: 2000,
  },
  {
    id: 2,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 3,
    name: "Pyhton",
    coin: 0,
  },
  {
    id: 4,
    name: "HTML",
    coin: 220,
  },
  {
    id: 5,
    name: "SQL",
    coin: 340,
  },
];

//With initialValue

// let i = 0

let totalCoin = courses.reduce(function (total, course) {
  // i ++
  // console.log(i, total)
  return total + course.coin;
}, 0);

console.log(totalCoin);

//Without initialValue

var numbers = [2000, 0, 0, 220, 340];

// let j = 0

var total = numbers.reduce(function (total, number) {
  // j++;
  // console.log(j, total)
  return total + number;
});

console.log(total);

//Flat the array

let deptArray = [1, 2, 3, [4, 5], 6, [7, 8], 9];

let flatArray = deptArray.reduce(function (flatOutput, item) {
//   console.log(flatOutput, item);
  return flatOutput.concat(item);
}, []);

console.log(flatArray);

//Get value and add to new array

let topics = [
  {
    topic: "FE",
    course: [
      { id: 1, title: "HTML" },
      { id: 2, title: "JS" },
    ],
  },
  {
    topic: "BE",
    course: [
      { id: 1, title: "PHP" },
      { id: 2, title: "Pyhton" },
    ],
  },
];

let newCourses = topics.reduce(function(course, topic) {
    return course.concat(topic.course)
}, [])

console.log(newCourses)

let htmls = newCourses.map(function(course) {
    return `
    <div>
        <h2>${course.title}</h2>
        <p>ID: ${course.id}</p>
    </div>
    `
})

console.log(htmls.join(''))

document.write(htmls.join(''))
