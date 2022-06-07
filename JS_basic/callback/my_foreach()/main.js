//forEach()

var courses = [
    'JS',
    'PHP',
    'Python'
]

Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        console.log('index', index)
    }
}

courses.forEach2(function(course, index, array) {
    console.log(course, index, array)
})

