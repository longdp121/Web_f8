// Object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function() {
        return `My name is ${this.firstName} ${this.lastName}`
    }
}

var author = new User('Long', 'Dao', 'Icon');
var user = new User('Den', 'Vau', 'Icon');

author.title = 'My title added';
user.comment = 'This is comment';

console.log(author.getName());
console.log(user.getName());

console.log(author.constructor)