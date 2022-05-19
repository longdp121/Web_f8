//Object constructor

function User(fName, lName, avatar) {
  this.fName = fName;
  this.lName = lName;
  this.avatar = avatar;

  this.getName = function() {
      return `${this.fName} ${this.lName}`
  }
}

var author = new User("Long", "Dao", "img");
var user = new User("Vu", "Nguye", "img");

console.log(author);
console.log(user);


//Check constructor
console.log(author.constructor)

//Add propety
author.title = 'Test title';
user.comment = 'Test comment';

console.log(author);
console.log(user);

//Object method
console.log(author.getName())
console.log(user.getName())

//Add method
user.showAvatar = function() {
    return this.avatar
}

console.log(user)