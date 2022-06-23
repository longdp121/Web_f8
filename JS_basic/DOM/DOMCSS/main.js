// DOM style

var boxElement = document.querySelector(".box")

Object.assign(boxElement.style, {
    width: "300px",
    height: "200px",
    backgroundColor: "#746AB0"
})

// console.log(boxElement.style.backgroundColor)
let elementWidth = boxElement.style.width;

console.log(elementWidth)

Object.assign(boxElement.style, {
    width: elementWidth,
    height: elementWidth,
    backgroundColor: "#746AB0"
})






