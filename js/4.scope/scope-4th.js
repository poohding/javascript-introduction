/**
 * Implied Globals
 */

debugger;

var a = 'global';

function foo(){
    a = 'local';

    console.info("a:", a); // local

    function bar(){
        b = 'b';
        console.info("b:", b); // ?
    }
    bar();
}
foo();

console.info("a:", a); // ?
console.info("b:", b); // ?
