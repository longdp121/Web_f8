// Cac loai function

/*
1. Declaration fucntion
2. Expression function
3. Arrow function
*/

showMessage();

// Declaration func
function showMessage() {
    // This is delaration func
    // keywork function and must named
    console.log('Declaration fucntion')
}

// showMessage2()

// Expression func
var showMessage2 = function() {
    // This is expression func
    // Doesn't need to named func
    console.log('Expression function')
}

setTimeout(function() {

});

var myObject = {
    myFunction: function () {

    },
}

showMessage();
showMessage2()
