/**
 * Function-level Scope
 * Inner Function
 */

// debugger;

var a = 'global';

function foo(){
    var a = 'local';

    console.log(a); // local

    function bar(){
        console.log(a); // ?
    }
    bar();
}
foo();

console.log(a); // ?
