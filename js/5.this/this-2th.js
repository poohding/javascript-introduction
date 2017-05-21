(function() {
    console.group('function');

    function foo() {
        console.log(this); // ?

        function bar() {
            console.log(this); // ?
        }
        bar();
    }
    foo();
    console.groupEnd('function');
}());


(function() {
    console.group('method');

    var foo = {
        name: 'poohding',
        sayName: function() {
            console.log(this); // ?

            var bar = function() {
                console.log(this); // ?
            };
            bar();
        }
    };

    foo.sayName();

    console.groupEnd('method');
}());

(function() {
    console.group('method with _this');

    var foo = {
        name: 'poohding',
        sayName: function() {
            var _this = this;

            console.log(this); // ?

            function bar() {
                console.log(_this); // ?
            }
            bar();
        }
    };

    foo.sayName();

    console.groupEnd('method with _this');
}());

(function() {
    console.group('method with call');

    var foo = {
        name: 'poohding',
        sayName: function() {
            console.log(this); // ?

            function bar() {
                console.log(this); // ?
            }

            bar.call(this);
        }
    };

    foo.sayName();

    console.groupEnd('method with call');
}());
