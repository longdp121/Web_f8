//DOM events
/**
 * 1. Attribute events
 * 2. Assign event using the element node
 */

// Attribute events

//Assign event using the element node

var h2Element = document.querySelectorAll("h2");
// console.log(h2Element)

h2Element.forEach((element) => {
    element.onclick = (e) => {
        console.log("In ra id: ", e.target.id)
    }
})





