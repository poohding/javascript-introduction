/**
 * Lexical Scoping
 */

debugger;

var a = 0;

function foo() {
    var a = 1;
    bar();
}

function bar() {
    console.info("a:", a); // ?
    console.info("this: ", this) // ?
}
foo();
