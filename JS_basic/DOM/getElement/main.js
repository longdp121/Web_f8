// HTML DOM

/**
 * 1. Element
 * 2. Attribute
 * 3. Text
 */

// How to get element: ID, class, tag, CSS selector, HTML collection

//Get by ID
var headingNode = document.getElementById("heading");

console.log(headingNode);
console.log({"element": headingNode});

//Get by class ==> Always return HTMLcollection (like array)
var headingNodes = document.getElementsByClassName("heading");

console.log(headingNodes);

//Get by tagname ==> Always return HTMLcollection (like array)
var h2Tags = document.getElementsByTagName("h2");

console.log(h2Tags)

//Get by CSS selector
var headingTag = document.querySelector("#heading");

console.log(headingTag)

var heading2Tag = document.querySelector(".box .heading-2");

console.log(heading2Tag)

var headingTags = document.querySelectorAll(".heading"); // ==> querySelectorAll return node list (like array)

console.log(headingTags)

//HTML collection
console.log(document.forms)
console.log(document.anchors)

//Extra
var boxNode = document.querySelector(".box-1");

console.log(boxNode.querySelectorAll("li"));
console.log(boxNode.getElementsByTagName("p"));