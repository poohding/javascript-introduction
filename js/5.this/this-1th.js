var foo = {
    name: 'poohding',
    sayName: function() {
        console.log(this); // this = foo;
    }
};

foo.sayName();
