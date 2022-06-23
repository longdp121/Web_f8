// DOM attributes

var headingElement = document.querySelector("h1");
headingElement.title = "heading";
headingElement.id = "heading";

headingElement.setAttribute("style", "color: red; font-size: 70px");
console.log(headingElement.getAttribute("class"));
console.log(headingElement.getAttribute("style"));
console.log(headingElement.className);
console.log(headingElement.style)

console.log(headingElement);

var aElement = document.querySelector("a");
aElement.href = "#";

console.log(aElement);
