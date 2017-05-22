/**
 * var foo = 'poohding';
 */
var foo = new String('poohding');

console.group('foo');
console.info("foo:", foo);
console.info("foo.indexOf('d'):", foo.indexOf("d")); // 4
console.info("foo.__proto__ === String.prototype:", foo.__proto__ === String.prototype); // true
console.log("String.prototype.constructor === String:", String.prototype.constructor === String);
console.groupEnd('foo');

/**
 * var bar = {
 *     x: 1
 * };
 */
var bar = new Object();
bar.x = new Number(1);

console.group('bar');
console.info("bar:", bar);
console.info("bar.hasOwnProperty('x'):", bar.hasOwnProperty("x")); // true
console.info("bar.__proto__ === Object.prototype:", bar.__proto__ === Object.prototype); // true
console.info("bar.x.valueOf():", bar.x.valueOf()); // 1
console.log("bar.x.__proto__ === Number.prototype:", bar.x.__proto__ === Number.prototype); // true
console.groupEnd('bar');

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
