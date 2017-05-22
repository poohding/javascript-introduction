/**
 * Function-level Scope
 */

debugger;

var a = 0; // 0

function b() {
    var a = 1;
}
b();
console.info("a:", a); // ?

// Non block-level scope
if (true) {
    var a = 1;
}
console.info("a:", a); // ?
