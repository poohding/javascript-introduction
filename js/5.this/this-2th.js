debugger;
console.group('function');

function a() {
    console.log(this); // ?

    function b() {
        console.log(this); // ?
    }
    b();
}
a();

console.groupEnd('function');

debugger;
console.group('method');

var c = {
    name: 'poohding',
    sayName: function() {
        console.log(this); // ?

        var d = function() {
            console.log(this); // ?
        };
        d();
    }
};

c.sayName();

console.groupEnd('method');

debugger;
console.group('method with _this');

var e = {
    name: 'poohding',
    sayName: function() {
        var _this = this;

        console.log(this); // ?

        function f() {
            console.log(_this); // ?
        }
        f();
    }
};

e.sayName();

console.groupEnd('method with _this');

debugger;
console.group('method with call');

var f = {
    name: 'poohding',
    sayName: function() {
        console.log(this); // ?

        function g() {
            console.log(this); // ?
        }

        g.call(this);
    }
};

f.sayName();

console.groupEnd('method with call');
