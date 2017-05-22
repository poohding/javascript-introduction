/**
 * Hoisting
 */

// debugger;

try {
    foo();
    bar();
} catch (error) {
    console.log("error:", error);
}

var a = 0;

function foo() {
    console.info("a:", a); // ?
    var a = 1;
    console.info("a:", a); // ?
}

var bar = function() {
    console.info("a:", a); // ?
};
