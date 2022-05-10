// Object trong JS

var emailKey = 'email';

var myInfo = {
    name: 'Long',
    age: 18,
    address: 'Hanoi',
    [emailKey]: 'mail mail mail',
    getName: function() {
        return this.name;
    }
};

console.log(myInfo);

myInfo.email = 'mail@yahoo.com';

console.log(myInfo);
console.log(myInfo.name)

var myAdd = 'address';

console.log(myInfo[myAdd])

var emailKey = 'email';

delete myInfo.age;

console.log(myInfo)

// Key is function ==> Phuong thuc / method
// Other ==> Thuoc tinh / property
console.log(myInfo.getName())

