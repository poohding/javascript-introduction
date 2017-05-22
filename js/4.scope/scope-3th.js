/**
 * Function-level Scope
 * Inner Function
 */

// debugger;

var a = 'global';

function foo(){
    var a = 'local';

    console.info("a:", a); // local

    function bar(){
        console.info("a:", a); // ?
    }
    bar();
}
foo();

console.info("a:", a); // ?
