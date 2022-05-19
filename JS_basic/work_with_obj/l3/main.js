function User(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.showInfo = function() {
        return `My name is ${this.fName} ${this.lName} and I'm ${this.age}`
    }
}

let user = new User('Long', 'Dao', 70);
let user1 = new User('Duy', 'Le', 900);
let user2 = new User('Phuong', 'Anh', 100);

User.prototype.yearBorn = function() {
    return `I'm ${this.fName} was born in ${2022 - this.age}`
}

let userList = [user, user1, user2]

for (i of userList) {
    console.log(i.yearBorn())
}