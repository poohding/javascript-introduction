var foo = {
    name: 'poohding',
    sayName: function() {
        console.info("this: ", this); // this = foo;
        console.info("this === foo: ", this === foo); // true;
    }
};

foo.sayName();
