document.querySelector('#box1').addEventListener('click', function() {
    console.log(this);
    console.groupEnd('Event Bubbling');
}, false);

document.querySelector('#box1 p').addEventListener('click', function() {
    console.log(this);
}, false);

document.querySelector('#box1 p a').addEventListener('click', function(e) {
    e.preventDefault();
    console.group('Event Bubbling');
    console.log(this);
}, false);

document.querySelector('#box2').addEventListener('click', function() {
    console.group('Event Capturing');
    console.log(this);
}, true);

document.querySelector('#box2 p').addEventListener('click', function() {
    console.log(this);
}, true);

document.querySelector('#box2 p a').addEventListener('click', function(e) {
    e.preventDefault();
    console.log(this);
    console.groupEnd('Event Capturing');
}, true);
