var counter = (function() {
    // debugger;
    // Private Variable (Closure)
    var counter  = 0;

    // Private Method (Closure)
    function printCounter() {
        console.log(counter);
    }

    // Public Method
    function increase() {
        counter = counter + 1;
        printCounter();
    }

    // Public Method
    function decrease() {
        counter = counter - 1;
        printCounter();
    }

    return {
        increase:increase,
        decrease:decrease
    };
}());

console.group('increase');
counter.increase();
counter.increase();
counter.increase();
counter.increase();
console.groupEnd('increase');

console.group('decrease');
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
console.groupEnd('decrease');
