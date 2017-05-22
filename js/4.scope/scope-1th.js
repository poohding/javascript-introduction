/**
 * Global Scope
 */

debugger;

var a = 'global variable';

function b() {
    function c() {
    }
    c();
}
b();

try {
    console.info("a:", a); // ?
    console.info("b:", b); // ?
    console.info("c:", c); // ?
} catch (error) {
    console.info("error:", error);
}
