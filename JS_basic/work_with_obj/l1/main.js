// Object trong JS

var myInfo = {
  name: "Long",
  age: 99,
  address: "Hanoi",
  getName: function () {
    return this.name;
  },
};
console.log("Original Obj", myInfo);

// Add key & vallue
myInfo.email = "mail@mail.uk";
console.log("After add email", myInfo);

// Get vallue
console.log(myInfo.name);
console.log(myInfo["email"]);

// User varibale as key
var myKey = "address";
console.log(myInfo[myKey]);

// Add key by variable
var schoolKey = "school";
var myObject = {
  [schoolKey]: "Ba Dinh",
};
console.log(myObject);

// Delete key-vallue pair
delete myInfo.age;
console.log("After delete", myInfo);

// Function inside object --> Phuong thuc
console.log(myInfo.getName());
