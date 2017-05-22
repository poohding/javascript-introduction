/**
 * Hoisting
 */

// debugger;

try {
    foo();
    bar();
} catch (e) {
    console.log(e);
}

var a = 0;

function foo() {
    console.log(a); // ?
    var a = 1;
    console.log(a); // ?
}

var bar = function() {
    console.log(a); // ?
};
