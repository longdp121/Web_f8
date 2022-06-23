// DOM events

/**
 * 1. preventDefault
 * 2. stopPropagation
 */

var ulElement = document.querySelector("ul");

ulElement.onmousedown = function (e) {
    console.log(e)
    e.preventDefault()
}

ulElement.onclick = function (e) {
    console.log(e.target)
}

var divElement = document.querySelector("div");
divElement.onclick = function () {
    console.log('Clicked DIV!')
}

var btn = document.querySelector("button");
btn.onclick = function (e) {
    console.log(e)
    e.stopPropagation()
    console.log("Clicked Button!")
}