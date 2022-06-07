//getElement: ID, class, tag, css selector, HTML collections

//getElementById
var headingNode = document.getElementById("heading");

console.log({
  element: headingNode,
});

//getElementsByClassName
var subHeadingNodes = document.getElementsByClassName("sub-heading");

console.log(subHeadingNodes);

//getElementsByTagname
var h3Node = document.getElementsByTagName("h3");

console.log(h3Node);

//querrySelector
var contentNode = document.querySelector(".content");

console.log(contentNode);

//HTMLcollection
console.log(document.forms);

//Select multi element as css selctor

var listItemNodes = document.querySelectorAll(".box-1 li");

console.log(listItemNodes);

var boxNode = document.querySelector(".box-1")

console.log(boxNode.querySelectorAll("li"))
console.log(boxNode.getElementsByTagName("li"))
console.log(boxNode.getElementsByTagName("p"))