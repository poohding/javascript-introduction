var foo = {
    x: 1
};

console.group('foo');
console.info("foo:", foo);
console.info("foo.hasOwnProperty('x'):", foo.hasOwnProperty("x")); // true
console.info("foo.__proto__ === Object.prototype:", foo.__proto__ === Object.prototype); // true
console.log("foo.x.__proto__ === Number.prototype:", foo.x.__proto__ === Number.prototype); // true
console.groupEnd('foo');

function Person() {
    this.nationality = 'ameria';
}

Person.prototype.getJob = function() {
    console.log('student');
};

var john = new Person();
var jane = new Person();

john.age = 'male';

var jane = new Person();

john.gender = 'female';

console.group('Person');
console.info("Person:", Person);
console.info("john:", john);

console.info("Person.__proto__ === Function.prototype:", Person.__proto__ === Function.prototype); // true
console.info("Person.__proto__ === Person.constructor:", Person.__proto__ === Person.constructor); // false
console.info("Person.prototype.constructor === Person:", Person.prototype.constructor === Person); // true
console.info("john.__proto__ === Person.prototype:", john.__proto__ === Person.prototype); // true
console.info("jane.__proto__ === Person.prototype:", jane.__proto__ === Person.prototype); // true
console.groupEnd('Person');
