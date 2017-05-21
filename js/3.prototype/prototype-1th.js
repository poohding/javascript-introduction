function Person() {}

Person.prototype.getJob = function() {
    console.log('student');
};

var john = new Person();
var jane = new Person();

john.age = 'male';

var jane = new Person();

john.gender = 'female';

console.dir(Person);
console.dir(john);

console.log(Person.__proto__ === Function.prototype); // true
console.log(Person.__proto__ === Person.constructor); // false
console.log(Person.prototype.constructor === Person); // true
console.log(john.__proto__ === Person.prototype); // true
console.log(jane.__proto__ === Person.prototype); // true
