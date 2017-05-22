function addEventHandler() {
    var lists = document.querySelectorAll('#listGroup1 .list-group-item');

    //*
    // debugger;
    for (var i = 0, len = lists.length; i < len; i++) {
        lists[i].addEventListener('click', function() {
            // debugger;
            console.log(i);
        });
    }
    /*/

    /*
    // debugger;
    function showIndex(index) {
        var i = index;

        return function() {
            debugger;
            return console.log(i);
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
            var index = j;

            lists[i].addEventListener('click', function() {
                // debugger;
                console.log(index);
            });
        }(i));
    }
    /*/

    /*
    // debugger;
    lists.forEach(function(element, index) {
        var i = index;

        element.addEventListener('click', function() {
            debugger;
            console.log(i);
        });
    });
    //*/
}

document.addEventListener('DOMContentLoaded', function() {
    addEventHandler();
});
