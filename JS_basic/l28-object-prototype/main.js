// Object prototype

function User(firstName, lastName, avatar) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.avatar = avatar,
    this.getName = function() {
        return `My name is ${firstName} ${lastName}`
    }
}

var user = new User('Long', 'Dao', 'avatar')
var user2 = new User('Den', 'Vau', 'Avatar')

console.log(user)
console.log(user2)

User.prototype.className = 100;

console.log(User)
console.log(user)
console.log(user.className)

User.prototype.getClassName = function() {
    return this.className;
}

console.log(user2.getClassName())