function addEventHandler() {
    var lists = document.querySelectorAll('#listGroup1 .list-group-item');

    //*
    // debugger;
    for (var i = 0, len = lists.length; i < len; i++) {
        lists[i].addEventListener('click', function() {
            console.log(i);
        });
    }
    /*/

    /*
    // debugger;
    function showIndex(index) {
        return function() {
            return console.log(index);
        };
    }

    for (var i = 0, len = lists.length; i < len; i++) {
        lists[i].addEventListener('click', showIndex(i));
    }
    /*/

    /*
    // debugger;
    for (var i = 0, len = lists.length; i < len; i++) {
        (function(j) {
            lists[i].addEventListener('click', function() {
                console.log(j);
            });
        }(i));
    }
    /*/

    /*
    // debugger;
    lists.forEach(function(element, index) {
        element.addEventListener('click', function() {
            console.log(index);
        });
    });
    //*/
}

document.addEventListener('DOMContentLoaded', function() {
    addEventHandler();
});
