/**
 * Global Scope
 */

// debugger;

var a = 'global variable';

function b() {
    function c() {
    }
    c();
}
b();

try {
    console.log(a); // ?
    console.log(b); // ?
    console.log(c); // ?
} catch (e) {
    console.log(e);
}
