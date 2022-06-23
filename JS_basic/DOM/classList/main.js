// ClassList property
/**
 * 1. Add
 * 2. Contains
 * 3. Remove
 * 4. Toggle
 */

var boxElement = document.querySelector(".box")
console.log(boxElement.classList)
console.log(boxElement.classList.value)

// boxElement.classList.add("red")
// console.log(boxElement.classList.contains("red"))
// boxElement.classList.remove("red")

setInterval(() => {
    boxElement.classList.toggle("green")
}, 1000)