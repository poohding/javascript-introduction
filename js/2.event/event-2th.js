document.querySelector('#box1').addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e.target);
}, false);


document.querySelector('#box2').addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e.target);
}, false);

document.querySelector('button').addEventListener('click', function() {
    var wrapper = document.querySelector('#box2'),
        a = document.createElement('a'),
        lastIndex = wrapper.querySelectorAll('a').length + 1;

    a.setAttribute('href', '#');
    a.setAttribute('class', 'list-group-item');
    a.innerHTML = 'list-' + lastIndex;

    wrapper.appendChild(a);
});
